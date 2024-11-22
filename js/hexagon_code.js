// JavaScript Document
$(document).ready(function () {
	var Yrotate = 0;

	///left arrow click
	$('#left_arrow').click(function () {
		Yrotate += 60;
		doMove();
	});

	//right arrow click
	$('#right_arrow').click(function () {
		Yrotate -= 60;
		doMove();
	});



	//detect keyboard left- right arrow clicks
	
	
	document.onkeydown = function (event) {
    switch (event.key) {
       
        case 'ArrowLeft':
         Yrotate -= 60;
					event.preventDefault();
            break;
			
        case 'ArrowRight':
           Yrotate += 60;
			event.preventDefault();
			break;
    }
		doMove();
}
	

	///detect swipe

	$('#parent_of_myhex').on("swipeleft", swipeLeftHandler);

	function swipeLeftHandler(event) {
		Yrotate -= 60;
		doMove();
	}

	$('#parent_of_myhex').on("swiperight", swipeRightHandler);

	function swipeRightHandler(event) {
		Yrotate += 60;
		doMove();
	}




	//the func to actually move	
	function doMove() {
		$('#myhex').css("transform", "rotateY(" + Yrotate + "deg) ");
	}

	

	
	

}); ///end document ready
