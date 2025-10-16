document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("post-list");

  fetch("posts.json")
    .then(res => res.json())
    .then(posts => {
      posts.reverse().forEach(post => {
        const article = document.createElement("article");
        article.classList.add("fade-in");
        article.innerHTML = `
          <img src="${post.image}" alt="${post.title}">
          <h3><a href="${post.link}">${post.title}</a></h3>
          <p>${post.description}</p>
          <span class="category">${post.category}</span><br>
          <small>${new Date(post.date).toLocaleDateString()}</small>
        `;
        container.appendChild(article);
      });
    })
    .catch(() => {
      container.innerHTML = "<p style='text-align:center;color:red;'>⚠️ Failed to load posts.</p>";
    });
});
