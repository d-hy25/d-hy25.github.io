const clock = document.querySelector('.three > .three-oimg > .trd-txt > .time-txt > .time > .clock');

const getClock =()=>{
  //시계설정
  const today = new Date(); //현재시간
  ///시,분,초 가져오기
  //class = clock 인 객체의 텍스트를 변경
  //시 분 초는 두자리씩 padStart
  const hh = String(today.getHours()).padStart(2,"0"); 
  const mm = String(today.getMinutes()).padStart(2,"0"); 
  const ss = String(today.getSeconds()).padStart(2,"0"); 
  // clock.textContent = `${hh}:${mm}`;
  let date = new Date();
  let hours = date.getHours();
  if(hours<12){
    clock.textContent = `${hh}:${mm}:${ss}`;
  } else {
    clock.textContent = `${hh}:${mm}:${ss}`;
  }
}
setInterval(getClock, 1000);
getClock();