const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
let currentSlideIndex = 0;

for (let i = 0; i < slides.length; i++) {
	const dotElement = document.createElement("div");
	dotElement.classList.add("dot");
	dots.appendChild(dotElement);

	if (i === 0) {
		dotElement.classList.add("dot_selected");
	}
}

arrowRight.addEventListener("click", () => {
	currentSlideIndex++;
	if (currentSlideIndex >= slides.length) {
		currentSlideIndex = 0;
	}
	const slideImage = document.querySelector(".banner-img");
	const slideText = document.querySelector("#banner p");
	slideImage.src = "./assets/images/slideshow/" + slides[currentSlideIndex].image;
	slideText.innerHTML = slides[currentSlideIndex].tagLine;
	const currentDot = document.querySelector(".dot_selected");
	currentDot.classList.remove("dot_selected");
	const newDot = document.querySelectorAll(".dot")[currentSlideIndex];
	newDot.classList.add("dot_selected");
});

arrowLeft.addEventListener("click", () => {
	currentSlideIndex--;
	if (currentSlideIndex < 0) {
		currentSlideIndex = slides.length - 1;
	}
	const slideImage = document.querySelector(".banner-img");
	const slideText = document.querySelector("#banner p");
	slideImage.src = "./assets/images/slideshow/" + slides[currentSlideIndex].image;
	slideText.innerHTML = slides[currentSlideIndex].tagLine;
	const currentDot = document.querySelector(".dot_selected");
	currentDot.classList.remove("dot_selected");
	const newDot = document.querySelectorAll(".dot")[currentSlideIndex];
	newDot.classList.add("dot_selected");
});
