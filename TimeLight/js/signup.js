document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.querySelectorAll("#password")[0].value;
    const confirmPassword = document.querySelectorAll("#password")[1].value;
  
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all required fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    localStorage.setItem(email, password);
    alert("Account created successfully!");
    window.location.href = "login.html";
  });