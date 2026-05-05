const todolist = ['make dinner', 'wash dishes'];
rendertodolist();

function rendertodolist() {

    let htmltodo = '';
    for (let i = 0; i < todolist.length; i++){
        const todo = todolist[i]
        const html = `<p>${todo}</p>`
        htmltodo += html
    }
    console.log(htmltodo);
    document.querySelector('.js-todo-list')
        .innerHTML = htmltodo;
}



function addTodo() {
    const inputElement = document.querySelector('.js-nameinput');

    const name = inputElement.value;

    todolist.push(name)
    console.log(todolist);

    inputElement.value = '';

    rendertodolist();
}

