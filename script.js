let bt = document.querySelector("#btn");
let inp = document.querySelector("#inp");
let bx2 = document.querySelector("#box2");
c = 0;
newId = "check";   
function click(){
    // console.log(inp.value.length)
    if (inp.value != inp.value.length * " "){
        if (inp.value != ""){
            newTask = document.createElement('div');
            newTask.classList.add("elements")
            c+=1;
            nameID = newId+c;
            newTask.innerHTML = `
            <div class = "options"><input type='checkbox' id ='${nameID}' > <label for='${nameID}'> ${inp.value}</label></div>`

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