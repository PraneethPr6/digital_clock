function time() {
    let hrs = document.getElementById("clock-hours");
    let mins = document.getElementById("clock-minutes");
    let secs = document.getElementById("clock-seconds");
    let ampm = document.getElementById("clock-period");

    let times = new Date();

    let hour = times.getHours();
    let minut = times.getMinutes();
    let second = times.getSeconds();
    let ampm1 = "AM";

    if (hour > 12) {
        hour = hour - 12;
        ampm1 = "PM";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minut < 10) {
        minut = "0" + minut;
    }
    if (second < 10) {
        second = "0" + second;
    }

    hrs.innerText = hour;
    mins.innerText = minut;
    secs.innerText = second;
    ampm.innerText = ampm1;
}
let milisecond = 1000;
setInterval(time, milisecond);

function Change(){
    
    var w =document.getElementById("one").value;
    var x =document.getElementById("two").value;
    var y =document.getElementById("three").value;
    var z =document.getElementById("four").value;
    
    
    let tym = new Date().getHours();
    
    if(w == tym){
        let img =  document.getElementById("pics");
        img.src = "Component 30 – 1.png";
       
        document.getElementById("gudmorning").innerHTML = ("Good Morning");
        document.getElementById("greet").innerHTML = ("GRAB SOME HEALTHY BREAKFAST!!!");
    }
    if(x == tym){
        let img =  document.getElementById("pics");
        img.src = "Component 31 – 1.jpg";
    
        document.getElementById("gudmorning").innerText = ("Good AFternoon !! Take some sleep");
        document.getElementById("greet").innerHTML = ("LETS HAVE SOME LUNCH !!");
    }
    if(y == tym){
        let img =  document.getElementById("pics");
        img.src = "lunch_image.jpg";
        document.getElementById("gudmorning").innerHTML = ("Good Evening !!");
        document.getElementById("greet").innerText = ("STOP YAWNING, GET SOME TEA..  ITS JUST EVENING!");
    }
    if(z == tym){
        let img =  document.getElementById("pics");
        img.src = "Component 32 – 1.jpg";
        document.getElementById("gudmorning").innerHTML = ("Good Night !!");
        document.getElementById("greet").innerHTML = ("CLOSE YOUR EYES AND GO TO SLEEP");
    }
    
    
    let ones =document.getElementById("WakeTime");
    ones.innerText = one.options[one.selectedIndex].text;

    let twos =document.getElementById("LunchTime");
    twos.innerText = two.options[two.selectedIndex].text;
    
    let threes = document.getElementById("NapTime");
    threes.innerText = three.options[three.selectedIndex].text;

    let fours = document.getElementById("NightTime");
    fours.innerText = four.options[four.selectedIndex].text;

}