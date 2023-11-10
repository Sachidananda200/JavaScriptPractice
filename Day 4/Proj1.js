//generate a random color
const randomColor = function(){
    const hex = "0123456788ABCDEF"
    let color = "#"
    for(let i = 0;i<6;i++){
        color += hex[Math.floor(Math.random()*hex.length)]
    }
    return color
};
let intervalid;

console.log(randomColor());
const startChangingColor = function(){
if(!intervalid){
    intervalid = setInterval(changeBgcolor,1000)
   }
    function changeBgcolor(){
        document.body.style.backgroundColor = randomColor();
}
    };

const stopChangingColor = function(){
    clearInterval(intervalid);
    intervalid = null;
};

document.querySelector("#start").addEventListener('click',startChangingColor);

document.querySelector("#stop").addEventListener('click',stopChangingColor)