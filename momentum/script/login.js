const loginForm = document.querySelector("#login");
const Input = loginForm.querySelector('input');
const P = loginForm.querySelector("span");
const LoginKey = "logname";
const saveloginName = (strinput)=>{
  localStorage.setItem(LoginKey,strinput);
}
const loadloginName = ()=>{
  return localStorage.getItem(LoginKey);
}
const printloginName = ( strName )=>{
  P.textContent = `안녕하세요. ${strName}`;
  Input.classList.add("hidden");
}
const handlerSubmit = (event)=>{
  event.preventDefault(); //기능 초기화
  // console.log(Input.value);
  printloginName(Input.value);
  saveloginName(Input.value);
  Input.value = null;
}
const init = ()=>{
  //처음 실행되는 함수
  //저장된 데이터 확인
  let loginname = loadloginName();
  // console.log(loginname);
  if(loginname){
    //화면에 출력
    printloginName( loginname);
  } else {
    loginForm.addEventListener("submit" , handlerSubmit);
  }
}
window.onload =  init; 