document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Here, you would typically send a request to the server for authentication.
        // For simplicity, we'll just display an alert for successful login.
        alert(`Welcome, ${username}!`);
    });
});
