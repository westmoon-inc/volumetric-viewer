function pause(){
  //alert("작동")
  const modelViewer = document.querySelector('#swingman');
  modelViewer.animationName = 'fullswingAnim';
  modelViewer.pause();
}

function play(){
  const modelViewer = document.querySelector('#swingman');
  modelViewer.animationName = 'fullswingAnim';
  //modelViewer.currentTime = 0;
  modelViewer.play();
}

function stop(){
  const modelViewer = document.querySelector('#swingman');
  modelViewer.animationName = 'fullswingAnim';
  //modelViewer.currentTime = 0;
  modelViewer.currentTime = 0;
  modelViewer.pause();
}
const modelViewer = document.querySelector("model-viewer#swingman");
      modelViewer.addEventListener("quick-look-button-tapped", () => {
        window.location.href = "https://naver.com";
      });

