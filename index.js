let todoTex = document.querySelector('#todoTex');
let addTodo = document.querySelector('#addTodo');
let todos = document.querySelector('.todos');
let del = document.querySelector('#del')
let todoss = document.getElementsByClassName('todos');



if (!JSON.parse(localStorage.getItem("todos"))) {
    localStorage.setItem("todos",JSON.stringify([]))
}
    var local_Storage = localStorage.getItem("todos");
    var local_Storage1 = JSON.parse(local_Storage);
    writter()

function writter(){
    local_Storage1.forEach(e => {
      todos.innerHTML += `<li><span>${e}</span><button id='del' onclick="dele(this)">x</button></li>`
  
    })
}
function dele(e) {
    var delElement = e.parentElement.querySelector('span').textContent;
    var abc=local_Storage1.find((e)=>{
        return local_Storage1.shift(e)
    })
    localStorage.setItem("todos", JSON.stringify(local_Storage1))
    todos.innerHTML ="";
    writter()
}
addTodo.addEventListener('click', (e) => {
    if(todoTex.value != ""){
        local_Storage1 = [...local_Storage1,todoTex.value]
        localStorage.setItem("todos", JSON.stringify(local_Storage1))
        todoTex.value = ''
        todos.innerHTML ="";
        writter()
        console.log(local_Storage1);
    }

})

