const leftPanel = document.querySelector('#leftPanel');
const rightPanel = document.querySelector('#RightPanel');
const taskForm = document.querySelector('#taskForm');
const taskList = document.querySelector('#taskList');
const taskInput = document.querySelector('#textArea');


taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let taskText = taskInput.value.trim();

    if(taskText === "") return;

    //add tasks as list
    const listItem = document.createElement('li');
    listItem.style.listStyleType = 'none';
    listItem.textContent = taskText;
    
    //create span for both of the buttons
    const spanForButtons = document.createElement('span');
    spanForButtons.id = 'btnsSpan';
    
    //create delete button
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.textContent = '⚔️';
    delBtn.classList.add('del-button');
    delBtn.addEventListener('click', () => {
        taskList.removeChild(listItem);
    })

    //mark done feature
    const doneBtn = document.createElement('button');
    doneBtn.type = 'button';
    doneBtn.classList.add('done-button');
    doneBtn.textContent = '✔️';
    doneBtn.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    })

    taskList.appendChild(listItem);
    spanForButtons.appendChild(delBtn);
    spanForButtons.appendChild(doneBtn);
    listItem.appendChild(spanForButtons);

    taskInput.value = '';
})


//submit on enter
taskForm.addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        e.preventDefault();
        taskForm.requestSubmit();
    }
})