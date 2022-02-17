
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


/*    while(1>0){
          var height = screen.height;
          setTimeout(500);



    }*/
});

//https://stackoverflow.com/questions/17395392/how-to-make-real-dynamic-footer
//https://pixelsvsbytes.com/2011/09/sticky-css-footers-the-flexible-way/
