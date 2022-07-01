
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

function pause(){
  //alert("작동")
  const modelViewer = document.querySelector('#golfman');
  modelViewer.animationName = 'fullswingAnim';
  modelViewer.pause();
}

function play(){
  const modelViewer = document.querySelector('#golfman');
  modelViewer.animationName = 'fullswingAnim';
  //modelViewer.currentTime = 0;
  modelViewer.play();
}
function test(){
  
  document.querySelector('#testbutton').addEventListener("click", (e)=> {
    // do stuff here.
    const modelViewer = document.querySelector('#golfman');
    modelViewer.addEventListener('timeupdate', function(){
    var progressBar = document.querySelector('#progress-bar');
    progressBar.value = Math.floor((100 / modelViewer.duration) * modelViewer.currentTime);
    }, false);
    //activateAR()
  })
  alert("작동")
}


// model-viewer 일시 정지 구현 코드
// (() => {
//   const modelViewer = document.querySelector('#golfman');

//   self.setInterval(() => {
//     modelViewer.animationName = modelViewer.animationName === 'fullswingAnim' ?
//       'Idle' : 'fullswingAnim';
//   }, 1500.0);
// })();

//document.getElementById("pausebtn").addEventListener('click',pause);


  // var extremelySmallIntervalTime = 0.05;
  // var j = 0;

  // setInterval(function(){
  //   if(modelViewer.currentTime > 0 && modelViewer.currentTime <extremelySmallIntervalTime)
  // {
  //   if(j>0){
  //     modelViewer.pause();
  //     modelViewer.currentTime = 0;
  //   }
  //   j++;
  //   console.log(j);
  // }},extremelySmallIntervalTime*500);







// this._modelViewer = modelViewer;
//   _modelViewer.currentTime();
//   currentTime;

// var modelviewer = document.querySelector('#golfman');
// modelviewer.setAttribute('src','./MAIN/ASSET/fullswing.glb');

// function playmodelviewer(){
//   modelviewer.load();
//   modelviewer.play();
// }
// function playemodelviewer(){
//   modelviewer.pause();
// }

// const animationLength = 1000; // ms
// const modelViewer = document.querySelector("#golfman");
// //modelViewer.play();
// //self.setTimeout(()=>{modelViewer.pause();}, animationLength);

// modelViewer.play();

// var extremelySmallIntervalTime = 0.05;
// var j=0;
// const interval = setInterval(function(){

//   console.log(modelViewer.currentTime);

//   if(modelViewer.currentTime > 0 && modelViewer.currentTime < (extremelySmallIntervalTime - 0.01))
//     { ++j;
//     console.log(j);

//     if ( j > 0 ){
//         modelViewer.pause();
//         //modelViewer.currentTime = 0;
//         j = 0;
//         clearInterval(interval);
//       }
//     }
//     else if(modelViewer.currentTime == 0){
//         modelViewer.play();
//       }
// }, extremelySmallIntervalTime*1000);