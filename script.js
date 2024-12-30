let bt = document.querySelector("#btn");
let inp = document.querySelector("#inp");
let bx2 = document.querySelector("#box2");
c = 0;
newId = "check";   
function click(){
    // console.log(inp.value.length)
    if (inp.value != inp.value.length * " "){
        if (inp.value != ""){
            newTask = document.createElement('div');            // Created a New div Element to add checkbox, its label and delete button
            newTask.classList.add("wholeTasks")
            c+=1;
            nameID = newId+c;
            tasks = document.createElement('span');             // checkbox and label will be inside span element
            inpCheck = document.createElement("input");
            inpCheck.type = "checkbox";
            inpCheck.id = nameID;
            taskName = document.createElement('label');
            taskName.innerHTML=inp.value;
            taskName.htmlFor = nameID;
            bt2 = document.createElement("button");
            bt2.innerHTML = "Delete";
            bt2.classList.add("delTask");



            tasks.appendChild(inpCheck);
            tasks.appendChild(taskName);
            newTask.appendChild(tasks);
            newTask.appendChild(bt2)
            bt2.id = `del${c}`;
            bx2.appendChild(newTask);
            document.createElement
            inp.value = null;
        }
    }
} 
bt.onclick = click;
inp.addEventListener("keypress",(e)=>{
    if (e.key == "Enter"){
        click();
    }
})
bx2.addEventListener("click", (e)=>{
    if (e.target.nodeName == "BUTTON"){
        let listname = e.target.parentElement;
        listname.remove();
    }
});