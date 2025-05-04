document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const form = document.querySelector("form");
  const passwordInput = document.getElementById("password");

  
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });

  
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.querySelector('input[type="email"]').value.trim();
    const password = form.querySelector('input[type="password"]').value.trim();
    const confirmPassword = passwordInput.value.trim();

    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields, babycakes.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    
    alert("Your changes have been saved!");
    
  });
});