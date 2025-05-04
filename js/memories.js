document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
      if (!sidebar.contains(e.target) && e.target !== menuToggle) {
        sidebar.classList.add("hidden");
      }
    });
  }

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const titleInput = form.querySelector("input[type='text']");
      const fileInput = form.querySelector("input[type='file'], textarea");

      const title = titleInput?.value.trim();
      const file = fileInput?.files?.[0] || fileInput?.value?.trim();

      if (!title || !file) {
        alert("Please fill in both the title and memory.");
        return;
      }

      console.log("Memory title:", title);
      console.log("Memory file/content:", file);

      alert("Memory added successfully!");
      form.reset();
    });
  }
});