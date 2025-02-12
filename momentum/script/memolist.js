const memos_Key = "memos"
let memo_list = []; //{id,input.value}
const memoForm = document.querySelector("#memo");
const inputMemo = document.querySelector("#memo>input");
const Mbtn = document.querySelector(".memolist>button");
const Mspan = document.querySelector(".memolist>span");
const ulMemo = document.querySelector(".memolist");

const memostorageSave = ()=>{
  const memostrObj = JSON.stringify(memo_list);
  localStorage.setItem(memos_Key, memostrObj);
}
const memostorageload = ()=>{
  return localStorage.getItem(memos_Key);
}
const memosaveTodolist=(num,txt,flag)=>{
  const memoobj = {id:num,value:txt,check:flag };
  memo_list.push(memoobj);
  memostorageSave();
}
const memohandlerDelBtn=(event)=>{
  const delID = event.target.parentElement.id;
  // console.log(delID);
  memo_list = memo_list.filter((item)=>{
    return delID != item.id;
  });
  event.target.parentElement.remove();
  memostorageSave();
}
const memoupdateCheckBox = (id,check)=>{
  // memo_list = memo_list.map((item)=>{
  //   if( item.id == id ){
  //     return{ ...item, check};
  //   }
  //   return item;
  // });
  for(let i=0; i<memo_list.length; i++){
    if(memo_list[i].id == id){
      memo_list[i].check = check;
      break; //필요항목을 찾았으면 스탑
    }
  }
  memostorageSave();
}
const memohandlerCheck = (event)=>{
  //this와 같은 역할
  const chegeID = event.target.parentElement.id;
  const check = event.target.checked;
  memoupdateCheckBox(chegeID,check);
}
const memoaddTodoList =(id,value,check)=>{
  //li로 추가
  // console.log(id,value);
  const li = document.createElement("li");
  li.id = id;
  const input = document.createElement('input');
  input.type = "checkbox";
  input.checked = check;
  input.addEventListener("change",memohandlerCheck);
  const span = document.createElement("span");
  span.textContent = value;
  const btn = document.createElement("button");
  btn.innerHTML = "&times;";
  btn.className = "todo-btn";
  btn.addEventListener("click",memohandlerDelBtn);
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(btn);
  ulMemo.appendChild(li);
  //todo_list 배열 추가 및 로컬스토리지에 저장
  memosaveTodolist(id,value,check);
}
const handlermemoSubmit =(event)=>{
  event.preventDefault();
  let value = inputMemo.value;
  inputMemo.value = null;
  // console.log(value);
  memoaddTodoList(Date.now(),value,false);
}
const memo_init=()=>{
  let loadMemos = memostorageload();
  if(loadMemos){
    const obj = JSON.parse(loadMemos);
    obj.forEach((item)=>{
      memoaddTodoList(item.id, item.value, item.check);
    });
  }
  memoForm.addEventListener("submit",handlermemoSubmit);
}
memo_init();
