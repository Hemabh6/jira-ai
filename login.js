document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Demo users
    if ((username === 'admin' && password === 'admin123') ||
        (username === 'demo' && password === 'demo123')) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});
