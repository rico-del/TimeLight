
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("hidden");
  });
});


const editButton = document.querySelector(".profile-card button");

editButton.addEventListener("click", () => {
  alert("Edit profile feature coming soon, love!");
});