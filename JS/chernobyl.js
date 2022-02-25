window.addEventListener("load", function() {
    var reactor = document.getElementById("reactorInsert");
    var imageWidth = 100;
    //while(0 < 1){
      reactor.innerHTML =
      '<img src="images/chernobyl/working1.gif" id="animation" alt="reactorAnimation"  width="' + imageWidth + '%" height="auto"/>' +
      '<img src="images/chernobyl/button1.png" id="button" alt="reactorButton" onclick="function()" width="' + imageWidth + '%" height="auto"/>';
  //  }
    var animation = document.getElementById("animation");
    var button = document.getElementById("button");
    $(button).click(function () {
      animation.src = "images/chernobyl/exploding1.gif"
      button.src = "images/chernobyl/button2.gif";
      console.log(getRandomInt(10));
    });

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }


  });
