document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    const storedPassword = localStorage.getItem(email);
  
    if (storedPassword && storedPassword === password) {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Wrong credentials. Please try again.");
    }
  });