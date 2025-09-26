function validateUser(username, password) {
    const fs = require('fs');
    const data = fs.readFileSync('users.txt', 'utf8');
    const users = data.split('\n').map(line => line.split(':'));

    for (let [user, pass] of users) {
        if (user === username && pass === password) {
            return true; // User is valid
        }
    }
    return false; // User is invalid
}
