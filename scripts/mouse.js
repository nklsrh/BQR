var IsMouseDown = false, IsRightMouseDown = false, pMouseDown = false, pRMouseDown = false, mouseX = 1, mouseY = 1, rawX = 1, rawY = 1, pmouseX, pmouseY, IsJumpButtonDown = false, WasJumpButtonDown = false;

function setupMouse(){
        window.addEventListener('mousemove', MouseMove, false);
        window.addEventListener('mousedown', MouseDown, false);
        window.addEventListener('mouseup', MouseUp, false);
/*        // Capture right click
        $(document).rightClick( function(e) {
        });

        // Capture right mouse down
        $(document).rightMouseDown( function(e) {
                IsRightMouseDown = true;
                pRMouseDown = false;
        });

        // Capture right mouseup
        $(document).rightMouseUp( function(e) {
                IsRightMouseDown = false;
                pRMouseDown = true;
        });

        // Disable context menu on an element
        $(document).noContext();

        // Disable context menu on an element
        $(document).noContext();*/
}


function MouseDown(e) {  
        if(rawX < window.innerWidth * 0.3){
                IsJumpButtonDown = true;	
                WasJumpButtonDown = false;
        }
}  
function MouseUp(e) {
        if(rawX < window.innerWidth * 0.3){
                WasJumpButtonDown = true;
                IsJumpButtonDown = false;
        }	
}  

var timeMouseNotMoved = 0;

function MouseMove(e) {
        pmouseX = mouseX;
        pmouseY = mouseY;

        rawX = e.clientX;
        rawY = e.clientY;

        mouseX = ( e.clientX / window.innerWidth) * 2 - 1;
        mouseY = ( e.clientY / window.innerHeight) * 2 - 1;
}
 
