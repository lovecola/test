$(function(){
	 var wechat_developer_reload = function(){
		$('body').append('<input type="button" value="refresh" onclick="window.location.reload();"/>');	 
	} 
	//wechat_developer_reload();
	$('.footer li').hover(function(){
		$(this).addClass('selected');
	},function(){
		$(this).removeClass('selected');
	});
	
	$('.home-tj li .ico').click(function(){
		if($(this).hasClass('ico-selected')){
			$(this).removeClass('ico-selected');	
		}
		else{
			$(this).addClass('ico-selected');
		}
		return false;
	})
})

