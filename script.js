console.log("javascript");
//initialise the variable
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName')
let songItems = Array.from(document.getElementsByClassName("songitem"));

//array of songs
let songs = [
    { songName: "Salame-e-ishq", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "xyz", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "a bc", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "dance basanti", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Salame", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Salame-e-ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Salame-e-ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Salame-e-ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Salame-e-ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
]
songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})


//listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log("timeupdate");
    //update progressbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('change', () => {
    audioElement.currentTime = (audioElement.duration * myprogressBar.value) / 100;

})
const makeallPlays = () => {
    Array.from(document.getElementsByClassName("songitemPlay")).forEach((element) => {
        element.classList.add("fa-pause-play");
        element.classList.remove("fa-circle-pause");
      
        
})

}
Array.from(document.getElementsByClassName("songitemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallPlays();
        console.log(e.target);
        songindex = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${songindex + 1}.mp3`;
        mastersongName.innerText= songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    })
})

// for current song has to chnage its ICON next/previous clicked
function toggleSound() {
    let songitem= document.getElementsByClassName("songitemPlay")
    if (songindex == songindex +1) {
     songitem.classList.add('fa-circle-pause');
     songitem.classList.remove('fa-circle-play');
     
     } else if (songindex == songindex -1)
     {
        songitem.classList.remove('fa-circle-pause');
        songitem.classList.remove('fa-circle-play');
    }
 }


//clicked on next

document.getElementById('next').addEventListener('click', () => {
    console.log("inside next");
    if (songindex >= 9) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    toggleSound();
    audioElement.src = `songs/${songindex + 1}.mp3`;
    mastersongName.innerText= songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})
//previous clciked 
document.getElementById('previous').addEventListener('click', () => {
    console.log("inside previous");
    if (songindex <=0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    toggleSound();
    audioElement.src = `songs/${songindex}.mp3`;
    mastersongName.innerText= songs[songindex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
})