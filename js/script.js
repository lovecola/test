//�������¼�
$(function(){
    //���ڻ��浼��ˢ��ҳ�棬��������ҳ����
    setTimeout(function(){
        $(document).scrollTop(0);
    },100);
    var index=0;
    var Time=new Date();
    //�������ĵ���¼�
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

    //���Ĺ����¼�
    $(document).mousewheel(function(){
        //������������������BUG
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
    //ҳ�����ź��bug����
    $(window).resize(function(){
        $(document).scrollTop(index*$(window).height())
    });
});
