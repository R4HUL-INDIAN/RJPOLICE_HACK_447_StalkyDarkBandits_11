function validateLogin() {
    
    var username = document.getElementById('usm').value;
    var password = document.getElementById('pswd').value;

    if (username === 'dark admin' && password === 'admin') {
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid username or password');
    }
  }
