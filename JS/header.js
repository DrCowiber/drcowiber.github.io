
window.addEventListener("load", function() {
      var header = document.getElementById("headerHere");

      header.innerHTML =
      '<div class="heading">'+
        '<img src="images/ukraine.png" alt="image is unable to load" width="10%" height="auto"/>'+
        '<h1> Ukraine Hub </h1>'+
        '<div class="topnav">'+
          '<a id=class="active" href="https://drcowiber.github.io">Home</a>'+
          '<a type="html" href="https://drcowiber.github.io/crimea.html">Crimea</a>'+
          '<a href="https://drcowiber.github.io/chernobyl.html">Chernobyl</a>'+
          '<a href="https://drcowiber.github.io/moldova.html">Moldova</a>'+
        '</div>'+
      '</div>';
      console.log("header loaded");
});
