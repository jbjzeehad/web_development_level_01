document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('submit button clicked');
    // get mail
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;
    console.log(email);
    // get pass
    const passfield = document.getElementById('user-pass');
    const pass = passfield.value;
    console.log(pass);

    // we dont use that just a example to verify
    if (email === 'jbj@gmail.com' && pass === '1234') {
        console.log('valid user');
        window.location.href = 'bank.html';
    }
    else {
        // console.log('Invalid User');
        alert('Invalid user');
    }

})