//Center the title and the section in the HEADER - support resize

	function headerform(){
		var header = document.querySelector("header"),
			headerheight = window.innerHeight + 100,
			headersection = document.querySelector("header section");

		header.style.height = headerheight + "px";

		headersection.style.marginTop = ((headerheight-200)/4) + "px";
	}

	headerform();

	window.onresize=function(){
		headerform();
	};

//Show the requires on mouse overflow in the header

	function requireshow(){

		var requiresbutton = document.querySelectorAll(".require")[0],
			requireshidden = document.getElementById("requireinfo");


		requiresbutton.addEventListener("mouseover", function(){
			requireshidden.style.display="block";
		},false)

		requiresbutton.addEventListener("mouseout", function(){
			requireshidden.style.display="none";
		},false)

	}

	requireshow();