let skillsSection = document.querySelector(".our-skills")
let spans = document.querySelectorAll(".our-skills .progress span")
let statsSection = document.querySelector(".stats")
let statsSpans = document.querySelectorAll(".stats .box .stat-num")
let eventsInput = document.querySelector(".events-input")
let form = document.querySelector(".discount form")
let userInput = document.querySelector(".discount .username-input")
let emailInput = document.querySelector(".discount .email-input")
let phoneInput = document.querySelector(".discount .phone-input")
let textAreaInput = document.querySelector(".discount .text-area")
let megaMenu = document.querySelector(".mega-li");
let eventsPh,
usernamePh,
emailPh,
phonePh,
textAreaPh;
let birthDate = new Date("3 Dec 2023 GMT0+300");
let timerDays = document.querySelector(".timer .days")
let timerHours = document.querySelector(".timer .hours")
let timerMinutes = document.querySelector(".timer .minutes")
let timerSeconds = document.querySelector(".timer .seconds")
let dateInterval;
let scrollUp = document.querySelector(".scroll-up")
console.log(birthDate)
let check = false;
window.onscroll = function() {
    if (window.scrollY >= skillsSection.offsetTop - 200) {
        spans.forEach((element) => {
            addProgress(element)
        })
    }
    if (window.scrollY >= statsSection.offsetTop - 300) {
        if (!check) {
            statsSpans.forEach((el) => {
                increaseStats(el)
            })  
        }
        check = true;
    }
    if (window.scrollY > document.documentElement.clientHeight) {
        scrollUp.style.opacity = "1";
    } else {
        scrollUp.style.opacity = "0";
    }
}
function addProgress(element) {
    let progress = element.dataset.progress;
    element.style.width = `${progress}%`
}
function increaseStats(span) {
    let goal = span.dataset.stat
    let myInterval = setInterval(function() {
        span.innerHTML++
        if (span.innerHTML == goal) {
            clearInterval(myInterval)
        }
    }, 2000 / goal)
}
console.log(eventsInput.placeholder)
eventsInput.onfocus = function() {
    eventsPh = eventsInput.placeholder
    eventsInput.placeholder = "";
}
eventsInput.onblur = function() {
    eventsInput.placeholder = eventsPh;
}
userInput.onfocus = function() {
    usernamePh = userInput.placeholder
    userInput.placeholder = "";
}
userInput.onblur = function() {
    userInput.placeholder = usernamePh
}
emailInput.onfocus = function() {
    emailPh = emailInput.placeholder
    emailInput.placeholder = "";
}
emailInput.onblur = function() {
    emailInput.placeholder = emailPh
}
phoneInput.onfocus = function() {
    phonePh = phoneInput.placeholder
    phoneInput.placeholder = "";
}
phoneInput.onblur = function() {
    phoneInput.placeholder = phonePh
}
textAreaInput.onfocus = function() {
    textAreaPh = textAreaInput.placeholder
    textAreaInput.placeholder = "";
}
textAreaInput.onblur = function() {
    textAreaInput.placeholder = textAreaPh
}

// creating a timer

function createTimer() {
    dateInterval = setInterval(function() {
        let dateNow = new Date()
        let diff = birthDate - dateNow;
        let days = parseInt(diff / (1000 * 60 * 60 * 24))
        let hours = parseInt(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        let minutes = parseInt(diff % (1000 * 60 * 60) / (1000 * 60))
        let seconds = parseInt(diff % (1000 * 60) / 1000)
        days = days < 10 ? `0${days}` : days
        hours = hours < 10 ? `0${hours}` : hours
        minutes = minutes < 10 ? `0${minutes}` : minutes
        seconds = seconds < 10 ? `0${seconds}` : seconds
        timerDays.innerHTML = days
        timerHours.innerHTML = hours
        timerMinutes.innerHTML = minutes
        timerSeconds.innerHTML = seconds
    })
}
createTimer()

megaMenu.onclick = function() {
    megaMenu.classList.toggle("clicked")
}
console.log(megaMenu)