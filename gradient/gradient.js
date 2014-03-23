/*
function degrade(id,couleurfinale,temps) {

	var	element 		= document.getElementById(id),
		ecolor 			= element.style.background,
		ecolorArray		= ecolor.split("("),
		ergb			= ecolorArray[2].split(","),
		rgb				= [0,0,0],
		increments 		= [0,0,0],
		tempsecoule		= 0,
		refreshtime		= 50; //milliseconds

	for (var i = 0; i <= 3; i++) {				// Permet de crée un tabelau "rgb" qui contient les codes couleurs
		var color = /[0-9]+/.exec(ergb[i]);
		rgb[i] = parseInt(color);
	}; 



	// alert(rgb[0]+", "+rgb[1]+", "+rgb[2]); 		//alerte test de couleur

	increments[0] = (couleurfinale[0]-rgb[0])/temps;
	increments[1] = (couleurfinale[1]-rgb[1])/temps;
	increments[2] = (couleurfinale[2]-rgb[2])/temps; 	//increment nessaire pour arriver à la couleur final (pour chaque milliseconde)

	// alert(increments[0] + " " + increments[1] + " " + increments[2]);



	function increment() {

		for (var i = 0; i <= 2; i++) {

			rgb[i] = rgb[i] + (Math.floor(increments[i]*refreshtime));

		};

		document.getElementById(id).style.background = "-webkit-radial-gradient( top left, circle, rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] +", 1), transparent)";

		
		if(tempsecoule < temps){

			setTimeout(increment, refreshtime);
			tempsecoule = tempsecoule + refreshtime;

		}

	};
	

};

var couleurfinale = [255,255,255];

degrade("rond",couleurfinale,5000);
*/


function anim(img) {
	var myImg = document.getElementById(img);
    var s = myImg.style,
        color = parseInt(s.background.split("(")[1].split(",")[0])+10,
       	result = s.background = "-webkit-radial-gradient( top left, circle, rgba("+color+", 207, 200, 1), transparent)";

  		console.log(color);
     if ( color < 100) {
        setTimeout(anim, 500); // La fonction anim() fait appel à elle-même si elle n'a pas terminé son travail
    } 

}

anim('rond');