//Center the title and the section in the HEADER - support resize

	function headerform(){
		var header = document.querySelector("header"),
			headerheight = window.innerHeight + 1,
			headersection = document.querySelector("header section");

		header.style.height = headerheight + "px";

		headersection.style.marginTop = ((headerheight-200)/4) + "px";
	}
	headerform();

	window.onresize = function(){
		headerform();
	}

//Hide the arrow on scroll
	function toggleHide(id){
		var e = document.getElementById(id);
		e.style.display = 'none';
	}

	window.onscroll = function(){
		toggleHide('down');
	}
