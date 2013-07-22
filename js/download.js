$(function(){
    var label={
        "win":"Windows",
        "mac":"Mac(OS X)",
        "linux":"Linux",
        "zh":"中文",
        "en":"English",
        "jp":"日本語"
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
        var script=item.find("script");
        var json=$.parseJSON(script.html());
        console.log(json);
    });
});