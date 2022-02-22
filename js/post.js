function loadPost() {
  fetch('https://jsonplaceholder.typicode.com/pusts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

loadPost();



function displayPost(posts) {
  const postContainer = document.getElementById('posts');
  for (const post of posts) {
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `
    <h3> ${post.title}</h3>
    <p>${post.body}</p>
    `;
    postContainer.appendChild(div)
    console.log(post.title)
  }
}



function addPost() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'My New Post',
      body: "This is my post",
      userID: 3,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
}