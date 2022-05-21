console.log("Welcome to spotify");
let songIndex=1;
let audioElement = new Audio("songs/music1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let musicInfo = document.getElementById("musicInfo");
let v=document.getElementById("up");
let volUP = document.getElementsByClassName("fa-volume-up")[0];
let count=0;
let t;
let songs = [
    {songName: "Let Me Love You ft. Justi Beiber", filePath:"songs/music1.mp3 ", coverPath:"Cover/cover1.jpg"},
    {songName: "Despacito ft. DJ Snake", filePath:"songs/music2.mp3", coverPath:"Cover/cover7.jpg"},
    {songName: "Alone ft. Alan Walker", filePath: "songs/music3.mp3 ", coverPath:"Cover/cover4.jpg"},
    {songName: "Faded ft. Alan Walker", filePath: "songs/music4.mp3 ", coverPath: "Cover/cover3.jpg "},
    {songName: "Chip Thrills ft. Sia", filePath: "songs/music5.mp3 ", coverPath: "Cover/cover5.jpg "},
    {songName: "Senorita ft. Camilla Cabilo", filePath: "songs/music6.mp3 ", coverPath: "Cover/cover2.jpg "},
    {songName: "Lily ft. Alan Walker", filePath: "songs/music7.mp3 ", coverPath: "Cover/cover6.jpg"}
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("text")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
        musicInfo.innerText=songs[songIndex-1].songName;
       let item =  document.getElementsByClassName("songItemPlay")[songIndex-1];
           item.classList.remove("fa-play-circle");
           item.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
        Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
            element.classList.remove("fa-pause-circle");
            element.classList.add("fa-play-circle");
        })
        // console.log(audioElement.currentTime);
    }
})

audioElement.addEventListener("timeupdate",()=>{
    progress = parseInt((audioElement.currentTime / audioElement.duration ) *100);
    myProgressBar.value = progress;
    
})

myProgressBar.addEventListener("change",()=>{
 audioElement.currentTime = myProgressBar.value * audioElement.duration /100;
   
})
 const makeAllPlays = ()=>{
     Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    }) }

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{ 
   
        songIndex = parseInt(e.target.id);
        audioElement.src=`songs/music${songIndex}.mp3`;
        if(e.target.className === "songItemPlay far fa-1x fa-play-circle"){
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        count = 0;
      //  console.log(e.target.className);
        }
        else if(e.target.className === "songItemPlay far fa-1x fa-pause-circle"){
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            audioElement.pause();
            gif.style.opacity=0;
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
            count = 1 ;
           console.log(audioElement.currentTime);
        }
        makeAllPlays();
        if(count != 1)
       { e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
    }
       
        musicInfo.innerText=songs[songIndex-1].songName;
    })
})

document.getElementById("previous").addEventListener("click",()=>{


    if(songIndex <= 1)
    {
        songIndex = 7;
    }
    else{
        songIndex=songIndex-1;
    }
    
    audioElement.src=`songs/music${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    musicInfo.innerText=songs[songIndex-1].songName;
})


document.getElementById("next").addEventListener("click",()=>{
    if(songIndex >= 7)
    {
        songIndex = 1;
    }
    else{
        songIndex=songIndex+1;
    }
    
    audioElement.src=`songs/music${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    musicInfo.innerText=songs[songIndex-1].songName;
    
})

let vol = document.getElementById("vol2");

vol.addEventListener("change",()=>{
        audioElement.volume = vol.value/100;
        if(vol.value==0){
            volUP.classList.remove("fa-volume-up");
            volUP.classList.add("fa-volume-mute");
        }
        else{
            volUP.classList.remove("fa-volume-mute");
            volUP.classList.add("fa-volume-up");
        }

 })


 

 volUP.addEventListener("click",()=>{
     if(v.className==="fa fa-volume-up"){
     volUP.classList.remove("fa-volume-up");
     volUP.classList.add("fa-volume-mute");
     audioElement.volume=0;
     }
     else{
        volUP.classList.remove("fa-volume-mute");
        volUP.classList.add("fa-volume-up");
        audioElement.volume = vol.value/100;
     }
 })

