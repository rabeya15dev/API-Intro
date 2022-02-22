function loadeData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
}


function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(data => displayUsers(data))
}

function loadpost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));
}
// loadpost();


function displayUsers(data) {
  const ul = document.getElementById('users');
  for (const user of data) {
    const li = document.createElement('li');
    li.innerText = `name:${user.name} 
    email:${user.email}`;
    ul.appendChild(li);
  }
}


