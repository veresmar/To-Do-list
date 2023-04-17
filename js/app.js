const addTaskString = document.getElementById('add-task');
const addTaskBtn = document.getElementById('add-btn');
const doneCheck = document.getElementById('done');
const deleteX = document.getElementById('del-btn');
const deleteDone = document.getElementById('del-done-btn');
const deleteAll = document.getElementById('del-all-btn');


// получение инфо о пользователе (?)
// fetch("http://24api.ru/rest-user", {
//     "method": "GET"
// })


// Создание пользователя
const user = {
    "id": null,
    "username": "Maria",
    "email": "veres.maria.dev@gmail.com",
    "fname": "Veres",
    "sname": "JS",
    "lname": "JS",
    "password_hash": "12345678"
}

fetch("http://24api.ru/rest-user", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
    .then(data => data.json())
    .then(data => user.id = data.id)


// Создание задачи
// (перенесла в 65 строку)

// fetch("http://24api.ru/rest-todo", {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(task)
// })
//     .then(data => console.log(data))
    // .then(data => createNewTask(data))


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

addTaskBtn.addEventListener('click', function f1(event) {
  event.preventDefault()

  const task =  {
    "id": null,
    "name": `${addTaskString.value}`,
    "isDone": 1,
    "user_id": user.id,
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
    .then(data => console.log(data))
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


// function createNewTask(){
//   const newTask = document.createElement('input');
//   newTask.type = 'checkbox';
//   const newTaskText = document.createElement('label');
//   newTaskText.value = addTaskString.value;
//   const deleteX = document.createElement('button')
//   deleteX.innerHTML = '❌';
// }