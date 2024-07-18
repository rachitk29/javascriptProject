let bulb = document.querySelector("#bulb")
let btn = document.querySelector("button")


var flag = 0;
btn.addEventListener("click", function(){
    if(flag == 0) {
        bulb.style.backgroundColor = "Yellow";
        console.log("Button Clicked");
        flag = 1
    } else {
        bulb.style.backgroundColor = "Red";
        console.log("Button Clicked");
        flag = 0
    }
})

