
window.addEventListener("load", function() {
  //get The heading div
  var headingReplacement = document.getElementById("heading");
  //Create the Elements
  var image = document.createElement("img");
  var header = document.createElement("h1");
  var div = document.createElement("div class='topnav'");
  var home = document.createElement("a href='https://drcowiber.github.io'");
//  var image = document.createElement("img");
//  var image = document.createElement("img");
/*  headingReplacement.innerHTML += "
      <img src='images/ukraine.png' alt='haha image dont work bozo'/>
      <h1> Ukraine Hub </h1>
      <div class='topnav'>
        <a href='https://drcowiber.github.io'>Home</a>
        <a href='https://drcowiber.github.io/crimea.html'>Crimea</a>
        <a href='https://drcowiber.github.io/chernobyl.html'>Chernobyl</a>
        <a href='https://drcowiber.github.io/moldova.html'>Moldova</a>
      </div>";*/
      document.getElementById(headingReplacement).appendChild(image);




});
