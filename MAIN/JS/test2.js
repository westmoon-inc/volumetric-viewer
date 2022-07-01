var scrollMaxY = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
  document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ); // max scroll distance
    
    var AnimBegin = 0; // beginning of animation
    var AnimEnd = 2.3; // end of animation
    var AnimDuration = AnimEnd- AnimBegin; // duration of the animation
    
    var CurrentTime = AnimBegin + ((window.scrollY / scrollMaxY) * AnimDuration); // uses the max scroll distance to interpolate through the animation frames                  
    
    modelViewer.currentTime = CurrentTime;
    
    // Create keyframes by choosing start and end points for when to start camera movement
    if(CurrentTime >= 0 && CurrentTime < 1) {
        
       var StartCamMovement = 0;
       var EndCamMovement = 1;
       var TotalAnimationDuration= EndCamMovement - StartCamMovement;
        
       var InitCamPos = 90; // initial camera position
       var FinalCamPos = 0; // final camera position
       var DeltaCamPos = FinalCamPos - InitCamPos; // total change in Camera position
        
       var Rotation = StartCamMovement + ((CurrentTime / TotalAnimationDuration) * DeltaCamPos); 
        
       currentrotation = Rotation; // This global variable is necessary since it does not seem simple to extract the current rotation from the modelViewer.cameraOrbit string
        
       modelViewer.cameraOrbit = Rotation +'deg, ' + Rotation + 'deg, 5m';
    }