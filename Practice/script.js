const details = [];
const addData = event => {
    const userName = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!userName || !password) {
        alert('Please enter your username or password!');
        return;
    }
    const data = {userName,password,};
    details.push(data);
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    console.log(details);
};


document.getElementById('addData').addEventListener('click', addData);