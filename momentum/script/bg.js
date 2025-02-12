const bgimgs = ['village-bg.jpg','clouds-bg.jpg','chapel-bg.jpg',
'orange-flowers-bg.jpg','tree-bg.jpg'];
const main = document.querySelector('main');

//백그라운드 이미지 변경 함수
const randomBG = ()=>{
  const idx = Math.floor(Math.random() * bgimgs.length);
  document.querySelector('main').style.backgroundImage = `url(./image/${bgimgs[idx]})`;
  document.querySelector('main').style.backgroundSize = 'cover';
}
randomBG();