const mode_Key = 'dark';
const modeBtn = document.querySelector('.mode');

const deleteMode =()=>{
  localStorage.removeItem(mode_Key);
}
const saveMode = ()=>{
  localStorage.setItem(mode_Key,'dark_mode');
}
const loadMode = ()=>{
  return localStorage.getItem(mode_Key);
}
modeBtn.addEventListener("click",()=>{
  document.querySelector('.quote').classList.toggle('dark_mode');
  document.querySelector('.memowrap').classList.toggle('dark_mode');
  document.querySelector('.todowrap').classList.toggle('dark_mode');
  document.body.classList.toggle('dark_mode');
  //현재 상태를 로컬스토리지에 저장
  if(document.querySelector('.quote').classList.contains('dark_mode'));
  if(document.querySelector('.memowrap').classList.contains('dark_mode'));
  if(document.querySelector('.todowrap').classList.contains('dark_mode'));
  if(document.body.classList.contains('dark_mode')){
    saveMode();
  }else{
    //없으면 라이트
    deleteMode();
  }
});
const mode_init = ()=>{
  let mode = loadMode(); //값,null
  if(mode){
    //입력된 모드가 있음: dark
    document.querySelector('.quote').classList.add('dark_mode');
    document.querySelector('.memowrap').classList.add('dark_mode');
    document.querySelector('.todowrap').classList.add('dark_mode');
    document.body.classList.add('dark_mode');
  }else{
    //입력된 모드가 없음: light
    document.querySelector('.quote').classList.remove('dark_mode');
    document.querySelector('.memowrap').classList.remove('dark_mode');
    document.querySelector('.todowrap').classList.remove('dark_mode');
    document.body.classList.remove('dark_mode');
  }
}
mode_init();