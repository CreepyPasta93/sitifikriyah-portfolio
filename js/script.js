const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

/* Typing effect */
const typingText = document.getElementById("typingText");

const phrases = [
    "Being alive is the special occasion",
    "You is kind, you is smart, you is important.",
    "Carpe diem",
    "If plan A doesn't work, there's a whole alphabet",
    "You still haven't met all the people who are doing to love you..",
    "No act of kindness is ever wasted, especially when it's for a stray cat who had nothing.."
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, letterIndex + 1);
        letterIndex++;
    }

    if (!isDeleting && letterIndex === currentPhrase.length) {
        setTimeout(function () {
            isDeleting = true;
        }, 1200);
    }

    if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const typingSpeed = isDeleting ? 45 : 75;
    setTimeout(typeEffect, typingSpeed);
}

typeEffect();

/* Cute custom cursor */
const cursorDot = document.getElementById("cursorDot");

document.addEventListener("mousemove", function (event) {
    cursorDot.style.left = event.clientX + "px";
    cursorDot.style.top = event.clientY + "px";
});