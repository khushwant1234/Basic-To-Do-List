let btn1=document.querySelector('#addbtn');
let btn2=document.querySelector('#delbtn');
let inp1=document.querySelector("#add");
let inp2=document.querySelector("#delete");
let ul=document.querySelector("ul");
btn1.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp1.value;
    ul.appendChild(item);
    item.id=inp1.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    inp1.value='';
});
btn2.addEventListener("click",function(){
    let item1=document.querySelector(`#${inp2.value}`);
    try{
        item1.remove();
    }catch{
        alert("Error: Tasks with spaces cannot be deleted using this button");
    };
    
    inp2.value='';
});

ul.addEventListener("click",function(evnt){
    if(evnt.target.nodeName=="BUTTON"){let delbtnn=evnt.target;
    let par = delbtnn.parentElement;
    par.remove();
    console.log("Button clicked");
}});