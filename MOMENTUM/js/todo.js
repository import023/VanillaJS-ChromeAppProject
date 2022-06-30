const toDoForm = document.getElementById("todo-form")
const toDoList = document.getElementById("todo-list")
const toDoInput = toDoForm.querySelector("#todo-form input")
const TODOS_KEY = "todos"
let toDos = []

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
    console.log(event)
    const li = (event.target.parentElement)
    //toDos.remove(id : li.id)
    toDos.pop(`id:${li.id}`)
    localStorage.clear()
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
    li.remove()
    //localStorage.removeItem(li.innerText)
}

function paintToDo(newToDoObj){
    const liCreator = document.createElement("li");
    const spanCreator = document.createElement("span");
    const buttonCreator = document.createElement("button")
    liCreator.appendChild(spanCreator)
    liCreator.appendChild(buttonCreator)
    spanCreator.innerText = newToDoObj.text
    buttonCreator.innerText = "❌"
    buttonCreator.addEventListener("click",deleteToDo)
    liCreator.id = newToDoObj.id
    toDoList.appendChild(liCreator)
    // liCreator.innerText(BindNewToDo)
    
}

function handleToDoSubmit(event){
    event.preventDefault()   
    const newToDo = toDoInput.value
    toDoInput.value = ""
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
    }
    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

//instead of "(item) => toDos.push(item))"
// function sayHello(item){
//     toDos.push(item)
// }

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos != null){
    const parsedToDo = JSON.parse(savedToDos);
    parsedToDo.forEach((item) => toDos.push(item));
    toDos = parsedToDo;
    parsedToDo.forEach(paintToDo)//parsedToDo.forEach((item) => paintToDo(item))//instead of "parsedToDo.forEach(toDos"

}
