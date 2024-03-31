for(let a=0;a<7;a++){
document.querySelectorAll(".drum")[a].addEventListener("click",function(){
    let m = this.innerHTML
    makesound(m)
    animation(m)
})
}
document.addEventListener("keypress",function(event)
{
    makesound(event.key)
    console.log(event.key)
    animation(event.key)
}
)

function makesound(key)
{
    switch(key){
        case "w":
            let audio1 =new Audio('/sounds/crash.mp3');
            audio1.play();
        case 'a':
            let audio2 =new Audio('/sounds/kick-bass.mp3');
            audio2.play();
        case 's':
            let audio3 =new Audio('/sounds/snare.mp3');
            audio3.play();
        case 'd':
            let audio4=new Audio('/sounds/tom-1.mp3');
            audio4.play();
        case 'j':
            let audio5=new Audio('/sounds/tom-2.mp3');
            audio5.play();
        case 'k':
            let audio6 =new Audio('/sounds/tom-3.mp3');
            audio6.play();
        case 'l':
            let audio7 =new Audio('/sounds/tom-4.mp3');
            audio7.play();
    }
}
function animation(currentKey)
{
    document.querySelector(`.${currentKey}`).classList.add("pressed")
    setTimeout(function(){document.querySelector(`.${currentKey}`).classList.remove("pressed")},250)
}
{

}
