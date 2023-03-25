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
	let textElement = document.getElementById("textCaroussel");
	let buttonsContainer = document.querySelectorAll(".dots");
	

	//Affiche les quatres boutons
	let numberSlide = slides.length;
	//Appel des fonctions
	initImages(imagesElement, textElement, slides);
	initDots(numberSlide, buttonsContainer[0]);
	

	//Direction vers la droite du caroussel
	let arrowRight = document.querySelector('#arrowRight');
		arrowRight.addEventListener("click", function () {
			console.log("click right")
			changeSlideByIndex(1);
		});

	//Direction vers la gauche du caroussel
	let arrowLeft = document.querySelector('#arrowLeft');
		arrowLeft.addEventListener("click", function () {
			console.log("click left")
			changeSlideByIndex(-1);
		});

	// Fonction des directions du caroussel
	function changeSlideByIndex(direction) {
		let dots = document.getElementsByClassName('dot');
		dots[indexSlide].classList.remove('dot_selected'); 
		
		//récupère l'indexSlide
		indexSlide = indexSlide + direction;
		let slideLength = slides.length;

		if (indexSlide < 0) {
			indexSlide = slideLength - 1;
		}
		if (indexSlide > slideLength - 1) {
			indexSlide = 0;
		}

		//Affichage des images du caroussel
		imagesElement.src = pathImage + slides[indexSlide].image; 
		//Affichage texte du caroussel
		textElement.innerHTML = slides[indexSlide].tagLine; 	
		//Affichage de dot_selected
		dots[indexSlide].classList.add('dot_selected');
	}


	//Fonction pour afficher le premier tagLine et images 
	function initImages(imagesContainer,tagContainer,slides){
		imagesContainer.src = pathImage + slides[0].image; 
		//Affichage texte du caroussel
		tagContainer.innerHTML = slides[0].tagLine; 
	}
}

	//Fonction pour afficher les boutons dot
	function initDots(numberSlide,buttonsContainer) {	
		for (let indexSlide = 0; indexSlide < numberSlide; indexSlide++) {
			let buttonDot = document.createElement('span');

			//Affiche dot_selected au chargement
			if (indexSlide === 0) {
				buttonDot.classList.add('dot_selected');
			}
			
			//ajout des Boutons 
			buttonDot.classList.add('dot');
			buttonsContainer.appendChild(buttonDot);	
		}
	}
		