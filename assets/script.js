window.onload = function () {
	const slides = [
		{
			"image":"slide1.jpg",
			"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image":"slide2.jpg",
			"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image":"slide3.jpg",
			"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image":"slide4.png",
			"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
		}
	]

	//Déclaration des variables
	let pathImage = "./assets/images/slideshow/";
	let indexSlide = 0; //nombre des élements contenu dans le tableau slides
	let imagesElement = document.getElementById("images");


	//Direction vers la droite du caroussel
	let arrowRight = document.querySelector('#arrowRight');
		
	if (arrowRight) {
		arrowRight.addEventListener("click", function () {
			console.log("click right")
			ChangeSlideByIndex(1);
		});
	}

	//Direction vers la gauche du caroussel
	let arrowLeft = document.querySelector('#arrowLeft');

	if (arrowLeft) {
		arrowLeft.addEventListener("click", function () {
			console.log("click left")
			ChangeSlideByIndex(-1);
		});
	}

	// Fonction des directions du caroussel
	function ChangeSlideByIndex(direction) {
		indexSlide = indexSlide + direction;
		
		let slideLength = slides.length;

		if (indexSlide < 0) {
			indexSlide = slideLength - 1;
		}
		if (indexSlide > slideLength - 1) {
			indexSlide = 0;
		}

		imagesElement.src = pathImage + slides[indexSlide].image; //Affichage des images du caroussel
		
	}
}