 $(document).ready(function () {
 	////////////////////////////////
 	let allContents = $(".panel");
 	//alert(allContents.length);
	 let allTabs = $(".tab");

	 $('#title1').addClass('currentTab');
	 $('#content1').show();
	 
 	$(".tab").click(function () {

 		let i;
 		for (i = 0; i < allContents.length; i++) {
 			//alert(allContents[i]);
			$(allTabs[i]).removeClass("currentTab");
 			$(allContents[i]).slideUp(700);
 		}


		let whoClicked = $(this).attr('data');
		//alert(whoClicked);
 		//alert($("#"+whoClicked).css('display'));
 		if ($('#' + whoClicked).css('display') === 'none') {
			$(this).addClass("currentTab");
 			$("#" + whoClicked).slideDown(700);
 		} else {
 			$("#" + whoClicked).slideup(700);
 		}
 	}); //end function

 }); //end doc ready
