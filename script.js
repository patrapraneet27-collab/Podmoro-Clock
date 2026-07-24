// clock part
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = String(now.getMinutes()).padStart(2, "0");
    

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = String(hours).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}`;
}

updateClock();

setInterval(updateClock, 1000);

// timerpart

let totalSeconds = 25 * 60;
let interval = null;

function updateDisplay() {
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;

    mins = String(mins).padStart(2, "0");
    secs = String(secs).padStart(2, "0");

    document.getElementById("timer").textContent = `${mins}:${secs}`;
}

function startTimer() {
    if (interval === null) {
        let input = document.getElementById("minutes").value;

        if (input !== "" && totalSeconds === 25 * 60) {
            totalSeconds = Number(input) * 60;
            updateDisplay();
        }

        interval = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateDisplay();
            } else {
                clearInterval(interval);
                interval = null;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {
    clearInterval(interval);
    interval = null;

    let input = document.getElementById("minutes").value;

    if (input !== "") {
        totalSeconds = Number(input) * 60;
    } else {
        totalSeconds = 25 * 60;
    }

    updateDisplay();
}

updateDisplay();


function showClock() {
    document.getElementById("clock").style.display = "flex";
    document.getElementById("Timer-tab").style.display = "none";
}

function showTimer() {
    document.getElementById("clock").style.display = "none";
    document.getElementById("Timer-tab").style.display = "flex  ";
}


const video = document.getElementById("bg-video");
const wallpaper = document.getElementById("wallpaper");

function changeWallpaper(path){

    wallpaper.src = path;

    video.load();

    video.play();

    localStorage.setItem("wallpaper", path);
}

window.addEventListener("DOMContentLoaded",()=>{

    const savedWallpaper = localStorage.getItem("wallpaper");

    if(savedWallpaper){

        wallpaper.src = savedWallpaper;

        video.load();

        video.play();

    }

});

function dater(){
    const printdate = new Date();
    let exactday = printdate.getDate();
    let day = printdate.getDay();
    let month = printdate.getMonth();
    let array = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",]
    let montharray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"]
    exactday= String(exactday).padStart(2,0);
    document.getElementById("dater").textContent=`${array[day]}, ${montharray[month]} ${exactday}`;
}

dater();
