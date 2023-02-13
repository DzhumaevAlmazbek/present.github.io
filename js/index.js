const images = document.querySelectorAll('.image');
const popUpState = document.querySelector('.pop-up');
const body = document.querySelector('body');

images.forEach((image) => image.addEventListener("click", (e) => {
	popUpState.style.opacity = 1;
	popUpState.style.pointerEvents = 'all';
	popUpState.children[0].innerHTML = `
		<img src="${image.src}"></img>
	`;
}))

body.addEventListener("click", (e) => {
	if(popUpState.style.opacity == 1) {
		console.log(e.target.classList[0]);
		if(e.target.classList[0] !== "image") {
			popUpState.style.opacity = 0;
			popUpState.style.pointerEvents = 'none';
		}
	}
})

body.addEventListener("keydown", (e) => {
	if(e.key == 'Escape') {
		popUpState.style.opacity = 0;
		popUpState.style.pointerEvents = 'none';
	}
}) 


