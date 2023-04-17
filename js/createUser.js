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
  .then(data => console.log(data))
  // .then(data => user.id = data.id)