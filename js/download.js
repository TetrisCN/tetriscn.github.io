$(function(){
    var label={
        "win":"Windows",
        "mac":"Mac(OS X)",
        "linux":"Linux",
        "zh":"中文",
        "en":"English",
        "jp":"日本語",
        "download":{
            "zh":"下载",
            "en":"Download",
            "jp":"Download"
        },
        "other":{
            "zh":"其他下载",
            "en":"Other download",
            "jp":"Other download"
        },
        "platform":{
            "zh":"操作系统",
            "en":"Operating System",
            "jp":"Operating System"
        },
        "language":{
            "zh":"语言",
            "en":"Language",
            "jp":"Language"
        },
        "version":{
            "zh":"版本",
            "en":"Version",
            "jp":"Version"
        },
        "submit":{
            "zh":"下载",
            "en":"Download",
            "jp":"Download"
        },
        "collapse":{
            "zh":"收起",
            "en":"Collapse",
            "jp":"Collapse"
        }
    };
    var data={
        "top":{
            "win":{
                "zh":["0.5","0.4","0.3"],
                "en":["latest"],
                "jp":["latest"]
            }            
        }
    };
    var platform="";
    if(navigator.platform.indexOf("Win")!=-1){
        platform="win";
    }else if(navigator.platform.indexOf("Mac")!=-1){
        platform="mac";
    }else if(navigator.platform.indexOf("Linux")!=-1){
        platform="linux";
    }else{
        platform="win";
    }
    var temp=(navigator.userLanguage || navigator.language).toLowerCase();
    var language="";
    if(temp.indexOf("zh")!=-1){
        language="zh";
    }else if(temp.indexOf("en")!=-1){
        language="en";
    }else if(temp.indexOf("jp")!=-1){
        language="jp";
    }else{
        language="zh";
    }
    $(".item").each(function(){
        var item=$(this);
        var name=item.data("name");
        if(data[name]){
            var description=item.find(".description");
            var form=$("<div></div>")
                .addClass("form")
                .hide()
                .appendTo(item);
            $("<label></label>")
                .html(label.platform[language])
                .appendTo($("<div></div>").appendTo(form));
            var select_platform=$("<select></select>")
                .on("change",function(){
                    language_option
                        .detach()
                        .filter("[value^='"+select_platform.val()+"']")
                            .appendTo(select_language);
                    version_option.detach();
                    select_language.prop("selectedIndex",-1);
                    select_version.prop("selectedIndex",-1);
                    submit
                        .removeAttr("href")
                        .addClass("disabled");
                })
                .appendTo($("<div></div>").appendTo(form));
            $("<label></label>")
                .html(label.language[language])
                .appendTo($("<div></div>").appendTo(form));
            var select_language=$("<select></select>")
                .on("change",function(){
                    version_option
                        .detach()
                        .filter("[value^='"+select_language.val()+"']")
                            .appendTo(select_version);
                    select_version.prop("selectedIndex",-1);
                    submit
                        .removeAttr("href")
                        .addClass("disabled");
                })
                .appendTo($("<div></div>").appendTo(form));
            $("<label></label>")
                .html(label.version[language])
                .appendTo($("<div></div>").appendTo(form));
            var select_version=$("<select></select>")
                .on("change",function(){
                    submit.removeClass("disabled");
                    submit.attr("href","/d/?"+select_version.val());
                })
                .appendTo($("<div></div>").appendTo(form));
            var submit=$("<a></a>")
                .attr("target","_blank")
                .addClass("submit")
                .html(label.submit[language])
                .addClass("disabled")
                .appendTo($("<div></div>").appendTo(form));
            //Fuck IE 8
            $("<div></div>")
                .addClass("fix")
                .appendTo(item);
            var download=$("<a></a>")
                .attr("target","_blank")
                .addClass("download")
                .html(label.download[language])
                .appendTo(item);
            if(data[name][platform] && (data[name][platform][language] || data[name][platform]["en"])){
                var url=name+"/"+platform+"/";
                var text=label[platform]+"/";
                if(data[name][platform][language]){
                    url+=language+"/"+data[name][platform][language][0];
                    text+=label[language]+"/"+data[name][platform][language][0];
                }else{
                    url+="en/"+data[name][platform]["en"][0];
                    text+=label["en"]+"/"+data[name][platform]["en"][0];
                }
                download
                    .attr("href","/d/?"+url)
                    .attr("title",text)
            }else{
                download.addClass("disabled");
            }
            var other=$("<a></a>")
                .attr("href","#")
                .addClass("other")
                .html(label.other[language])
                .on("click",function(e){
                    download.hide();
                    other.hide();
                    description.hide();
                    form.show();
                    collapse.show();
                    e.preventDefault();
                })
                .appendTo(item);
            var collapse=$("<a></a>")
                .attr("href","#")
                .addClass("collapse")
                .html(label.collapse[language])
                .on("click",function(e){
                    download.show();
                    other.show();
                    description.show();
                    form.hide();
                    collapse.hide();
                    e.preventDefault();
                })
                .hide()
                .appendTo(item);
            $.each(data[name],function(platform,obj){
                $("<option></option>")
                    .attr("value",name+"/"+platform)
                    .html(label[platform])
                    .appendTo(select_platform);
                $.each(obj,function(language,obj){
                    $("<option></option>")
                        .attr("value",name+"/"+platform+"/"+language)
                        .html(label[language])
                        .appendTo(select_language);
                    $.each(obj,function(index,version){
                        $("<option></option>")
                            .attr("value",name+"/"+platform+"/"+language+"/"+version)
                            .html(version)
                            .appendTo(select_version);
                    });
                });
            });
            var platform_option=select_platform.find("option");
            var language_option=select_language.find("option");
            var version_option=select_version.find("option");
            language_option.detach();
            version_option.detach();
            select_platform.prop("selectedIndex",-1);
            select_language.prop("selectedIndex",-1);
            select_version.prop("selectedIndex",-1);
        }
    });
    //Fuck IE 7
    $("<div></div>")
        .addClass("fix")
        .appendTo($("body"));
});