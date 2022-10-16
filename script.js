console.log("Welcome to Spotify");
//initialize elements
let songindex=0;
let audioElement=new Audio('/song/1.MP3');
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let Songitem= Array.from(document.getElementsByClassName('Songitem'));
let songs=[
    {songName: "Badri ki dulhaniyan", filepath: "song/1.MP3", coverpath:"covers/c1.jpg"},
    {songName: "dekh lena", filepath: "song/2.MP3", coverpath:"covers/c2.jpg"},
    {songName: "akhiyaan", filepath: "song/3.MP3", coverpath:"covers/c3.jpg"},
    {songName: "dekha hazarro dafa", filepath: "song/4.MP3", coverpath:"covers/c4.jpg"},
    {songName: "humnava", filepath: "song/5.MP3", coverpath:"covers/c5.jpg"},
    {songName: "khaab", filepath: "song/6.MP3", coverpath:"covers/c6.jpg"},
    {songName: "O Hamsafar", filepath: "song/7.MP3", coverpath:"covers/c7.jpg"},
    {songName: "raabata", filepath: "song/8.MP3", coverpath:"covers/c8.jpg"},
    {songName: "raat kamal hai", filepath: "song/9.MP3", coverpath:"covers/c9.jpg"},
    {songName: "roke na ruke", filepath: "song/10.MP3", coverpath:"covers/c10.jpg"},
]
// console.log(Songitem);
Songitem.forEach((Element, i)=>{
// console.log(Element,i);
// Element.getElementsByTagName("img")[i]
Element.getElementsByTagName("img")[0].src=songs[i].coverpath;
Element.getElementsByClassName("songname")[0].innerText =songs[i].songName;
})
//audioElement.play();
//handle play pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate')
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value* audioElement.duration/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
        makeallplays();
        songindex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`song/${songindex+1}.mp3`;
        mastersongname.innerText= songs[songindex].songName;
        audioElement.currentTime=0;
        console.log(audioElement)
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=9)
    {
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`song/${songindex+1}.MP3`;
    mastersongname.innerText= songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    //gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`song/${songindex+1}.MP3`;
    mastersongname.innerText= songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    //gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})