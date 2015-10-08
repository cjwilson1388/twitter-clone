
$(document).ready(function(){
	$('#tweet-controls').css({
		display: 'none'
	});
	$('#mainCompose').click(function() {
		$('#tweet-controls').css({
			display: 'inherit'
		})
		$('#mainCompose').css("height", '6em')
	});
	$("#mainCompose").keyup(function(event) {
		tc=$(this);
		if(tc.val().length >= 140){
			tc.val( tc.val().substr(0, 140) );
		} else {
			$('#char-count').text(140 - tc.val().length);
			}
		});

});








/*
$('#mainCompose').keyup(function(event) {
	tc=$(this);
	if(tc.val().length >= 140){
		tc.val( tc.val().substr(0, 140) );
	} else {
		$('#char-count').text(140 - tc.val().length);
		}
	}
});
*/

//.text();