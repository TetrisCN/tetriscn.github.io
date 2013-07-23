$(function(){
    var label={
        "win":"Windows",
        "mac":"Mac(OS X)",
        "linux":"Linux",
        "zh":"中文",
        "en":"English",
        "jp":"日本語"
    };
    var data={
        "top":{
            "win":{
                "zh":["0.5","0.4","0.3"],
                "en":["-"],
                "jp":["-"]
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
    var temp=navigator.userLanguage || navigator.language;
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
            if(data[name][platform] && (data[name][platform][language] || data[name][platform]["en"])){
                var url=name+"/"+platform+"/";
                if(data[name][platform][language]){
                    url+=language+"/"+data[name][platform][language][0];
                }else{
                    url+="en/"+data[name][platform]["en"][0];
                }
                $("<a></a>").attr("href",url).addClass("download").appendTo(item);
            }
        }
    });
});