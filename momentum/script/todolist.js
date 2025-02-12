//리스트 쓰기
const todos_Key = "todos"
let todo_list = []; //{id,input.value}
const todoForm = document.querySelector("#todoForm");
const inputTodo = document.querySelector("#todoForm>input");
const btn = document.querySelector(".todolist>button");
const span = document.querySelector(".todolist>span");
const ulTodo = document.querySelector(".todolist");

const storageSave = ()=>{
  const strObj = JSON.stringify(todo_list);
  localStorage.setItem(todos_Key, strObj);
}
const storageload = ()=>{
  return localStorage.getItem(todos_Key);
}
const saveTodolist=(num,txt,flag)=>{
  const obj = {id:num,value:txt,check:flag };
  todo_list.push(obj);
  storageSave();
}
const handlerDelBtn=(event)=>{
  const delID = event.target.parentElement.id;
  // console.log(delID);
  todo_list = todo_list.filter((item)=>{
    return delID != item.id;
  });
  event.target.parentElement.remove();
  storageSave();
}
const updateCheckBox = (id,check)=>{
  // todo_list = todo_list.map((item)=>{
  //   if( item.id == id ){
  //     return{ ...item, check};
  //   }
  //   return item;
  // });
  /**
   * id를 비교하고, id가 같은 항목을 찾아서 체크여부를 변경
   */
  for(let i=0; i<todo_list.length; i++){
    if(todo_list[i].id == id){
      todo_list[i].check = check;
      break; //필요항목을 찾았으면 스탑
    }
  }
  storageSave();
}
const handlerCheck = (event)=>{
  //this와 같은 역할
  const chegeID = event.target.parentElement.id;
  const check = event.target.checked;
  updateCheckBox(chegeID,check);
}
const addTodoList =(id,value,check)=>{
  //li로 추가
  // console.log(id,value);
  const li = document.createElement("li");
  li.id = id;
  const input = document.createElement('input');
  input.type = "checkbox";
  input.checked = check;
  input.addEventListener("change",handlerCheck);
  const span = document.createElement("span");
  span.textContent = value;
  const btn = document.createElement("button");
  btn.innerHTML = "&times;";
  btn.className = "todo-btn";
  btn.addEventListener("click",handlerDelBtn);
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(btn);
  ulTodo.appendChild(li);
  //todo_list 배열 추가 및 로컬스토리지에 저장
  saveTodolist(id,value,check);
}
const handlertodoSubmit =(event)=>{
  event.preventDefault();
  let value = inputTodo.value;
  inputTodo.value = null;
  // console.log(value);
  addTodoList(Date.now(),value,false);
}
const todo_init=()=>{
  let loadTodos = storageload();
  if(loadTodos){
    const obj = JSON.parse(loadTodos);
    obj.forEach((item)=>{
      addTodoList(item.id, item.value, item.check);
    });
  }
  todoForm.addEventListener("submit",handlertodoSubmit);
}
todo_init();
