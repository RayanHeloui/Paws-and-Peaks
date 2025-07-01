const blogForm = document.getElementById('blogForm');
const blogTitle = document.getElementById('blogTitle');
const blogContent = document.getElementById('blogContent');
const blogList = document.getElementById('blogPostsList');

function loadBlogPosts() {
  blogList.innerHTML = "";
  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  posts.forEach(post => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${post.title}</strong><br /><em>${post.date}</em><p>${post.content}</p>`;
    blogList.appendChild(li);
  });
}

blogForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const newPost = {
    title: blogTitle.value.trim(),
    content: blogContent.value.trim(),
    date: new Date().toLocaleDateString()
  };

  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  posts.unshift(newPost);
  localStorage.setItem('blogPosts', JSON.stringify(posts));

  blogTitle.value = "";
  blogContent.value = "";
  loadBlogPosts();
});

window.addEventListener('load', loadBlogPosts);
