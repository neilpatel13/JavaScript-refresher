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

    todolist.forEach((todoObject, index) =>  {

        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
        htmltodo += html
    });

    document.querySelector('.js-todo-list')
        .innerHTML = htmltodo;
    
    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todolist.splice(index, 1);
                rendertodolist();
            });
        });
}


document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });

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

