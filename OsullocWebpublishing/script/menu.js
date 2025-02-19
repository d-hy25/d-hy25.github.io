$(
  function(){
    $('.main-menu').hover(
      //over
      function(){
        $('.sub-menu').stop().slideDown();
        $('.menu-bg').stop().slideDown();
      },
      //out
      function(){
        $('.sub-menu').stop().slideUp();
        $('.menu-bg').stop().slideUp();
      }
    );
    // 탭 아이템 숨기기
    $('.tab-item > ul').eq(1).hide();
    // 공지사항 탭 선택
    $('.tab-menu > li').click(
      function(){
        /* li 중에서 몇번째를 클릭했는지*/
        /* 공지사항은 0 갤러리는 1*/
        let idx = $(this).index();
        $('.tab-menu > li').removeClass('tab-on');
        $(this).addClass('tab-on');
        // 탭 아이템 보이기
        $('.tab-item > ul').hide().removeClass('tab-on');
        $('.tab-item > ul').eq(idx).show().addClass('tab-on');
      }
    );
        // 팝업창 띄우기
        $('.notice > li').click(
          function(){
            // $('.popup').show();
            $('.popup').fadeIn();
          }
        )
    
        $('.popup-card > button').click(
          function(){
            // $('.popup').hide();
            $('.popup').fadeOut();
          }
        );
  }
)