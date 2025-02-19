let currentIndex = 0;
const images = document.querySelectorAll('#trd > .slide-one > ul > li > img');
console.log(images);
const slider = document.querySelector('#trd > .slider-one > ul');
const totalImages = images.length;

// 한 번에 3개씩 이동
const slidesToShow = 3;

// 슬라이드의 폭 계산 (이미지 3개씩 보이도록 설정)
const slideWidth = 300 / slidesToShow;

function updateSlider() {
    // 슬라이드를 이동시킬 오프셋 계산
    const offset = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${offset}%)`;
}

    document.querySelector('#trd > .chevron > p.right').addEventListener('click', () => {
    if (currentIndex < totalImages / slidesToShow - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // 마지막 3개 뒤로 넘어가면 처음으로
    }
    updateSlider();
});

document.querySelector('#trd > .chevron > p.left').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = Math.floor(totalImages / slidesToShow) - 1; // 첫 번째로 돌아가면 마지막 3개로
    }
    updateSlider();
});