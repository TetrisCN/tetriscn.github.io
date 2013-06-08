# 意见反馈

<iframe src="comment.html" frameborder="0" width="100%" height="400"></iframe>
<script type="text/javascript">
    (function(){
        var iframe=$("#main-inner iframe");
        iframe.on("load",function(){
            $(iframe.prop("contentWindow")).on("load",function(){
                iframe.height($(iframe.prop("contentDocument").body).height());
            });
        });
    })();
</script>