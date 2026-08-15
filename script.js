// =======================
// SLIDE NAVIGATION
// =======================
alert("JS Loader");
let currentSlide = 1;

function goBack(){

    if(currentSlide > 1){

        nextSlide(currentSlide - 1);

    }

}
function nextSlide(num){

    currentSlide = num;

    document
    .querySelectorAll(".slide")
    .forEach(slide=>{
        slide.classList.remove("active");
    });

    document
    .getElementById("slide"+num)
    .classList.add("active");

}

// =======================
// PASSWORD
// =======================

function checkPassword(){
    alert("Submit Clicked");
    const password =
    document
    .getElementById("passwordInput")
    .value
    .trim();

    if(password.trim().toLowerCase()=== "kudikari"){

        nextSlide(5);

        const music =
        document
        .getElementById("bgMusic");

        if(music){
            music.play();
        }

    }

    else{

        alert(
        "Wrong Password 😜"
        );

    }

}

// =======================
// HINT 1
// =======================

function checkQuestion1(){

    const answer =
    document
    .getElementById("answer1")
    .value
    .toLowerCase()
    .trim();

    if(answer === "sherin"){

        nextSlide(7);

    }

    else{

        alert(
        "Try Again ❤️"
        );

    }

}

// =======================
// HINT 2
// =======================

function checkQuestion2(){

    const answer =
    document
    .getElementById("answer2")
    .value
    .trim();

    if(
        answer === "27-04-2026" ||
        answer === "27/04/2026"
    ){

        nextSlide(8);

    }

    else{

        alert(
        "Wrong Date 😜"
        );

    }

}

// =======================
// HINT 3
// =======================

function checkQuestion3(){

    const answer =
    document
    .getElementById("answer3")
    .value
    .trim();

    if(answer === "0502"){

        nextSlide(9);

    }

    else{

        alert(
        "Wrong Answer ❤️"
        );

    }

}

// =======================
// RUNNING NO BUTTON
// =======================

const noBtn =
document.getElementById("noBtn");

document.addEventListener(
"mousemove",
(e)=>{

if(noBtn){

const rect =
noBtn.getBoundingClientRect();

const dx =
e.clientX -
(rect.left + rect.width/2);

const dy =
e.clientY -
(rect.top + rect.height/2);

const distance =
Math.sqrt(
dx*dx + dy*dy
);

if(distance < 120){

const x =
Math.random() *
(window.innerWidth - 150);

const y =
Math.random() *
(window.innerHeight - 80);

noBtn.style.position =
"fixed";

noBtn.style.left =
x + "px";

noBtn.style.top =
y + "px";

}

}

}
);

// =======================
// FLOATING HEARTS
// =======================

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*100 + "vw";

heart.style.fontSize =
(15 + Math.random()*25)
+ "px";

heart.style.animationDuration =
(4 + Math.random()*5)
+ "s";

document.body.appendChild(
heart
);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(
createHeart,
700
);

// =======================
// LOVE ENDING
// =======================

console.log(
"Happy Birthday Karthick ❤️"
);
document.addEventListener("click", function () {

    const music = document.getElementById("bgMusic");

    if(music){
        music.play().catch(()=>{});
    }

}, { once:true });