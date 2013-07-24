$(function(){
    var label={
        "win":"Windows",
        "mac":"Mac(OS X)",
        "linux":"Linux",
        "os-all":"All OS",
        "zh":"中文",
        "en":"English",
        "jp":"日本語",
        "title":{
            "zh":"游戏下载",
            "en":"Download Game",
            "jp":"Download Game"
        },
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
        },
        "view":{
            "zh":"查看所有下载...",
            "en":"Show all downloads...",
            "jp":"Show all downloads..."
        },
        "back":{
            "zh":"返回",
            "en":"Back",
            "jp":"Back"
        },
        "mirror":{
            "zh":"镜像站点",
            "en":"Mirror site",
            "jp":"Mirror site"
        },
        "mirror/baidu":{
            "zh":"百度网盘",
            "en":"Baidu",
            "jp":"Baidu"
        },
        "mirror/1000eb":{
            "zh":"千易网盘",
            "en":"1000Eb",
            "jp":"1000Eb"
        },
        "site":{
            "zh":"转到镜像站点",
            "en":"Go to mirror site",
            "jp":"Go to mirror site"
        },
        "select":{
            "zh":"请选择其他镜像站点！",
            "en":"Please select another mirror site!",
            "jp":"Please select another mirror site!"
        }
    };
    var mirror=[
        "baidu",
        "1000eb"
    ];
    var site={
        "baidu":"http://pan.baidu.com/share/link?shareid=353667&uk=2618701916",
        "1000eb":"http://tetris.1000eb.com/"
    };
    var urls={
        "baidu":{
            "cultris/win/en/1":"http://pan.baidu.com/share/link?shareid=1616487568&uk=2618701916",
            "cultris/win/en/2":"http://pan.baidu.com/share/link?shareid=1937813612&uk=2618701916",
            "cultris/mac/en/2":"http://pan.baidu.com/share/link?shareid=1940998029&uk=2618701916",
            "dtet/win/en/latest":"http://pan.baidu.com/share/link?shareid=1957600425&uk=2618701916",
            "other/dx7vb":"http://pan.baidu.com/share/link?shareid=1964841147&uk=2618701916",
            "nes/os-all/en/latest":"http://pan.baidu.com/share/link?shareid=2204261983&uk=2618701916",
            "other/virtua-nes":"http://pan.baidu.com/share/link?shareid=2212731436&uk=2618701916",
            "heboris/win/en/Original":"http://pan.baidu.com/share/link?shareid=2308646924&uk=2618701916",
            "heboris/win/en/Lite":"http://pan.baidu.com/share/link?shareid=2309953289&uk=2618701916",
            "heboris/win/en/Mini":"http://pan.baidu.com/share/link?shareid=2310919787&uk=2618701916",
            "heboris/win/en/C7EX":"http://pan.baidu.com/share/link?shareid=2312515861&uk=2618701916",
            "heboris/win/en/C8EX":"http://pan.baidu.com/share/link?shareid=2314631064&uk=2618701916",
            "heboris/win/en/C8EX Full":"http://pan.baidu.com/share/link?shareid=2316206803&uk=2618701916",
            "infinitris/win/zh/3.2.35":"http://pan.baidu.com/share/link?shareid=2330058528&uk=2618701916",
            "infinitris/win/zh/3.2.40":"http://pan.baidu.com/share/link?shareid=2334380895&uk=2618701916",
            "ltap/win/en/latest":"http://pan.baidu.com/share/link?shareid=2343584086&uk=2618701916",
            "nds-tetris-ds/os-all/en/latest":"http://pan.baidu.com/share/link?shareid=2466652770&uk=2618701916",
            "nds-tetris-party/os-all/en/latest":"http://pan.baidu.com/share/link?shareid=2473797714&uk=2618701916",
            "other/no-zoomer":"http://pan.baidu.com/share/link?shareid=2478044277&uk=2618701916",
            "nullpomino/os-all/en/7.2.0":"http://pan.baidu.com/share/link?shareid=2533395713&uk=2618701916",
            "nullpomino/os-all/en/7.3.0":"http://pan.baidu.com/share/link?shareid=2534269418&uk=2618701916",
            "nullpomino/os-all/en/7.4.0":"http://pan.baidu.com/share/link?shareid=2535285660&uk=2618701916",
            "nullpomino/os-all/en/7.5.0":"http://pan.baidu.com/share/link?shareid=2537085803&uk=2618701916",
            "nullpomino/win/zh/7.5.0":"http://pan.baidu.com/share/link?shareid=2538399214&uk=2618701916",
            "nullpomino/win/en/7.4.0":"http://pan.baidu.com/share/link?shareid=2539462063&uk=2618701916",
            "nullpomino/win/en/7.5.0":"http://pan.baidu.com/share/link?shareid=2542147995&uk=2618701916",
            "nullpomino/mac/en/7.5.0":"http://pan.baidu.com/share/link?shareid=2543054988&uk=2618701916",
            "nullpomino/linux/en/7.4.0":"http://pan.baidu.com/share/link?shareid=2543926156&uk=2618701916",
            "nullpomino/linux/en/7.5.0":"http://pan.baidu.com/share/link?shareid=2545172203&uk=2618701916",
            "other/jre":"http://java.com/zh_CN/download/",
            "nullpomino-league/os-all/en/Beta":"http://pan.baidu.com/share/link?shareid=2578142682&uk=2618701916",
            "nullpomino-league/os-all/en/Beta 0.3":"http://pan.baidu.com/share/link?shareid=2578998036&uk=2618701916",
            "nullpomino-league/os-all/en/Beta 0.4":"http://pan.baidu.com/share/link?shareid=2580072955&uk=2618701916",
            "nullpomino-league/os-all/en/Beta 0.5":"http://pan.baidu.com/share/link?shareid=2581096176&uk=2618701916",
            "t-ex/os-all/zh/latest":"http://pan.baidu.com/share/link?shareid=2601710337&uk=2618701916",
            "t-ex-console/win/zh/latest":"http://pan.baidu.com/share/link?shareid=2609585224&uk=2618701916",
            "top/win/zh/0.2":"http://pan.baidu.com/share/link?shareid=2643221861&uk=2618701916",
            "top/win/zh/0.3":"http://pan.baidu.com/share/link?shareid=2644028374&uk=2618701916",
            "top/win/zh/0.4":"http://pan.baidu.com/share/link?shareid=2645121248&uk=2618701916",
            "top/win/zh/0.5":"http://pan.baidu.com/share/link?shareid=2646069615&uk=2618701916",
            "top/win/en/latest":"http://pan.baidu.com/share/link?shareid=2647152892&uk=2618701916",
            "top/win/jp/latest":"http://pan.baidu.com/share/link?shareid=2648122215&uk=2618701916",
            "other/dotnet/3.5":"http://pan.baidu.com/share/link?shareid=2649557595&uk=2618701916",
            "tgm/win/en/latest":"http://pan.baidu.com/share/link?shareid=2675659961&uk=2618701916",
            "ta/win/en/latest":"http://pan.baidu.com/share/link?shareid=2716380023&uk=2618701916",
            "ti/win/en/BGM 1":"http://pan.baidu.com/share/link?shareid=2740646591&uk=2618701916",
            "ti/win/en/BGM 2":"http://pan.baidu.com/share/link?shareid=2741488584&uk=2618701916",
            "ti/win/en/lite":"http://pan.baidu.com/share/link?shareid=2742674561&uk=2618701916",
            "ti/win/en/full":"http://pan.baidu.com/share/link?shareid=2743507907&uk=2618701916",
            "other/bbsreader":"http://pan.baidu.com/share/link?shareid=2744488401&uk=2618701916",
            "tetris-zone/win/en/1.2.1":"http://pan.baidu.com/share/link?shareid=2768176389&uk=2618701916",
            "tetris-zone/mac/en/1.2.1":"http://pan.baidu.com/share/link?shareid=2769200514&uk=2618701916",
            "dos/win/en/latest":"http://pan.baidu.com/share/link?shareid=2782253754&uk=2618701916",
            "texmaster/win/en/2009.1":"http://pan.baidu.com/share/link?shareid=2798580894&uk=2618701916",
            "texmaster/win/en/2009.2":"http://pan.baidu.com/share/link?shareid=2799247508&uk=2618701916",
            "texmaster/win/en/2009.3":"http://pan.baidu.com/share/link?shareid=2800071254&uk=2618701916"
        },
        "1000eb":{
            "dtet/win/en/latest":"http://1000eb.com/2r7j",
            "other/dx7vb":"http://1000eb.com/2r7j",
            "nes/os-all/en/latest":"http://1000eb.com/2s7z",
            "other/virtua-nes":"http://1000eb.com/2s7y",
            "heboris/win/en/Original":"http://1000eb.com/2r7a",
            "heboris/win/en/C8EX Full":"http://1000eb.com/2r76",
            "infinitris/win/zh/3.2.35":"http://1000eb.com/2s76",
            "infinitris/win/zh/3.2.40":"http://1000eb.com/2s1h",
            "nds-tetris-ds/os-all/en/latest":"http://1000eb.com/2s7q",
            "nds-tetris-party/os-all/en/latest":"http://1000eb.com/2s7s",
            "other/no-zoomer":"http://1000eb.com/2s7p",
            "nullpomino/os-all/en/7.5.0":"http://1000eb.com/2s6u",
            "nullpomino/win/zh/7.5.0":"http://1000eb.com/9seg",
            "other/jre":"http://1000eb.com/2s6y",
            "t-ex/os-all/zh/latest":"http://tetris.1000eb.com/mydirectory_12909_4257.htm",
            "top/win/zh/0.5":"http://1000eb.com/9ayq",
            "top/win/en/latest":"http://1000eb.com/au2i",
            "other/dotnet/3.5":"http://1000eb.com/3trn",
            "tgm/win/en/latest":"http://1000eb.com/2r6o",
            "ta/win/en/latest":"http://1000eb.com/2r6t",
            "ti/win/en/BGM 1":"http://1000eb.com/2s4v",
            "ti/win/en/BGM 2":"http://1000eb.com/2s5k",
            "ti/win/en/lite":"http://1000eb.com/2r6x",
            "ti/win/en/full":"http://1000eb.com/gntn",
            "other/bbsreader":"http://1000eb.com/2r71",
            "dos/win/en/latest":"http://1000eb.com/2s34",
            "texmaster/win/en/2009.3":"http://1000eb.com/2s32"
        }
    };
    var data={
        "cultris":{
            "win":{
                "en":["1","2"]
            },
            "mac":{
                "en":["2"]
            }
        },
        "dtet":{
            "win":{
                "en":["latest"]
            }
        },
        "nes":{
            "os-all":{
                "en":["latest"]
            }
        },
        "heboris":{
            "win":{
                "en":["Original","Lite","Mini","C7EX","C8EX","C8EX Full"]
            }
        },
        "infinitris":{
            "win":{
                "zh":["3.2.35","3.2.40"]
            }
        },
        "ltap":{
            "win":{
                "en":["latest"]
            }
        },
        "nds-tetris-ds":{
            "os-all":{
                "en":["latest"]
            }
        },
        "nds-tetris-party":{
            "os-all":{
                "en":["latest"]
            }
        },
        "nullpomino":{
            "os-all":{
                "en":["7.2.0","7.3.0","7.4.0","7.5.0"]
            },
            "win":{
                "zh":["7.5.0"],
                "en":["7.4.0","7.5.0"]
            },
            "mac":{
                "en":["7.5.0"]
            },
            "linux":{
                "en":["7.4.0","7.5.0"]
            }
        },
        "nullpomino-league":{
            "os-all":{
                "en":["Beta","Beta 0.3","Beta 0.4","Beta 0.5"]
            }
        },
        "t-ex":{
            "os-all":{
                "zh":["latest"]
            }
        },
        "t-ex-console":{
            "win":{
                "zh":["latest"]
            }
        },
        "top":{
            "win":{
                "zh":["0.2","0.3","0.4","0.5"],
                "en":["latest"],
                "jp":["latest"]
            }
        },
        "tgm":{
            "win":{
                "en":["latest"]
            }
        },
        "ta":{
            "win":{
                "en":["latest"]
            }
        },
        "ti":{
            "win":{
                "en":["BGM 1","BGM 2","lite","full"]
            }
        },
        "tetris-zone":{
            "win":{
                "en":["1.2.1"]
            },
            "mac":{
                "en":["1.2.1"]
            }
        },
        "dos":{
            "win":{
                "en":["latest"]
            }
        },
        "texmaster":{
            "win":{
                "en":["2009.1","2009.2","2009.3"]
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
    document.title=label.title[language];
    var head=$("<div></div>")
        .addClass("head")
        .prependTo($("body"));
    var title=$("<div></div>")
        .addClass("title")
        .html(label.title[language])
        .appendTo(head);
    var mirror_list=$("<div></div>")
        .addClass("mirror")
        .html(label.mirror[language])
        .appendTo(head);
    var select_mirror=$("<select></select>")
        .appendTo(mirror_list);
    var home_page=$("<a></a>")
        .attr("href","#")
        .html(label.site[language])
        .on("click",function(e){
            var url=site[select_mirror.val()];
            if(url){
                window.open(url,"_blank");
            }
            e.preventDefault();
        })
        .appendTo(mirror_list);
    $.each(mirror,function(index,name){
        $("<option></option>")
            .attr("value",name)
            .html(label["mirror/"+name][language])
            .appendTo(select_mirror);
    });
    select_mirror.prop("selectedIndex",0);
    $(".item").each(function(){
        var item=$(this);
        var name=item.data("name");
        item.attr("id","game-"+name);
        var to=$("<a></a>")
            .attr("href","#"+name)
            .html("#")
            .data("to",name)
            .prependTo(item.find(".name"));
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
                        .data("url","")
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
                        .data("url","")
                        .addClass("disabled");
                })
                .appendTo($("<div></div>").appendTo(form));
            $("<label></label>")
                .html(label.version[language])
                .appendTo($("<div></div>").appendTo(form));
            var select_version=$("<select></select>")
                .on("change",function(){
                    submit
                        .removeClass("disabled")
                        .attr("href","#"+select_version.val())
                        .data("url",select_version.val());
                })
                .appendTo($("<div></div>").appendTo(form));
            var group=$("<div></div>").appendTo(form);
            var submit=$("<a></a>")
                .addClass("submit")
                .html(label.submit[language])
                .addClass("disabled")
                .appendTo(group);
            var view=$("<a></a>")
                .attr("href","#")
                .addClass("view")
                .html(label.view[language])
                .on("click",function(e){
                    form.hide();
                    list.show();
                    e.preventDefault();
                })
                .appendTo(group);
            var list=$("<div></div>")
                .addClass("list")
                .hide()
                .appendTo(item);
            var list_ul=$("<ul></ul>").appendTo(list);
            var back=$("<a></a>")
                .attr("href","#")
                .addClass("back")
                .html(label.back[language])
                .on("click",function(e){
                    form.show();
                    list.hide();
                    e.preventDefault();
                })
                .appendTo($("<div></div>").appendTo(list));
            //Fuck IE 8
            $("<div></div>")
                .addClass("fix")
                .appendTo(item);
            var download=$("<a></a>")
                .addClass("download")
                .html(label.download[language])
                .appendTo(item);
            var temp;
            if((temp=(data[name][platform] || data[name]["os-all"])) && (temp[language] || temp["en"])){
                var url=name+"/";
                var text="";
                if(data[name][platform]){
                    url+=platform+"/";
                    text+=label[platform]+" / ";
                }else{
                    url+="os-all/";
                    text+=label["os-all"]+" / ";
                }
                if(temp[language]){
                    url+=language+"/"+temp[language][temp[language].length-1];
                    text+=label[language]+" / "+temp[language][temp[language].length-1];
                }else{
                    url+="en/"+temp["en"][temp["en"].length-1];
                    text+=label["en"]+" / "+temp["en"][temp["en"].length-1];
                }
                download
                    .attr("href","#"+url)
                    .attr("title",text)
                    .data("url",url);
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
                    list.hide();
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
                        $("<a></a>")
                            .attr("href","#"+name+"/"+platform+"/"+language+"/"+version)
                            .data("url",name+"/"+platform+"/"+language+"/"+version)
                            .html(label[platform]+" / "+label[language]+" / "+version)
                            .appendTo($("<li></li>").appendTo(list_ul));
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
    $("body").on("click","a",function(e){
        var a=$(this);
        var url=a.data("url");
        if(url){
            var site=select_mirror.val();
            if(urls[site] && urls[site][url]){
                window.open(urls[site][url],"_blank");
            }else{
                alert(label.select[language]);
            }
            e.preventDefault();
        }
        var to=a.data("to");
        if(to){
            window.scrollTo(window.scrollX,$("#game-"+to).offset().top-71);
        }
    });
    var hash=location.hash.replace(/^#/,"");
    if(hash){
        window.scrollTo(window.scrollX,$("#game-"+hash).offset().top-71);
    }
});