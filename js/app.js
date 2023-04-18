const addTaskString = document.getElementById('add-task');
const addTaskBtn = document.getElementById('add-btn');
const doneCheck = document.getElementById('done');
const deleteX = document.getElementById('del-btn');
const deleteTask = document.getElementById('del-done-btn');
const deleteAll = document.getElementById('del-all-btn');
const USER_ID = 141;
const TASK_ID = 103;


//получение всех задач пользователя
const showTasks = {
  "id": null,
  "name": "Название задачи",
  "isDone": 0,
  "created_at": "2021-03-22 12:14:33",
  "updated_at": "2021-03-22 12:14:33",
  "user_id": USER_ID,
}

fetch("http://24api.ru/rest-todo/items-by-id?id=141", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then(data => data.json())
    .then(data => console.log(data))


// Создание задачи
addTaskBtn.addEventListener('click', function (event) {
  event.preventDefault()

  const task =  {
    "id": null,
    "name": `${addTaskString.value}`,
    "isDone": 1,
    "user_id": USER_ID,
  }

  if (addTaskString.value.length == 0){
    addTaskString.value = 'please add some task';
  }
  else {
    fetch("http://24api.ru/rest-todo", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then(data => data.json())
    .then(data => {
        console.log(data)
        createNewTask(data)
    })
    }
    addTaskString.value = ''
})

//получение инфо о задаче
// const taskInfo =  {
//   "id": null,
//   "name": `${addTaskString.value}`,
//   "isDone": 1,
//   "user_id": user.id
// }

// fetch("http://24api.ru/rest-todo/26", {
//     method: "GET",
//     headers: {
//         'Content-Type': 'application/json'
//     }
//     // body: JSON.stringify(task)
// })
    // .then(data => console.log(data))
    // .then(data => data.json())
    // .then(data => id = data.id)


// Удаление одной задачи 
// Task ID всегда разный, какой писать?? 
window.addEventListener("DOMContentLoaded", (event) => {
  
  if (deleteX) {

    deleteX.addEventListener('click', function (event){  
      const task =  {
        "id": TASK_ID,
        "name": `${addTaskString.value}`,
        "isDone": 1,
        "user_id": USER_ID,
      }
    
      fetch("http://24api.ru/rest-todo/103", {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
        })
        
        .then(data => data.json())
        .then(data => {
            console.log(data)
          })
          createNewTask.remove()
    })
  } // if END


}) //window.addEventListener END




// Удаление одной задачи

// fetch("http://24api.ru/rest-todo/", {
//     method: "DELETE",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(task)
// })
//     .then(data => console.log(data))


// Отрисовка задачи
function createNewTask(objectTask){
  // создаем лейбл (обернуть инпут)
  const newTask = document.createElement('label');
  // инпут чекбокс (сделано/не сделано)
  const isDone = document.createElement('input');
  isDone.type = 'checkbox';
  isDone.className = 'done';
  // спан (в нем текст задания)
  const textTask = document.createElement('span');
  textTask.innerHTML = objectTask.name;
  // кнопка для удаления
  const deleteX = document.createElement('button');
  deleteX.innerHTML = '❌';
  deleteX.className = 'del-btn';
  // удаление задания по клику
  // deleteX.addEventListener('click', function (event) {
  //   taskW.remove();
  // })
  // обертка для одной задачи
  const taskW = document.createElement('div');
  taskW.className = 'task';
  // контейнер для всех задач
  const taskC = document.getElementById('task-container'); 
  // что куда вкладываем: 
  newTask.append(isDone, textTask)
  taskW.append(newTask, deleteX)
  taskC.append(taskW)
}


  

