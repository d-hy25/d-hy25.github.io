let currentIndex = 0;
const slider = document.querySelector('#trd > .slider-one > ul');
const left = document.querySelector(".chevron > .left");
const right = document.querySelector(".chevron > .right");
const totalImages = 6;

// 한 번에 3개씩 이동
const slidesToShow = 3;

// 슬라이드의 폭 계산 (이미지 3개씩 보이도록 설정)
const slideWidth = 300 / slidesToShow;

left.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - slidesToShow;
    }
    });
    
    // 다음 버튼 클릭 시
    right.addEventListener('click', () => {
    if (currentIndex < totalImages - slidesToShow) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    });




























// function updateSlider() {
//     // 슬라이드를 이동시킬 오프셋 계산
//     const offset = -currentIndex * slideWidth;
//     slider.style.transform = `translateX(${offset}%)`;
// }

//     left.addEventListener('click', () => {
//     if (currentIndex < totalImages / slidesToShow - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0; // 마지막 3개 뒤로 넘어가면 처음으로
//     }
//     updateSlider();
// });

//     right.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         currentIndex = Math.floor(totalImages / slidesToShow) - 1; // 첫 번째로 돌아가면 마지막 3개로
//     }
//     updateSlider();
// });

