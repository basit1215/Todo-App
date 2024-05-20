




function addToDo() {

var toDoInp = document.getElementById("todo-inp");
var toDoTask = document.getElementById("todo-task");

    if (!toDoInp.value) {
        alert("Please enter any Task...");
        return;
    }
    var addTodoTask = document.createElement('div');
    var todoText = document.createElement('li');
    todoText.innerHTML = toDoInp.value;
    addTodoTask.append(todoText);

    addTodoTask.className = "todo-task";

    var editBton = document.createElement('button');
    var delBton = document.createElement('button');

    editBton.innerHTML = "Edit";
    editBton.setAttribute("onclick", "editTodo(this)");
    addTodoTask.append(editBton);

    delBton.innerHTML = "Delete";
    delBton.setAttribute("onclick", "deleteTodo(this)");
    addTodoTask.append(delBton);

    toDoTask.append(addTodoTask);
    toDoInp.value = ""
}

function deleteTodo (delBton) {
    delBton.parentElement.remove();
}

function editTodo (editBtn) {
    
    var textEle = editBtn.previousElementSibling;

    var editInput = document.createElement('input');
    editInput.setAttribute("type","text");
    editInput.value = textEle.innerText;

    textEle.className+="hide"

    editBtn.parentElement.prepend(editInput);

}