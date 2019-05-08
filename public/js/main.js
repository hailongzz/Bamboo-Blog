
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
  function canvas() {
    // 获取mycanvas画布

    const can = document.getElementById('homeTopCanvas');
    const ctx = can.getContext('2d');
    // 画布宽度
    const wid = window.innerWidth;
    // 画布高度
    const hei = window.innerHeight;
    can.width = wid;
    can.height = hei;
    // 雪花数目
    const snow = 60;
    // 雪花坐标、半径
    const arr = []; // 保存各圆坐标及半径
    for (let i = 0; i < snow; i++) {
      arr.push({
        x: Math.random() * wid,
        y: Math.random() * hei,
        r: Math.random() * 6
      });
    }
    function SnowFall() {
      for (let i = 0; i < snow; i++) {
        const p = arr[i];
        p.y += Math.random() * 2 + 1;
        if (p.y > hei) {
          p.y = 0;
        }
        p.x += Math.random() * 2 + 1;
        if (p.x > wid) {
          p.x = 0;
        }
      }
    }
    // 画雪花
    function DrawSnow() {
      ctx.clearRect(0, 0, wid, hei);
      ctx.beginPath();
      for (let i = 0; i < snow; i++) {
        const p = arr[i];
        ctx.fillStyle = '#c3f6ee';
        ctx.globalAlpha = 0.25;
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false);
      }
      ctx.fill();
      SnowFall();
      ctx.closePath();
    }
    // 雪花飘落
    setInterval(DrawSnow, 60);
  }
});
