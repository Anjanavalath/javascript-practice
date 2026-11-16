let progress=document.querySelector(".bar-fill")
let text=document.querySelector("#percentText");
let second=10;
count=0

let timer=setInterval(function(){
    if(count<100){
        count++;
        progress.style.width=`${count}%`;
        text.textContent=`${count}%`
    }
    else{
        text.textContent="Download Finshed";
        clearInterval(timer);
    }

},(second*1000)/100);