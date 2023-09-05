const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-solid');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('fa-solid');
    navbar.classList.remove('open');
}



// sign in 
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === "your_username" && password === "your_password") {
        document.getElementById("message").innerText = "Login successful!";
    } else {
        document.getElementById("message").innerText = "Invalid username or password.";
    }
});
