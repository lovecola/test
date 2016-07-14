//鼠标滚轮事件
$(function(){
    //由于缓存导致刷新页面，不返回首页问题
    setTimeout(function(){
        $(document).scrollTop(0);
    },100);
    var index=0;
    var Time=new Date();
    //导航栏的点击事件
    $("#nav ul li").click(function(){
        index=$(this).index();
        var section=$('.section-'+index);
        $(document.body).stop(true).animate({
            scrollTop:$(window).height()*index
        },800);
        $(".fade"+index).addClass('hover').siblings().removeClass('hover');
        if(index!=0){
            $("#nav").addClass("shrink");
        }else{
            $("#nav").removeClass("shrink");
        };
        if(index==1){
            $("#about .section-about").addClass('on');
        }else{
            $("#about .section-about").removeClass('on');
        }
        if(index==3){
            $("#skill .section-skill").addClass('on');
        }else{
            $("#skill .section-skill").removeClass('on');
        }
    });

    //鼠标的滚轮事件
    $(document).mousewheel(function(){
        //解决导航栏滚动过快的BUG
        if(new Date()-Time>1000){
            var dl=arguments[1];
            if(dl<0){
                index++;
                index%=5;
            }else{
                index--;
                if(index<0)index=4;
            }
            $(document.body).stop(true).animate({
                scrollTop:$(window).height()*index
            },800);
            $(".fade"+index).addClass('hover').siblings().removeClass('hover');
            if(index!=0){
                $("#nav").addClass("shrink");
            }else{
                $("#nav").removeClass("shrink");
            };
            if(index==1){
                $("#about .section-about").addClass('on');
            }else{
                $("#about .section-about").removeClass('on');
            }
            if(index==3){
                $("#skill .section-skill").addClass('on');
            }else{
                $("#skill .section-skill").removeClass('on');
            }
        }
    });
    //页面缩放后的bug问题
    $(window).resize(function(){
        $(document).scrollTop(index*$(window).height())
    });
});
