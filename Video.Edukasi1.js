<div class="iframe-container">
  <div id="player"></div>
</div>
<script>
var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      width: '100%',
      videoId: 'scSxpIkKTmk?si=zIuj7q_WaAHzQ81M',
      playerVars: { 'autoplay': 1, 'playsinline': 1 },
      events: {
        'onReady': onPlayerReady
      }
    });
  }
 function onPlayerReady(event) {
     event.target.mute();
    event.target.playVideo();
  }
</script>
<style>
/* Make the youtube video responsive */
  .iframe-container{
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
  }
  .iframe-container iframe{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
