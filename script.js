const leftPanel = document.querySelector('#leftPanel');
const rightPanel = document.querySelector('#RightPanel');
const taskForm = document.querySelector('#taskForm');
const taskList = document.querySelector('#taskList');



taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(taskForm);
    console.log(formData.entries());
})