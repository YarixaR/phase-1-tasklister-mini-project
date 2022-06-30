document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
  });
});