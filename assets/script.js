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
		let buttonToBeSelect = document.getElementsByClassName('dot');
		let slideLength = slides.length;

		
		for (let indexDot = 0; indexDot < buttonToBeSelect.length; indexDot++) {
			//efface les dot_selected dans chaque élément
			buttonToBeSelect[indexDot].classList.remove('dot_selected'); 	
		}

		if (indexSlide < 0) {
			indexSlide = slideLength - 1;
		}
		if (indexSlide > slideLength - 1) {
			indexSlide = 0;
		}

		//Affichage de dot_selected
		buttonToBeSelect[indexSlide].classList.add('dot_selected');
		//Affichage des images du caroussel
		imagesElement.src = pathImage + slides[indexSlide].image; 
		//Affichage texte du caroussel
		textElement.innerHTML = slides[indexSlide].tagLine; 	
	}


	//Fonction pour afficher le premier tagLine 
	function initImages(imagesContainer,tagContainer,slides){
		imagesContainer.src = pathImage + slides[0].image; 
		//Affichage texte du caroussel
		tagContainer.innerHTML = slides[0].tagLine; 

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
}
		