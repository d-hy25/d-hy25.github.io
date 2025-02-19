const nav = document.querySelector('.h-menu');
window.addEventListener("scroll",()=>{
  const scrollTop = document.documentElement.scrollTop;
  if( scrollTop > 50 ){
    nav.style.top = "0";
  }else{
    nav.style.top = "-70px";
  }
});
//scrolltop : 스크롤 현재위치값
//scrollheight : html 전체 글의 길이
//clientheight: 100vh 전체적인 스크롤 높이
//offsettop: 부모한테 얼만큼 떨어져있나
//getBoundingClientRect() : 뷰포트를 기본으로 하는 값
// 3/1지점을 알 수 있음 혹은 클라이언트 하이트를 3으로 나눈다