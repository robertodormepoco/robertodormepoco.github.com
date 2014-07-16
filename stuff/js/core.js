
(function() {

  window.requestAnimFrame = (function(callback){

  'use strict';

  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.oRequestAnimationFrame      ||
          window.msRequestAnimationFrame     ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };
  })();

  var rgb2hex = function(red, green, blue) {
          var rgb = blue | (green << 8) | (red << 16);
          return '#' + (0x1000000 + rgb).toString(16).slice(1)
  }

  var paper = document.getElementById('paper');

  var draw = function(timestamp) {

    requestAnimationFrame(draw);

    var squareWidth = 8;
    var squareHeight = 8;

    var bodyWidth = document.body.clientWidth;
    var bodyHeight = document.body.clientHeight;

    var boxShadow = '';

    paper.style.width = '8px';
    paper.style.height = '8px';

    if(Math.random() < 0.01) {
      for(var col = 1; col < Math.ceil(bodyWidth / squareWidth - 3); col++) {
        for(var row = 1; row < Math.ceil(bodyHeight / squareHeight - 3); row++) {

          boxShadow += col * squareWidth + 'px ' + row * squareHeight + 'px rgba(' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ',' + Math.ceil(Math.random() * 255) + ',' + Math.random() + '), ';

        }
      }

    boxShadow = boxShadow.slice(0, boxShadow.length - 2);

    paper.style.boxShadow = boxShadow;

    }
  };

  window.addEventListener('resize', draw);

  draw();
})();
