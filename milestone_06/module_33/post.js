// console.log("post");

function loadpost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
function displayPost(posts) {
    const postcontainer = document.getElementById('post-container');
    for (const post of posts) {
        // console.log(post);
        const postdiv = document.createElement('div');
        postdiv.classList.add('post'); //only in postdiv
        console.log(post);
        postdiv.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `;
        postcontainer.appendChild(postdiv);
    };
}
loadpost();

const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name); 