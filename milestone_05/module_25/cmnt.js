// step 01:

document.getElementById('btn-post').addEventListener('click', function () {
    // step 02: get the comment
    const cmnbox = document.getElementById('new-comment');
    const newcmn = cmnbox.value;
    // console.log(newcmn);
    // get the comment container
    // create a new element
    // set the text of the comment 
    // add the p tag using appenchild

    const commentcontainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newcmn;
    commentcontainer.appendChild(p);
    cmnbox.value = "";
})

