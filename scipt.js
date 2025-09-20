let textInput = document.getElementById("text-input");
let wordsCount = document.getElementById("words-count");
let charWithout = document.getElementById("char-without-space");
let charWith = document.getElementById("char-with-space");
let sentenceLength = document.getElementById("sentence-length");
let paraLength = document.getElementById("para-length");
let readingTime = document.getElementById("reading-length");
let hamburger = document.querySelector(".hamburger");
let firstnav = document.querySelector(".firstnav");
let logo = document.getElementById("grammerly-logo")
let typingTimer;
textInput.addEventListener("input",()=>{
    let text = textInput.value.trim();

    charWith.textContent = text.length;
    charWithout.textContent = text.replace(/\s+/g,"").length;

    wordsCount.textContent = text.split(/\s+/).filter(word => word.length>0).length;

    sentenceLength.textContent = text.split(/[.!?]+/).filter(s => s.trim().length>0).length;

    paraLength.textContent = text.split(/\n+/).filter(p=>p.trim().length>0).length;

    logo.classList.add("loader");

    clearTimeout(typingTimer);

    typingTimer = setTimeout(()=>{
        logo.classList.remove("loader");
    },5000)
})



