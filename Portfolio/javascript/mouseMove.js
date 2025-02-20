document.addEventListener("mousemove",(event)=>{
  // console.log(event);
  const $elem = document.querySelector(".coord");
  const $box = document.querySelector(".box");
  $box.style.left = `${event.clientX}px`;
  $box.style.top = `${event.clientY}px`;
  //// 커스텀 커서가 마우스 이벤트를 방해하지 않도록 설정
  $box.style.pointerEvents = "none";
});
document.addEventListener('mouseup', () => {
  const $box = document.querySelector(".box");
  // 커서 색상 토글
  if ($box.style.backgroundColor === 'red') {
      $box.style.backgroundColor = 'blue';
      $box.style.transform = 'scale(1.2)'; // 클릭 시 커서 크기 확대
  } else {
      $box.style.backgroundColor = 'red';
      $box.style.transform = 'scale(1)'; // 원래 크기로 복귀
  }
  // 클릭 효과 후 원래 상태로 돌아가기
  setTimeout(() => {
      $box.style.backgroundColor = 'red';
      $box.style.transform = 'scale(1)';
  }, 200);
});
//마우스 오른쪽 버튼 클릭
document.addEventListener("contextmenu",(event)=>{
  //***마우스 오른쪽 눌렀을때 브라우저 안뜨게 하기***/
  event.preventDefault();

// //   const $elem = document.querySelector(".coord");
// //   // $elem.textContent = "마우스 오른쪽 버튼 클릭!!!";
// //   $elem.style.left = `${event.clientX}px`;
// //   $elem.style.top = `${event.clientY}px`;
// });
// //마우스 업 이벤트 처리
// document.addEventListener("mouseup",(event)=>{
//   // console.log(event);
//   if(event.button === 2){ //오른쪽 버튼
//     console.log("오른쪽 버튼 업");
//   const $elem = document.querySelector(".coord");
//   $elem.style.left = `0`;
//   $elem.style.top = `0`;
//   console.log("mouseup");
//   }
});