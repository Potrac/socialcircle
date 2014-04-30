// get scroll information (cross-browser compatibility)
function getScroll(){
    // t for top, l for left, w for width, h for height
    var t, l, w, h;
    if (document.documentElement && document.documentElement.scrollTop) {
        // IE6 standards compliant
        t = document.documentElement.scrollTop;
        l = document.documentElement.scrollLeft;
        w = document.documentElement.scrollWidth;
        h = document.documentElement.scrollHeight;
    } else if (document.body) {
        // DOM compliant
        t = document.body.scrollTop;
        l = document.body.scrollLeft;
        w = document.body.scrollWidth;
        h = document.body.scrollHeight;
    }
    return {t: t, l: l, w: w, h: h};
}


//center the title and the section in the HEADER - support resize

	function headerform(idheader,idsection){
		var header 			= document.querySelector(idheader),
			headerheight 	= window.innerHeight,
			headersection 	= document.querySelector(idsection);

		header.style.height = headerheight + "px";

		headersection.style.marginTop = ((headerheight-200)/4) + "px";
	}

	headerform("header","header section");


//Force any section to have the same height than window (fullscreen)

	function fullscreen(id){
		var header 		 = document.querySelector(id),
			headerheight = window.innerHeight;

		header.style.height = headerheight + "px";
	}

	fullscreen(".main");
	fullscreen(".instructions");


//Center element position relatif to his parent

	function center(id){
		var element 	 	= document.querySelector(id),
			elementheight 	= element.offsetHeight,
			elementwidth 	= element.offsetWidth,
			parentheight 	= element.parentNode.offsetHeight,
			parentwidth	 	= element.parentNode.offsetWidth,
			verticalmar		= (parentheight - elementheight)/2,
			horizontalmar	= (parentwidth 	- elementwidth)	/2;


			alert(verticalmar + " - " + horizontalmar + " type: " + id.nodeName);

		element.style.paddingBottom = element.style.paddingTop	= verticalmar;
		element.style.paddingRight 	= element.style.paddingLeft = horizontalmar;		
	}


//Hide the arrow on scroll
	function toggleHide(id){
		var e = document.getElementById(id);
		e.style.opacity = 0;
	}

	function toggleShow(id){
		var e = document.getElementById(id);
		e.style.opacity = 1;
	}

	function togglegestion(id){
		var scrollinfo = getScroll();

		if(scrollinfo["t"] > (window.innerHeight)/3){
			toggleHide(id);
		}
		else if(scrollinfo["t"] <= (window.innerHeight)/3){
			toggleShow(id);
		}
	}

//put in black and white element
	function bandw(id, onoff){ //0 = from b&w to colorfull / 1 = from colorfull to b&w
		var e 			= document.querySelector(id),
			prefixes 	= ['-webkit-','-moz-','-o-','-ms-'];

		for(var i in prefixes){

			var prefixed = prefixes[i]+'filter';

			if(onoff){
				e.style[prefixed] = "grayscale(100%)";
			}
			else if(!onoff){
				e.style[prefixed] = "grayscale(0%)";
			}

		}

		if(!onoff){
			e.style.property="";
		}
	}

	function bandwonscroll(id){

		var scrollinfo = getScroll(),
			windowheight = window.innerHeight;


		if(scrollinfo["t"] > windowheight*0.3){
			bandw(id, 1)
		}
		else if(scrollinfo["t"] <= (windowheight*0.3)){
			bandw(id, 0)
		}
	}

//Fall and bounding of picture in slider

function falling (ele) {
	var marggin = 30; //---Can be changed--- Give the falling picture's top heigth wich will still displayed;

	function bounding(style){

		setTimeout(function() {

			style.WebkitTransition = 'bottom .3s ease-out';
			style.MozTransition = 'bottom .3s ease-out';

			style.bottom = -(height/1.5) + "px";

			setTimeout(function() {
				style.WebkitTransition = 'bottom .4s ease-in';
				style.MozTransition = 'bottom .4s ease-in';

				style.bottom = finalpos + "px";

				setTimeout(function() {

					style.WebkitTransition = 'bottom .2s ease-out';
					style.MozTransition = 'bottom .2s ease-out';

					style.bottom = -(height/1.25) + "px";

					setTimeout(function() {
						style.WebkitTransition = 'bottom .3s ease-in';
						style.MozTransition = 'bottom .3s ease-in';

						style.bottom = finalpos + "px";

						setTimeout(function() {

							style.WebkitTransition = 'bottom .1s ease-out';
							style.MozTransition = 'bottom .1s ease-out';

							style.bottom = -(height/1.12) + "px";

							setTimeout(function() {
								style.WebkitTransition = 'bottom .2s ease-in';
								style.MozTransition = 'bottom .2s ease-in';

								style.bottom = finalpos + "px";
							}, 100);

						}, 300);

					}, 200);

				}, 400);


			}, 300);

		}, 800);
	}

	var picture 	= 	document.querySelector(ele),
		style 		=	picture.style,
		height 		=  	picture.clientHeight,
		finalpos	=  	-(height-marggin);


	style.bottom =  finalpos + "px";

	bounding(style);

}

//Things to update on resize (don't delete the others if don't know what there are) 

	window.onresize = function(){
		fullscreen(".main");
		fullscreen(".instructions");
		headerform("header","header section");
	}


//Things to update on scroll (don't delete the others if don't know what there are)

	window.onscroll = function(){
		bandwonscroll("header");
		togglegestion("down");
	}


//Things to update on window load (don't delete the others if don't know what there are)

	window.onload = function(){
		falling(".one");
	}