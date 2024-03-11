var length=document.querySelectorAll("#masterPlay").length;
let k=0;
var audio=new Audio();
document.querySelector(".Footer img").style.visibility = "hidden";
document.getElementById("1").style.visibility="hidden";
for(var i=0;i<length;i++){
    (function(index){
        document.querySelectorAll("#masterPlay")[i].addEventListener("click",()=>{
        document.querySelector(".Footer img").style.visibility = "visible";
        k=index+1;
        console.log(k);
        audio1(index+1);

    });
})(i)
}
function audio1(num){
        var progressBar=document.getElementById("myProgressBar");
        audio.src = 'songs/'+num+'.mp3';
        progress=parseInt(audio.duration-audio.currentTime);
        audio.play();
        adddescription(num);
        audiohelper(audio,progressBar);
        progresshelper(audio,progressBar);
}
function adddescription(index){
    target=["Warriyo - Mortals [NCS Release]","Cielo - Huma-Huma","DEAF KEV","Different Heaven & EH!DE ","anji-Heroes-Tonight-feat-Johnning-NCS-Release","Rabba - Salam-e-Ishq","Sakhiyaan - Salam-e-Ishq","Bhula Dena - Salam-e-Ishq","Tumhari Kasam - Salam-e-Ishq","Na Jaana - Salam-e-Ishq"];
    document.getElementById("1").innerHTML=target[index-1];
    document.getElementById("1").style.visibility="visible";
}
function audiohelper(audio,progressBar){
    audio.addEventListener('timeupdate',function()
    {
        if (!isNaN(audio.duration) && audio.duration > 0) {
            var progress = (audio.currentTime / audio.duration) * 100;
            progressBar.value = progress;
        } else {
            progressBar.value = 0;
        }

    });
}
function progresshelper(audio,progressBar){
    progressBar.addEventListener('input',function(){
        var seek=audio.duration*(progressBar.value/100);
        audio.currentTime=seek;
    });
}
document.getElementById("previous").addEventListener("click",()=>{
    if(k==0){
        k=1;
        audio1(1);
        document.querySelector(".Footer img").style.visibility = "visible";
        document.getElementById("stop").classList.add('fa-play-circle');
        document.getElementById("stop").classList.remove('fa-pause-circle');

    }
    else if(k<=1){
        k=1;
    }
    else{
        k=k-1;
    }
    audio1(k);
});
document.getElementById("next").addEventListener("click",()=>{
    if(k==0){
        k=1;
        audio1(1);
        document.querySelector(".Footer img").style.visibility = "visible";
        document.getElementById("stop").classList.add('fa-play-circle');
        document.getElementById("stop").classList.remove('fa-pause-circle');

    }
    else if(k>=10){
        k=1;
    }
    else{
        k=k+1;
    }
    audio1(k);
});
document.getElementById("stop").addEventListener("click",()=>
{
    console.log(k);
    if(k==0){
        k=1;
        audio1(1);
        document.querySelector(".Footer img").style.visibility = "visible";
        document.getElementById("stop").classList.add('fa-play-circle');
        document.getElementById("stop").classList.remove('fa-pause-circle');

    }
   else  if (audio.paused) {
        document.getElementById("stop").classList.remove('fa-play-circle');
        document.getElementById("stop").classList.add('fa-pause-circle');
        audio.play();
        document.querySelector(".Footer img").style.visibility = "visible";
    } else {
        audio.pause();
        document.getElementById("stop").classList.add('fa-play-circle');
        document.getElementById("stop").classList.remove('fa-pause-circle');
        document.querySelector(".Footer img").style.visibility = "hidden";
    }
});









