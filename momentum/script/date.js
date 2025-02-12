const day = document.querySelector('.date');

//현재 날짜와 시간을 가져오기
const currentDate = new Date();

//날짜와 시간을 문자열로 포맷팅
const formattedDate =`${currentDate.getFullYear()}-${String(currentDate.getMonth()+1).padStart(2,"0")
}-${String(currentDate.getDate()).padStart(2,"0")}`;

const date_init=()=>{
//포맷팅된 날짜와 시간 출력
day.textContent = `${formattedDate}`;
}
date_init();