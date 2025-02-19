const designBtn = document.querySelector(".trd-menu > li:nth-of-type(1)"); 
const animationBtn = document.querySelector(".trd-menu > li:nth-of-type(2)");
const javaBtn = document.querySelector(".trd-menu > li:nth-of-type(3)");
const chevron = document.querySelector("#trd > .chevron");

const design = document.querySelector(".slide-one");
const animation = document.querySelector(".slide-two");
const java = document.querySelector(".slide-trd");

const showScreen = (screen) => {
  // 모든 화면 숨기기
  design.style.display = 'none';
  animation.style.display = 'none';
  java.style.display = 'none';

  // 조건문으로 선택된 화면만 보이게 하기
  if (screen === "design") {
    design.style.display = 'block';
    chevron.style.display = 'block';
  } else if (screen === "animation") {
    animation.style.display = 'block';
    chevron.style.display = 'none';
  } else if (screen === "java") {
    java.style.display = 'block';
    chevron.style.display = 'none';
  }
};

// 버튼 클릭 이벤트 처리
designBtn.addEventListener('click', () => {
  showScreen("design");
});
animationBtn.addEventListener('click', () => {
  showScreen("animation");
});
javaBtn.addEventListener('click', () => {
  showScreen("java");
});

// 기본적으로 첫 번째 화면 보이기 (디자인 화면)
showScreen("design");