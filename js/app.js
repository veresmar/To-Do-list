

fetch("http://24api.ru/rest-user", {
    "method": "GET"
})
    .then(data => data.json())
    .then(data => console.log(data))


const user = {
    "id": null,
    "username": "Maria",
    "email": "veres.maria.dev@gmail.com",
    "fname": "Veres",
    "sname": "JS",
    "lname": "JS",
    "password_hash": "12345678"
}

// POST

fetch("http://24api.ru/rest-user", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
    .then(data => console.log(data))

// создаем задание (const идет перед fetch)
const user1 =  {
  "id": null,
  "name": "купить кофе",
  "isDone": 1,
  "user_id": 5
}


fetch("http://24api.ru/rest-todo", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user1)
})
    .then(data => console.log(data))

    
const addCaseBtn = document.getElementById('add-case');
const doneCheck = document.getElementById('done');
const deleteX = document.getElementById('del-btn');
const deleteDone = document.getElementById('del-done-btn');
const deleteAll = document.getElementById('del-all-btn');

