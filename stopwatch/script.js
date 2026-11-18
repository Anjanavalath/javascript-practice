let [seconds, minutes, hours]= [0,0,0];
        let timer=document.querySelector("#timer");
        let t=null

        function stopwatch(){
            seconds++;
            if(seconds==60){
                seconds=0;
                minutes++;
                if (minutes==60){
                    minutes=0;
                    hours++;
                }

            }
            let h= hours<10 ? "0"+hours :hours;
            let m= minutes<10 ? "0"+minutes :minutes;
            let s= seconds<10 ? "0"+seconds :seconds;
            timer.innerHTML= h+":"+m+":" +s;

        }

        function watchStart(){
            if(t!=null){
                clearInterval(t);
                t=null;
                return;
            }
            t=setInterval(stopwatch,1000);
            
        }
        function watchStop(){
            clearInterval(t);
            t = null;

        }
        function watchReset(){
            clearInterval(t);
            t = null;
            seconds = 0;
            minutes = 0;
            hours = 0;
            timer.innerHTML = "00:00:00";
}

