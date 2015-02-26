/*背景大图*/
$(window).load(function() {
    $("#background").fullBg();
});
/*下拉box*/
$(document).ready(function(){
	var a =$(".box");
	    a.show();
	$(".boxdown").click(function(){
		if(a.is(':visible')){
			 a.slideUp('_default');
			$(this).addClass('up');
		}else{
			a.slideDown('_default').show();	
			 $(this).removeClass('up');
	}			
	});
});

$(document).ready(function(){
	var a =$(".box_c");
	    a.hide();
		a.slideDown('_default').show();	
	$(".boxdown_c").click(function(){
		if(a.is(':visible')){
			 a.slideUp('_default');
			 $(this).removeClass('up_c');
		}else{
			a.slideDown('_default').show();	
			$(this).addClass('up_c');
	}			
	});
});


/*导航*/
<!--鼠标导航出现菜品-->
$(function() {
                var d=1000;
                $('#menu span').each(function(){
                    $(this).stop().animate({
                        'top':'18px'
                    },d+=200);
                });

                $('#menu > li').hover(
                function () {
                    var $this = $(this);
                    $('a',$this).addClass('hover');
                    $('span',$this).stop().animate({'top':'60px'},300).css({'zIndex':'10'});
                },
                function () {
                    var $this = $(this);
                    $('a',$this).removeClass('hover');
                    $('span',$this).stop().animate({'top':'18px'},800).css({'zIndex':'-1'});
                }
            );
            });

/*底部隐藏*/
 function toggle_visibility(id) {
             var e = document.getElementById(id);
             if(e.style.display == 'block'){
                e.style.display = 'none';
                $('#togg').text('显示FOOTER');
            }
             else {
                e.style.display = 'block';
                $('#togg').text('隐藏FOOTER');
            }
          }

/*二维码*/
$(document).ready(function(e) {
	$('#code').hover(function(){
		$(this).attr('id','code_hover');
		$('#code_img').show();
	},function(){
		$(this).attr('id','code');
		$('#code_img').hide();
	})

});

