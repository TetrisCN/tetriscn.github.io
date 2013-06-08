$(function(){
    var list=null;
    var left=$("#left-inner");
    var main=$("#main-inner");
    var tip=$("#tip-label-text");
    var tip_div=$("#tip");
    var tip_list=["加载列表中~"];
    var as=null;
    var datas={};
    var now="";
    var converter=new Showdown.converter();
    function convert(str){
        str=str.replace(/\|ORZ\|/g,"<span class='hidden'>ORZ</span>");
        str=str.replace(/\[\[\[(.*?)\]\]\]/,"<span class='black'>$1</span>");
        var m=str.match(/\{\{\{.*?\}\}\}/g);
        if(m){
            $.each(m,function(k,v){
                var mm=v.match(/\{\{\{(.*?)\}\}\}/);
                var data=get_data(mm[1]);
                if(data){
                    if(data.url){
                        str=str.replace(v,"<a href='#' data='"+mm[1]+"'>"+convert(data.name)+"</a>");
                    }else{
                        str=str.replace(v,"<span>"+convert(data.name)+"</span>");
                    }
                }else{
                    str=str.replace(v,"");
                }
            });
        }
        return str;
    }
    function get_html(json,str){
        var html="<ul>";
        var data;
        for(var i=0;i<json.list.length;i++){
            data=json.data[json.list[i]];
            html+="<li>";
            if(data.url){
                html+="<p><a href='#' data='"+(str?str+".":"")+json.list[i]+"'>"+convert(data.name)+"</a></p>";
            }else{
                html+="<p>"+convert(data.name)+"</p>";
            }
            if(data.data && data.list){
                html+=get_html(data,json.list[i]);
            }
            html+="</li>";
        }
        html+="</ul>";
        return html;
    }
    function get_data(str){
        var l=str.split(".");
        var t=list;
        for(var i=0;i<l.length;i++){
            if(!(t=t.data[l[i]])){
                return null;
            }
        }
        return t;
    }
    function load(name){
        if(now!=name){
            var data=get_data(name);
            if(data){
                if(datas[name]){
                    main.html(datas[name]);
                }else{
                    $.get(data.url,function(md){
                        main.html(convert(converter.makeHtml(md)));
                        main.find(".block").each(function(){
                            var div=$(this);
                            var data=div.html();
                            var width=data.split("|")[0].length*16;
                            var html="";
                            for(var i=0;i<data.length;i++){
                                if(data[i]!="|"){
                                    html+="<img src='block-"+data[i]+".png' />";
                                }
                            }
                            div.html(html);
                            div.css("width",width);
                            div.removeClass("block");
                            div.addClass("block-view");
                        });
                        datas[name]=main.html();
                    });
                }
                now=name;
                window.location.hash="#!"+name;
                as.removeClass("on");
                as.filter("a[data="+name.replace(/\./g,"\\.")+"]").addClass("on");
            }
        }
    }
    function change_tip(){
        tip.html(tip_list[Math.floor(Math.random()*tip_list.length)]);
    }
    $.getJSON("main.json",function(json){
        list=json;
        left.html(get_html(list));
        as=left.find("a");
        var hash=window.location.hash.replace(/^#/,"").replace(/^!/,"");
        if(hash){
            load(hash);
        }else{
            load("home");
        }
    });
    $.get("tip.txt",function(text){
        var temp=text.split("\n");
        tip_list=[];
        $.each(temp,function(index,data){
            data=data.trim();
            if(data){
                tip_list.push(data);
            }
        });
        change_tip();
    });
    $("#tip-icon").click(function(){
        change_tip();
    }).mouseover(function(){
        tip_div.stop();
        tip_div.animate({
            right:0
        });
    }).mouseout(function(){
        tip_div.stop();
        tip_div.animate({
            right:40
        });
    });
    $("body").on("click","a",function(e){
        var a=$(e.target);
        var data=a.attr("data");
        if(data){
            load(data);
        }else{
            window.open(a.attr("href"),"_blank");
        }
        e.preventDefault();
    });
});