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
  //const 
}
