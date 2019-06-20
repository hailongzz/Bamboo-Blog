/* eslint-disable */
/* eslint-env jquery, browser */
$(document).ready(() => {
  // Place JavaScript code here...
  const app = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    theme: '#b7daff',
    audio: [{
      name: 'name',
      artist: 'artist',
      url: '/music/yourname.mp3',
      cover: '/img/yourname.jpeg'
    }]
  });
  //设置离开提示
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        normal_title = document.title;
        document.title = ' (*๓´╰╯`๓)♡去哪了';
    } else document.title = normal_title;
  });
});
