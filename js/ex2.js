/* Homework 8
   Exercise 2 JavaScript code
   -- GitHub Profile
*/

function getUserInfo() {
   const username = document.getElementById("username").value;
   const url = `https://api.github.com/users/${username}`;

   fetch(url)
       .then(response => response.json())
       .then(result => {
           document.getElementById("profilePic").innerHTML = `<img src="${result.avatar_url}">`;
           document.getElementById("name").innerHTML = result.name;
           document.getElementById("blog").innerHTML = result.blog;
           document.getElementById("created").innerHTML = result.created_at;
       })
       .catch(error => console.error(error));
}