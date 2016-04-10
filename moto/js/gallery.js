$(document).ready(function() {


$('#small a').click(function(event){

	event.preventDefault();
var res = $(this).attr('href');
var res2 = $('#big img').attr('src');
if(res!=res2)
	{
		$('#big img').hide();
		$('#big img').attr('src',$(this).attr('href'));
		$('#big img').load(function(){
				$('#big img').fadeIn(1500);
		})
	}

});

$('#small a').click(function(){

	$('#small a').css({
		'opacity':'1',
	})
	
	$(this).css({
		'opacity':'0.6',
		'transition':'1s',
	});

});


});