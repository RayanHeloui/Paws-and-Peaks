const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

const container = document.getElementById('blog-posts');

blogPosts.forEach(post => {
  const postDiv = document.createElement('div');
  postDiv.className = "blog-post";
  postDiv.innerHTML = `
    <h2>${post.title}</h2>
    <p class="date">${post.date}</p>
    <p>${post.content}</p>
    <hr />
  `;
  container.appendChild(postDiv);
});
