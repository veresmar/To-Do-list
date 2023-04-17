const addTaskString = document.getElementById('add-task');
const addTaskBtn = document.getElementById('add-btn');
const doneCheck = document.getElementById('done');
const deleteX = document.getElementById('del-btn');
const deleteDone = document.getElementById('del-done-btn');
const deleteAll = document.getElementById('del-all-btn');
const USER_ID = 141

// получение инфо о пользователе (?)
// fetch("http://24api.ru/rest-user", {
//     "method": "GET"
// })


// Создание задачи
// (перенесла в 65 строку)


//получение задач пользователя
const showTasks = {
  "id": null,
  "name": "Название задачи",
  "isDone": 0,
  "created_at": "2021-03-22 12:14:33",
  "updated_at": "2021-03-22 12:14:33",
  "user_id": USER_ID,
}

fetch("http://24api.ru/rest-todo/141", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    },
    // body: JSON.stringify(showTasks)
})
    .then(data => data.json())
    .then(data => console.log(data))


// Удаление одной задачи

// fetch("http://24api.ru/rest-todo/", {
//     method: "DELETE",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(task)
// })
//     .then(data => console.log(data))




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

// Удаление задачи

// deleteX.addEventListener('click'()=> {
//   fetch("http://24api.ru/rest-todo/", {
//     method: "DELETE",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(task)
// })
//     .then(data => console.log(data))

// })


function createNewTask(objectTask){
  const newTask = document.createElement('input');
  newTask.type = 'checkbox';
  newTask.className = 'done';
  const newTaskText = document.createElement('label');
  newTaskText.innerText = objectTask.name;
  // newTaskText.className = 'done';
  const deleteX = document.createElement('button');
  deleteX.innerHTML = '❌';
  deleteX.className = 'del-btn';
  const taskWrapper = document.getElementById('task-container');
  taskWrapper.append(newTask, newTaskText, deleteX)
  // deleteX.addEventListener('click', function (event)
  // {newTaskText.remove})
}

