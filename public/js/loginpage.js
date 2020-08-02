//javascript for login page
//getting id
const loginForm = document.getElementById("loginform");
const loginButton = document.getElementById("submitform");
const loginErrorMsg = document.getElementById("errormsg1");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
//username and password must be filled
    if (username === "user" && password === "P@ssw0rd123") {
        //alert("You have successfully logged in.");
        window.location.replace('Home.html');
        //window.location.href = "http://www.google.com/";
        //location.reload();
    } else {
        //keep the user stays in login page
        loginErrorMsg.style.opacity = 1;
    }
})