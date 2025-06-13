/*
var ag = setInterval("slide()",3000);

function slide(){
    $(".slide_list").stop().animate({ marginLeft: "-100%" },function(){
        $(".slide_list li:first").appendTo(".slide_list");
        $(".slide_list").css({ marginLeft:0 });
    });
};

function slide_re(){
    $(".slide_list li:last").prependTo(".slide_list");
    $(".slide_list").css({ marginLeft:"-100%" });
    $(".slide_list").stop().animate({ marginLeft: 0 });
};

$(function(){ 

    $(".slide_btn1 button:eq(0)").on("click",function(){
        clearInterval(ag);
        $(".slide_btn1 button:eq(2)").text("play");
        slide_re();
        
    });

    $(".slide_btn1 button:eq(1)").on("click",function(){
        slide(); 
        $(".slide_btn1 button:eq(2)").text("play");
        clearInterval(ag);
    });

    $(".slide_btn1 button:eq(2)").on("click",function(){
        if(  $(this).text() == "stop" ){
            clearInterval(ag); 
            $(this).text("play");

        }else{
            ag = setInterval("slide()",3000); 
            $(this).text("stop");    
            slide();

        };
    });

});
*/

//자동 슬라이드 + 사용자 조작
//1.설정된 시간에 맞춰 자동으로 슬라이드 되는 갤러리

var a = setInterval("slide()",3000);

//★정방향 슬라이드의 동작과 조작을 보관해둔 함수(셋인터벌, 다음 버튼에서 호출)
function slide(){
    /*
       === .slide(100%)
       ---------- .slide_list(marginLeft:0 )
       1  2  3  4
       ----------
       ===

       ▼ 3초 뒤에!! 동작

       === .slide(100%)
    ---------- .slide_list(marginLeft: -100% )
     1  2  3  4
    ----------
       ===

       ▼ 3초 뒤에!! 동작이 끝남과 동시에 콜백함수 조작  

       === .slide(100%)
    ----------      .slide_list(marginLeft: -100% ) 동작
     2  3  4  1     $(".slide_list li:first").appendTo(".slide_list"); 조작
    ----------
       ===  

       === .slide(100%)
       ----------      .slide_list(marginLeft: -100% ) 동작
        2  3  4  1     $(".slide_list").css({ marginLeft:0 }); 조작
        ----------
       ===  

    */
    $(".slide_list").stop().animate({ marginLeft: "-100%" },function(){ //animate 동작-중간 이동 과정 확인 가능.
        $(".slide_list li:first").appendTo(".slide_list"); //조작(중간과정 확인X)
        $(".slide_list").css({ marginLeft:0 }); //조작(중간과정 확인X)
    });
};

//★역방향 슬라이드의 동작과 조작을 보관해둔 함수(이전 버튼에서 호출)
function slide_re(){
    /*
       === .slide(100%)
       ---------- .slide_list(marginLeft:0 )
       1  2  3  4
       ----------
       ===

       ▼이전 버튼 클릭시

       === 
       ---------- 
       4  1  2  3  $(".slide_list li:last").prependTo(".slide_list"); //조작1
       ----------
       ===

       === 
    ---------- 
     4  1  2  3  $(".slide_list").css({ marginLeft: "-100%" }); //조작2
    ----------
       ===   

       === 
       ---------- 
        4  1  2  3  $(".slide_list").stop().animate({ marginLeft: 0 }); //동작3
       ----------
       === 
    */
    $(".slide_list li:last").prependTo(".slide_list");//조작1
    $(".slide_list").css({ marginLeft: "-100%" }); //조작2
    $(".slide_list").stop().animate({ marginLeft: 0 }); //동작3
}



//=====================================================================================
$(function(){ //ready()

    /*1.정지 재생(성공)
       (if)만약(조건식){
            자동 재생중(stop) 클릭시 정지가 되어야 하며
       }else{
            정지시(play) 다시 클릭하면 자동 재생이 되어야 합니다. 
       }      
    */
    /*
        (누)stop버튼 -    $(".slide_btn1 button:eq(2)").on();
        (언)클릭시   -    "click"

        (처)현재 설정된 setInterval 멈춤.

                1.변수처리 완료
                즉! 설정된 셋인터벌을 식별할 수 있도록 먼저 변수에 대입
                var a = setInterval("",);

                2.제거하고자 하는 셋인 터벌을 호명할 수있는 식별자로 호출
                clearInterval(a);


        ★setInterval("함수명",인터벌 시간); 
        ★clearInterval(설정된 셋인터벌 호출);
    */
    $(".slide_btn1 button:eq(2)").on("click",function(){ 
       
            if(  $(this).text()  == "stop"  ){ //버튼 클릭시 버튼의 텍스트가 stop과 같다면

                    clearInterval(a); //변수에 설정된 셋인터벌 클리어
                    $(this).text("play");//멈춤 버튼 텍스트 play로 변경


            }else{   //버튼 클릭시 버튼의 텍스트가 stop과 같지 않다면  


                    a = setInterval("slide()",3000); //변수에 제거된 셋인터벌을 다시 재할당.
                    $(this).text("stop");//재생 버튼 텍스트 stop로 변경

            };     
    });


    //2.다음(next)
    //다음 버튼 클릭시 3초를 기다리지 않고 즉시 다음 이미지를 보여주는 슬라이드 진행(자동 슬라이드 멈춤)
    $(".slide_btn1 button:eq(1)").on("click",function(){ 
        clearInterval(a); // 셋인터벌 제거
        $(".slide_btn1 button:eq(2)").text("play"); //정지 버튼의 텍스트는 play변경        
        slide(); //셋인터벌에 설정된 다음이미지 슬라이드 함수를 바로 호출
    });


    //3.이전(prev)
    $(".slide_btn1 button:eq(0)").on("click",function(){ 

        clearInterval(a); //셋인터벌 제거
        $(".slide_btn1 button:eq(2)").text("play");//정지,재생버튼의 텍스트를 play로 변경
        slide_re(); //이전 이미지 슬라이드 

    });



});//ready()







