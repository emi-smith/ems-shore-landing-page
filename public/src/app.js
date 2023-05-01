// CONTACT FORM
//Modal items
const contactModal = document.getElementById("contact-id");
const openContactBtn = document.querySelector("#contact");
const closeContactBtn = document.querySelector(".close-contact-btn");

//Click events
openContactBtn.addEventListener("click", () => {
	contactModal.style.display = "block";
});

closeContactBtn.addEventListener("click", () => {
	contactModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === contactModal) {
		contactModal.style.display = "none";
	}
});

//Validation Forms
const form = document.getElementById("contact-form-id");
const names = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

//Show error message
function showERROR(input, message) {
	const formValidation = input.parentElement;
	formValidation.className = "form-validation error";

	const errorMessage = formValidation.querySelector("p");
	errorMessage.innerText = message;
}

//Show valid message
function showValid(input) {
	const formValidation = input.parentElement;
	formValidation.className = "form-validation valid";
}

//Check required feilds
function checkRequired(inputArr) {
	inputArr.forEach(function (input) {
		if (input.value.trim() === "") {
			showERROR(input, `${getFieldName(input)} is required`);
		} else {
			showValid(input);
		}
	});
}

//Check input length
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showERROR(
			input,
			`${getFieldName(input)} must be at least ${min} characters`
		);
	} else if (input.value.length > max) {
		showERROR(
			input,
			`${getFieldName(input)} must be less than ${max} characters`
		);
	} else {
		showValid(input);
	}
}

//Get fieldname
function getFieldName(input) {
	return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

//Event Listeners
form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkRequired([names, email, subject, message]);
	checkLength(names, 3, 30);
	checkLength(subject, 5, 160);
	checkLength(message, 5, 1000);
});

// ABOUT
//Modal items
const aboutModal = document.getElementById("about-id");
const openAboutBtn = document.querySelector("#about");
const closeAboutBtn = document.querySelector(".close-about-btn");

//Click events
openAboutBtn.addEventListener("click", () => {
	aboutModal.style.display = "block";
});

closeAboutBtn.addEventListener("click", () => {
	aboutModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === aboutModal) {
		aboutModal.style.display = "none";
	}
});

// PRODUCTS
//Modal items
const productsModal = document.getElementById("products-id");
const openProductsBtn = document.querySelector("#products");
const closeProductsBtn = document.querySelector(".close-products-btn");

//Click events
openProductsBtn.addEventListener("click", () => {
	productsModal.style.display = "block";
});

closeProductsBtn.addEventListener("click", () => {
	productsModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === productsModal) {
		productsModal.style.display = "none";
	}
});

// PRODUCT SLIDER LEFT RIGHT BUTTONS
var sliderNavLeft = document.getElementById("autoWidth");
var item = sliderNavLeft.getElementsByClassName("item");

function prev() {
	sliderNavLeft.prepend(item[item.length - 1]);
}

var sliderNavRight = document.getElementById("autoWidth");
var item = sliderNavRight.getElementsByClassName("item");

function next() {
	sliderNavRight.append(item[0]);
}

// ---------------PRODUCT ONE
// //Modal items
const productOneDetailModal = document.getElementById("product-detail-id1");
const openProductOneDetailBtn = document.querySelector("#productbtn1");
const closeProductOneDetailBtn = document.querySelector(
	".close-product-one-btn"
);

// // Click events
openProductOneDetailBtn.addEventListener("click", () => {
	productOneDetailModal.style.display = "block";
});

closeProductOneDetailBtn.addEventListener("click", () => {
	productOneDetailModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === productOneDetailModal) {
		productOneDetailModal.style.display = "none";
	}
});

// ----------------PRODUCT TWO
// //Modal items
const productTwoDetailModal = document.getElementById("product-detail-id2");
const openProductTwoDetailBtn = document.querySelector("#productbtn2");
const closeProductTwoDetailBtn = document.querySelector(
	".close-product-two-btn"
);

// // Click events
openProductTwoDetailBtn.addEventListener("click", () => {
	productTwoDetailModal.style.display = "block";
});

closeProductTwoDetailBtn.addEventListener("click", () => {
	productTwoDetailModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === productTwoDetailModal) {
		productTwoDetailModal.style.display = "none";
	}
});

// ----------------PRODUCT THREE
// //Modal items
const productThreeDetailModal = document.getElementById("product-detail-id3");
const openProductThreeDetailBtn = document.querySelector("#productbtn3");
const closeProductThreeDetailBtn = document.querySelector(
	".close-product-three-btn"
);

// // Click events
openProductThreeDetailBtn.addEventListener("click", () => {
	productThreeDetailModal.style.display = "block";
});

closeProductThreeDetailBtn.addEventListener("click", () => {
	productThreeDetailModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === productThreeDetailModal) {
		productThreeDetailModal.style.display = "none";
	}
});

// ----------------PRODUCT FOUR
// //Modal items
const productFourDetailModal = document.getElementById("product-detail-id4");
const openProductFourDetailBtn = document.querySelector("#productbtn4");
const closeProductFourDetailBtn = document.querySelector(
	".close-product-four-btn"
);

// // Click events
openProductFourDetailBtn.addEventListener("click", () => {
	productFourDetailModal.style.display = "block";
});

closeProductFourDetailBtn.addEventListener("click", () => {
	productFourDetailModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === productFourDetailModal) {
		productFourDetailModal.style.display = "none";
	}
});

// ----------------PRODUCT FIVE
// //Modal items
const productFiveDetailModal = document.getElementById("product-detail-id5");
const openProductFiveDetailBtn = document.querySelector("#productbtn5");
const closeProductFiveDetailBtn = document.querySelector(
	".close-product-five-btn"
);

// // Click events
openProductFiveDetailBtn.addEventListener("click", () => {
	productFiveDetailModal.style.display = "block";
});

closeProductFiveDetailBtn.addEventListener("click", () => {
	productFiveDetailModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === productFiveDetailModal) {
		productFiveDetailModal.style.display = "none";
	}
});

// ----------------PRODUCT SIX
// //Modal items
const productSixDetailModal = document.getElementById("product-detail-id6");
const openProductSixDetailBtn = document.querySelector("#productbtn6");
const closeProductSixDetailBtn = document.querySelector(
	".close-product-six-btn"
);

// // Click events
openProductSixDetailBtn.addEventListener("click", () => {
	productSixDetailModal.style.display = "block";
});

closeProductSixDetailBtn.addEventListener("click", () => {
	productSixDetailModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === productSixDetailModal) {
		productSixDetailModal.style.display = "none";
	}
});

// MOBILE TOGGLE NAVIGATION

//MOBILE NAV TOGGLE
const navigation = document.querySelector(".nav-mobile");
const navSection = document.querySelector(".toggle-section");

document.querySelector(".toggle-mobile").onclick = function () {
	this.classList.toggle("active");
	navigation.classList.toggle("active");
	navSection.classList.toggle("active");
};

// CLOSE MOBILE NAV WHEN CLICKING ANYWHERE ON SCREEN

// ABOUT MOBILE
// Modal items
const aboutMobileModal = document.getElementById("about-id");
const openAboutMobileBtn = document.querySelector("#about-mobile");
const closeAboutMobileBtn = document.querySelector(".close-about-btn");

//Click events
openAboutMobileBtn.addEventListener("click", () => {
	aboutMobileModal.style.display = "block";
});

closeAboutMobileBtn.addEventListener("click", () => {
	aboutMobileModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === aboutMobileModal) {
		aboutMobileModal.style.display = "none";
	}
});

//PRODUCTS MOBILE
//Modal items
const productsMobileModal = document.getElementById("products-id");
const openProductsMobileBtn = document.querySelector("#products-mobile");
const closeProductsMobileBtn = document.querySelector(".close-products-btn");

//Click events
openProductsMobileBtn.addEventListener("click", () => {
	productsMobileModal.style.display = "block";
});

closeProductsMobileBtn.addEventListener("click", () => {
	productsMobileModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === productsMobileModal) {
		productsMobileModal.style.display = "none";
	}
});

//CONTACT MOBILE
//Modal items
const contactMobileModal = document.getElementById("contact-id");
const openContactMobileBtn = document.querySelector("#contact-mobile");
const closeContactMobileBtn = document.querySelector(".close-contact-btn");

//Click events
openContactMobileBtn.addEventListener("click", () => {
	contactMobileModal.style.display = "block";
});

closeContactMobileBtn.addEventListener("click", () => {
	contactMobileModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === contactMobileModal) {
		contactMobileModal.style.display = "none";
	}
});

// MOBILE NAVIGATION DRAGGABLE
let draggableNav = document.getElementById("nav-mobile-id");
let initialX = 0,
	initialY = 0;
let moveElement = false;

//Evants Object
let events = {
	mouse: {
		down: "mousedown",
		move: "mousemove",
		up: "mouseup",
	},
	touch: {
		down: "touchstart",
		move: "touchmove",
		up: "touchend",
	},
};

let deviceType = "";

//Detech touch device
const isTouchDevice = () => {
	try {
		document.createEvent("TouchEvent");
		deviceType = "touch";
		return true;
	} catch (e) {
		deviceType = "mouse";
		return false;
	}
};

isTouchDevice();

// Start (mouse down / touch start)
draggableNav.addEventListener(events[deviceType].down, (e) => {
	e.preventDefault();
	//initial x and y points
	initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
	initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

	// Start movement
	moveElement = true;
});

// Move

draggableNav.addEventListener(events[deviceType].move, (e) => {
	// If movement is true then set top and left to new X and Y while removing offset
	if (moveElement) {
		e.preventDefault();
		let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
		let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
		draggableNav.style.top = draggableNav.offsetTop - (initialY - newY) + "px";
		draggableNav.style.left =
			draggableNav.offsetLeft - (initialX - newX) + "px";
		initialX = newX;
		initialY = newY;
	}
});

// Mouse up / touch end
draggableNav.addEventListener(
	events[deviceType].up,
	(stopMovement = (e) => {
		moveElement = false;
	})
);

draggableNav.addEventListener("mouseleave", stopMovement);
draggableNav.addEventListener(events[deviceType].up, (e) => {
	moveElement = false;
});

//NOTE MODALS
//Modal items
const noteModal = document.getElementById("note-id");

const openNoteBtn = document.querySelector("#notify-btn-id");
const openEmailsBtn = document.querySelector("#emails-btn-id");
const openNoteContactBtn = document.querySelector("#contact-notify-btn-id");

const openProductOne = document.querySelector("#product-one-btn");
const openProductTwo = document.querySelector("#product-two-btn");
const openProductThree = document.querySelector("#product-three-btn");
const openProductFour = document.querySelector("#product-four-btn");
const openProductFive = document.querySelector("#product-five-btn");
const openProductSix = document.querySelector("#product-six-btn");

const closeNoteBtn = document.querySelector(".close-note-btn");

//Click events
// Main Note
openNoteBtn.addEventListener("click", () => {
	noteModal.style.display = "block";
});

//Contact Note
openNoteContactBtn.addEventListener("click", () => {
	noteModal.style.display = "block";
});

//Footer Email Note
openEmailsBtn.addEventListener("click", () => {
	noteModal.style.display = "block";
});

//Product One
openProductOne.addEventListener("click", () => {
	noteModal.style.display = "block";
});
//Product Two
openProductTwo.addEventListener("click", () => {
	noteModal.style.display = "block";
});
//Product Three
openProductThree.addEventListener("click", () => {
	noteModal.style.display = "block";
});
//Product Four
openProductFour.addEventListener("click", () => {
	noteModal.style.display = "block";
});
//Product Five
openProductFive.addEventListener("click", () => {
	noteModal.style.display = "block";
});
//Product Six
openProductSix.addEventListener("click", () => {
	noteModal.style.display = "block";
});

//Close
closeNoteBtn.addEventListener("click", () => {
	noteModal.style.display = "none";
});

window.addEventListener("click", (e) => {
	if (e.target === noteModal) {
		noteModal.style.display = "none";
	}
});
