$(function(){
    $("h1").css({ marginLeft: "-100px", opacity: 0 }); //조작
    $("header > nav > ul > li").css({ marginTop: "-100px", opacity: 0 }); //조작
    $("h1").animate({ marginLeft: 70, opacity: 1 },function(){
        $("header > nav > ul > li:eq(0)").animate({ marginTop: 0, opacity:1 },300);
        $("header > nav > ul > li:eq(1)").animate({ marginTop: 0, opacity:1 },400);
        $("header > nav > ul > li:eq(2)").animate({ marginTop: 0, opacity:1 },500);
        $("header > nav > ul > li:eq(3)").animate({ marginTop: 0, opacity:1 },600);
    });

    $("header > nav > ul > li").on("click",function(){
        // index의 영어 사전적 의미는? 목차, 색인(책의 쪽 번호)
        // 이벤트를 발생시킨 대상태그의 순번을 가져와서 섹션의 높이값의 배수로 연산 즉, 이동 배수를 생성 적용
        var b = $(this).index(); //이벤트를 발생시킨 대상 태그의 순번 가져오기: 0,1,2,3,4,5,6
        $("html").stop().animate({ scrollTop: 700 * b  });
    });


    //UI UX 갤러리 슬라이드

    $(".works2 > div:eq(1) > button:eq(0)").on("click",function(){   
        $(".ps1 li:eq(3),.ps1 li:eq(4),.ps1 li:eq(5) ").prependTo(".ps1");
        $(".ps1").css({ marginLeft:"-100%" });
        $(".ps1").stop().animate({marginLeft: 0});
    });

    $(".works2 > div:eq(1) > button:eq(1)").on("click",function(){
         $(".ps1").stop().animate({ marginLeft: "-100%" },function(){
            $(".ps1 li:eq(0),.ps1 li:eq(1),.ps1 li:eq(2) ").appendTo(".ps1");
            $(".ps1").css({ marginLeft:0 });
        });
    });



    // Animation 갤러리 슬라이드
    $(".works2 > div:eq(2) > button:eq(0)").on("click",function(){     
        $(".ps2 li:last").prependTo(".ps2");
            $(".ps2").css({marginLeft:"-33%"});
            $(".ps2").stop().animate({marginLeft:0});
    });

    $(".works2 > div:eq(2) > button:eq(1)").on("click",function(){
         $(".ps2").stop().animate({ marginLeft: "-33%" },function(){
            $(".ps2 li:first").appendTo(".ps2");
            $(".ps2").css({ marginLeft:0 });
        });
    });

});
