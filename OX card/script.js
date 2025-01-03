const updatResult = (ele,txt,bg)=>{
    ele.textContent=txt;
    ele.style.backgroundColor=bg; 
}

const checkAsswer = (answer)=>{
    const result = document.querySelector("p");
    if(answer==true){
        updatResult(result,"정답입니다","green");
    }else{
        updatResult(result,"틀렸습니다","black")
    }

}

document.addEventListener("DOMContentLoaded",()=>{
    const oBtn = document.querySelector(".o");
    const XBtn = document.querySelector(".X");
    oBtn.addEventListener("click",()=>{checkAsswer(true)});
    XBtn.addEventListener("click",()=>{checkAsswer(false)});
});