
window.addEventListener("load", function() {
		const content = document.getElementById("pageContent");
		const footer = document.getElementById("footerHere");
		const footerDisplacer = document.getElementById("footerDisplacer");


				footer.innerHTML =
			'<div id="footing">'+
			'<blockquote cite="https://www.brainyquote.com/quotes/oleksandr_usyk_975671?src=t_ukrainian" />'+
			'<p class="quote"> <br> <strong>I am Ukrainian and fighting like a Ukrainian.</strong></p>'+
			'<p class="quote"><em><a href="https://www.brainyquote.com/quotes/oleksandr_usyk_975671?src=t_ukrainian" target="_blank">'+
			'-Oleksandr Usyk </a></em></p>'+
			'<p class="ending"> &copy Benjamin Fedorak, Powered by Ukraine in GitHub </p>'+
			'</div>';
			console.log("footer loaded");

		//choosing what to display based on page height and window height

	setInterval(function(){
		if($("body").height() < $(window).height()){
				footer.style.position = "absolute";
				footer.style.bottom = "0";
		} else {
				footer.style.position = "static";
				footer.style.bottom = null;
		}
	}, 1);

	// later I will attempt to find a way to account for padding from bottom most element to footer, although I am unsure if this will really be needed

});
