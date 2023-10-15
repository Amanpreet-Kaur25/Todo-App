const Text=document.getElementById("text");
const List=document.getElementById("list");

function AddTask(){
    if(Text.value===''){
        alert("Write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = Text.value;
        List.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    Text.value = " ";
    savedata();
}

List.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    }, false);

function savedata(){
    localStorage.setItem("data" , list.innerHTML);
}

function showList(){
    list.innerHTML = localStorage.getItem("data");

}
showList();