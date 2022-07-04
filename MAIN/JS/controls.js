function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

function play(){
  const modelViewer = document.querySelector("#barbell_squat");
  //modelViewer.animationName='barbell_squat_anim';
  modelViewer.play();
}

function pause(){
  const modelViewer = document.querySelector("#barbell_squat");
  modelViewer.pause();
}

function stop(){
  const modelViewer = document.querySelector("#barbell_squat");
  modelViewer.currentTime = 0;
  modelViewer.pause();
}
function loadbarbellsquat(){
  const modelViewer = document.querySelector("#barbell_squat") // 
}
$('.slide selected:button').click(function() {
 $('.slide').empty();
});

