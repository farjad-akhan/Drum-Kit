
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var expression= this.innerHTML;
      makesound(expression);
      buttunanimae(expression);
  });
}

document.addEventListener("keydown",function(event){
  makesound(event.key);
  buttunanimae(event.key);
});

function makesound(key){
  switch (key) {
    case "w":var audio=new Audio('sounds/crash.mp3');
    audio.play();
      break;
      case "a":var audio=new Audio('sounds/kick-bass.mp3');
      audio.play();
        break;
        case "s":var audio=new Audio('sounds/snare.mp3');
        audio.play();
          break;
          case "d":var audio=new Audio('sounds/tom-1.mp3');
          audio.play();
            break;
    case "j":var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
              break;
   case "k":var audio=new Audio('sounds/tom-3.mp3');
              audio.play();
                break;
    case "l":var audio=new Audio('sounds/tom-4.mp3');
                audio.play();
                  break;
    default: console.log(key);

  }
}

function buttunanimae(btn){
  document.querySelector("."+btn).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+btn).classList.remove("pressed");
  }, 100);
}
