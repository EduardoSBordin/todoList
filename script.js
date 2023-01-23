// Btns
let btnTheme = document.querySelector('#btnTheme');
btnTheme.disabled = true;
let btnAddNewTask = document.querySelector('#btnAddNewTask');
let btnDeleteAll = document.querySelector('#btnDeleteAll');
//-----
let inf = document.querySelector('#inf');
let newTaskBox = document.querySelector('#newTask');

let newBtnTaskCreated = document.querySelector('#newBtnTaskCreated');
let taskCreated = document.querySelector('#taskCreated');
let btnEditAdd = document.querySelector('#btnEditAdd');
let btnEditFinish = document.querySelector('#btnEditFinish');

let textTask = document.querySelector('#textTask');

let counter = 0;
console.log(typeof counter);

btnAddNewTask.onclick = () => {

    if(newTaskBox.value === ''){
        //alert('Type a text');
        // let textTasks = document.createElement('p');
        // textTasks.innerHTML = "Type a text";
        // textTask.append(textTasks);
    }else{

    counter++;
    console.log(counter);
    if(counter === 3){
        btnAddNewTask.disabled = true;
    }

    creatorBtns();
    newTaskBox.value = '';
    }
}

function creatorBtns(){

    let createTaskText = document.createElement('input');
    createTaskText.setAttribute('id', 'taskCreated');
    createTaskText.value += newTaskBox.value;
    inf.appendChild(createTaskText);
    createTaskText.disabled = true;

    let btnEditAdd = document.createElement('button');
    btnEditAdd.id = 'btnEditAdd';
    btnEditAdd.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    inf.appendChild(btnEditAdd);
    btnEditAdd.onclick = () => {

        createTaskText.style.background = "rgb(180, 180, 180)";
        createTaskText.disabled = false;
    }

    let btnEditFinish = document.createElement('button');
    btnEditFinish.id = 'btnEditFinish';
    btnEditFinish.innerHTML = '<i class="fa-solid fa-check"></i>';
    inf.appendChild(btnEditFinish);
    btnEditFinish.onclick = () => {

        createTaskText.style.background = "rgb(211, 211, 211)";
        createTaskText.disabled = true;
    }

    let createTaskBtn = document.createElement('button');
    createTaskBtn.id = 'newBtnTaskCreated';
    createTaskBtn.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
    inf.appendChild(createTaskBtn);
    createTaskBtn.onclick = () => {
        counter--;
        console.log(counter);
        if(counter < 3){
           btnAddNewTask.disabled = false;
        }
        createTaskText.remove();
        createTaskBtn.remove();
        btnEditFinish.remove();
        btnEditAdd.remove();
    }

}

btnDeleteAll.onclick = () => {

    location.reload();

}
btnTheme.onclick = () => {

   let getBody = document.querySelector('#body');
   let getContainer = document.querySelector('#container');
   
   getBody.classList.toggle('active');
   getContainer.classList.toggle('active');
}