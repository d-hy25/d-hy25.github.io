$(function(){
    //1) 전역메뉴 슬라이드 =======================================
    /*
        $("nav>ul>li").append("<div class='test'></div>");
        $(".test").css({

        position: "absolute", width: "150px", height: "200px",
        background: "linear-gradient( rgba(255,255,255,0.2) 10% , #fff 30%)"

        });
    */
    $(".list-sub-menu").css({height:0, opacity:0});
    // $(".list-sub-menu li").css({ marginTop: -5 });

    $("nav>ul>li>a").on("mouseover",function(){
        $("nav ul ul").stop().animate({height:0, opacity:0},300);
        $("nav ul ul li").css({ marginTop: -5 });
        
        var count = $(this).next().children("li:last-child").index() + 1;
        // $(this).next().stop().animate({height: "370px" , opacity:1},300);
        $(this).next().stop().animate({height: count * 43 , opacity:1},300);
        $(this).next().children().animate({ marginTop: 0 });
    });
    $("nav > ul").on("mouseleave",function(){
        $(".list-sub-menu").stop().animate({height:"0px", opacity:0});
    });
    $(".list > a").on("mouseover",function(){
        $(this).css({background:"rgba(255,255,255,0.5)",color: "#222",
         borderRadius: "5px"},200);
    });
    $(".list").on("mouseleave",function(){
        $(this).children("a").css({background:"none",color: "#fff",
         borderRadius: "5px"});
    });
    
    //2) 향긋한 마음을 전하세요=============================================

    $(".two > .chevron > .right").on("click",function(){        
        $(".img-wrap").stop().animate({ marginLeft: "-10%" },function(){
            $(".img-wrap a:first-child").appendTo(".img-wrap");
            $(".img-wrap").css({ marginLeft:0 });
        });
    });

    $(".two > .chevron > .left").on("click",function(){
        $(".img-wrap a:last").prependTo(".img-wrap");
        $(".img-wrap").css({ marginLeft:"-10%" });
        $(".img-wrap").stop().animate({ marginLeft:0 });
    });

    //2) 매장소개===========================================================

    $(".slide_btn button:last").on("click",function(){
        $(".slide_inner").stop().animate({ marginLeft: "-33.3333%" },function(){
            $(".slide_inner a:first").appendTo(".slide_inner");
            $(".slide_inner").css({ marginLeft:0 });
        });
    });

    $(".slide_btn button:first").on("click",function(){
        $(".slide_inner a:last").prependTo(".slide_inner");
        $(".slide_inner").css({ marginLeft:"-33.3333%" });
        $(".slide_inner").stop().animate({ marginLeft:0 });
    });

});
