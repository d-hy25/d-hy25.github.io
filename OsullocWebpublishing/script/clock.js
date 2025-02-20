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
// 하루 남은 시간 계산
// // 현재 날짜와 시간을 가져옵니다.
// let currentDate = new Date();

// // 현재 시, 분, 초를 가져옵니다.
// let currentHours = currentDate.getHours();
// let currentMinutes = currentDate.getMinutes();
// let currentSeconds = currentDate.getSeconds();

// // 하루의 총 초 (24시간)
// const totalSecondsInDay = 24 * 60 * 60; // 86400초

// // 자정으로부터 현재까지 경과한 시간을 초로 계산합니다.
// let currentTimeInSeconds = (currentHours * 3600) + (currentMinutes * 60) + currentSeconds;

// // 남은 시간을 초로 계산합니다.
// let remainingTimeInSeconds = totalSecondsInDay - currentTimeInSeconds;

// // 남은 초를 시, 분, 초로 변환합니다.
// let remainingHours = Math.floor(remainingTimeInSeconds / 3600);
// let remainingMinutes = Math.floor((remainingTimeInSeconds % 3600) / 60);
// let remainingSeconds = remainingTimeInSeconds % 60;

// // 한 자리 수일 경우 앞에 0을 추가하여 포맷을 맞춥니다.
// remainingHours = remainingHours.toString().padStart(2, '0');
// remainingMinutes = remainingMinutes.toString().padStart(2, '0');
// remainingSeconds = remainingSeconds.toString().padStart(2, '0');

// // 결과를 출력합니다.
// console.log(`남은 시간: ${remainingHours}시간 ${remainingMinutes}분 ${remainingSeconds}초`);