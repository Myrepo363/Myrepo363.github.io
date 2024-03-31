//game starts
//give output animation
//take input
//cheak it 
// increase level
//error
var Colors =["red","green","blue","yellow"];
var user_input=[];
var game_input=[];
var started=false;
var level=0;



$(document).on("keypress",function(){
    if(!started){
         nextsequence()
        started=true;
    }
});


function nextsequence()
{
    user_input=[];
    level++;
    $("#level-title").text(`level ${level}`);
    let a_num=Math.random()*4;
    let number=Math.floor(a_num);
    let ButtonColor = Colors[number]
    game_input.push(ButtonColor)
    showanimation(ButtonColor);
}

function showanimation(key)
{
  
    $("#" + key).addClass("pressed");
    var audio = new Audio(`sounds/${key}.mp3`)
    audio.play()
    setTimeout(function() {
        $("#" + key).removeClass("pressed").fadeIn(100);
    }, 200);


}

$(".btn").click(function(){
   if(started){
    user_input.push(this.id);
    showanimation(this.id);
    
    if(user_input.length==level){
        cheaksequence();
    }
    
   }
})

function cheaksequence()
{
    let length=user_input.length
    let same =true;
    
    for(let i=0;i<length;i++)
    {
        console.log(game_input[i],user_input[i])
        if(user_input[i] !=game_input[i]){
            same=false;
            break;
        }
    }
    if(same){
    setTimeout(nextsequence,800)
    }
    else
    {
        let audio = new Audio("sounds/wrong.mp3");
        audio.play();
        ended()
    }
}
function ended()
{
    $("#level-title").text(`you lost,Press A Key to Start`);
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    started=false;
    level = 0;
    game_input=[];
}
