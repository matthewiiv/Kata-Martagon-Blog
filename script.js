

function elementInViewport(el) {
  var top = el.offsetTop;
  // var left = el.offsetLeft;
  // var width = el.offsetWidth;
  // var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
  //  left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset
  );
}

var last_known_scroll_position = 0;
var ticking = false;


function doSomething(scroll_pos) {
  // do something with the scroll position
  var pic = document.getElementById("img");

    if (elementInViewport(document.getElementById("first")) === true) {
      pic.opacity = "http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg"
    }
    else if (elementInViewport(document.getElementById("second")) === true) {
      pic.src = "https://i.vimeocdn.com/portrait/58832_300x300.jpg"
    }
    else if (elementInViewport(document.getElementById("third")) === true) {
      pic.src = "https://upload.wikimedia.org/wikipedia/commons/8/8e/Eyjafjallaj%C3%B6kull.jpeg"
    }

};

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.pageYOffset;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});
