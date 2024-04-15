document.addEventListener('DOMContentLoaded', function (){
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    let username = currentUser.name;
    console.log(username);
    document.getElementById("username").innerText = username;
})