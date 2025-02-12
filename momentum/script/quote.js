//명언
const quotes = [
  {
    quote : "미래를 예측하는 가장 좋은 방법은 그것을 창조하는 것이다.",
    author : "- 피터 드러커"
  },
  {
    quote : "새로운 목표를 세우거나 꿈을 꾸기에 너무 늙은 나이는 없다.",
    author : "- C.S. 루이스"
  },
  {
    quote : "천 리 길도 한 걸음부터 시작된다",
    author : "- 노자"
  },
  {
    quote : "행복은 미리 만들어진 것이 아니다. 그것은 당신의 행동에서 나온다.",
    author : "- 달라이 라마"
  },
  {
    quote : "할 수 있다고 믿어라. 그러면 반은 이룬 것이다.",
    author : "- 시어도어 루즈벨트"
  },
  {
    quote : "당신의  시간은 제한되어 있으니 다른 사람의 인생을 사느라 낭비하지 마라.",
    author : "- 스티브 잡스"
  },
  {
    quote : "성공은 최종적이지 않고,실패는 치명적이지 않다. 중요한 것은 계속할 용기이다.",
    author : "- 윈스턴 처칠"
  },
  {
    quote : "당신의 행동이 변화를 만든다고 믿어라. 그것은 그렇다.",
    author : "- 윌리엄 제임스"
  }
];

//랜덤: Math.rendom(): 0~1의 값으로 출력 
// Math.random( )*10
// Math.random( )*100
const num = Math.floor(Math.random() * quotes.length);
console.log(num);
const today = quotes[num];
// console.log(today.quote);
const $p1 = document.querySelector('.quote > p:nth-of-type(2)');
$p1.textContent = today.quote;
const $p2 = document.querySelector('.quote > p:nth-of-type(3)');
$p2.textContent = today.author; // 생성:create / 추가:append

