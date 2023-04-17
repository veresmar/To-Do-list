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
//     .then(data => data.json())
//     .then(data => console.log(data))

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
    .then(data => console.log(data))


// Создание задачи

const user1 =  {
  "id": null,
  "name": `${addTaskString.value}`,
  "isDone": 1,
  "user_id": 26
}

fetch("http://24api.ru/rest-todo", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user1)
})
    .then(data => console.log(data))
    // .then(data => createNewTask(data))


// Удаление одной задачи

// fetch("http://24api.ru/rest-todo/26", {
//     method: "DELETE",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user1)
// })
//     .then(data => console.log(data))




// Создание задачи

addTaskBtn.addEventListener('click', function f1() {
  if (addTaskString.value.length == 0){
    addTaskString.value = 'please add some task';
  }
  else {
    fetch("http://24api.ru/rest-todo", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user1)
})
    .then(data => console.log(data))
  }
})

//получение инфо о задаче
const task =  {
  "id": null,
  "name": `${addTaskString.value}`,
  "isDone": 1,
  "user_id": 26
}

fetch("http://24api.ru/rest-todo/26", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    }
    // body: JSON.stringify(user1)
})
    .then(data => console.log(data))


// Удаление задачи

// deleteX.addEventListener('click'()=> {
//   fetch("http://24api.ru/rest-todo/", {
//     method: "DELETE",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user1)
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