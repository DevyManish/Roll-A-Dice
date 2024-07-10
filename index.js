const btn = document.getElementById("btn");
const dice = document.getElementById("dice");
const img = document.getElementById("myImg");
const min = 1;
const max = 6;
let randomNo;

btn.onclick = function() {
    randomNo = Math.floor(Math.random() * max) + min ;
    dice.textContent = "🎲 : " + randomNo;
    if (randomNo == 1) {    
        img.innerHTML = `<img src="assets/1.svg" >`;
    }
    else if(randomNo == 2){
        img.innerHTML = `<img src="assets/2.svg" >`;
    }
    else if(randomNo == 3){
        img.innerHTML = `<img src="assets/3.svg" >`;
    }
    else if(randomNo == 4){
        img.innerHTML = `<img src="assets/4.svg" >`;
    }
    else if(randomNo == 5){
        img.innerHTML = `<img src="assets/5.svg" >`;
    }
    else{
        img.innerHTML = `<img src="assets/6.svg" >`;
    }
    console.log(img.src);
}