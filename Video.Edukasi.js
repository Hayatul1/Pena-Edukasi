<script>
//<![CDATA[
// Video Melayang
var $window=$(window),$floatvideoWrap=$(".floatvideo-wrapper"),$floatvideo=$(".floatvideo"),floatvideoHeight=$floatvideo.outerHeight();$window.on("scroll",function(){$window.scrollTop()>floatvideoHeight+$floatvideoWrap.offset().top?($floatvideoWrap.height(floatvideoHeight),$floatvideo.addClass("fly")):($floatvideoWrap.height("auto"),$floatvideo.removeClass("fly"))}),setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
//]]>
</script>
