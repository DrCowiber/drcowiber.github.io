
window.addEventListener("load", function() {
      var content = document.getElementById("pageContent");
      var footer = document.getElementById("footerHere");

      footer.innerHTML =
      '<div id="footing">'+
        '<blockquote cite="https://www.brainyquote.com/quotes/oleksandr_usyk_975671?src=t_ukrainian" />'+
        '<p class="quote"> <br> <strong>I am Ukrainian and fighting like a Ukrainian.</strong></p>'+
        '<p class="quote"><em><a href="https://www.brainyquote.com/quotes/oleksandr_usyk_975671?src=t_ukrainian" target="_blank">'+
          '-Oleksandr Usyk </a></em></p>'+
        '<p class="ending"> &copy Benjamin Fedorak, Powered by Ukraine in GitHub </p>'+
      '</div>';
      console.log("footer loaded");


//anything below this doesnt work, will fix later
      var offset = content.offset()
      console.log("offset: " - offset);
      footer.css("bottom", offset)


      var body = document.getElementById("pageContent");

      var bht = body.height();
      var wht = window.height();

if (bht < wht) {
    footer.css("position", "absolute");
    footer.css("bottom", "10px");

}

      console.log("footer positioned");


});

//https://stackoverflow.com/questions/17395392/how-to-make-real-dynamic-footer
//https://pixelsvsbytes.com/2011/09/sticky-css-footers-the-flexible-way/
