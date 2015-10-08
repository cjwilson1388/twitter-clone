$(document).ready(function(){
	$('#tweet-controls').css({
		display: 'none'
	});
	$('#mainCompose').click(function() {
		$('#tweet-controls').css({
			display: 'inherit'
		})
		$('#mainCompose').css("height", '5em')
	});



});

/*
$( "#target" ).click(function() {
  alert( "Handler for .click() called." );
});
*/