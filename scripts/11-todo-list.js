const todolist = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
},
    {
        name: 'wash dishes',
        dueDate: '2022-12-26'
}];
rendertodolist();

function rendertodolist() {

    let htmltodo = '';
    for (let i = 0; i < todolist.length; i++){
        const todoObject = todolist[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                todolist.splice(${i}, 1);
                rendertodolist();
            " class="delete-todo-button">Delete</button>
        `;
        htmltodo += html
    }
    document.querySelector('.js-todo-list')
        .innerHTML = htmltodo;
}



function addTodo() {
    const inputElement = document.querySelector('.js-nameinput');

    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todolist.push({
        //name: name,
        //dueDate: dueDate
        name,
        dueDate
    });

    inputElement.value = '';

    rendertodolist();
}

