document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-button");
    const projects = document.querySelectorAll(".project");

    filterButtons.forEach(button => {
      button.addEventListener("click", function() {
        const filterValue = this.dataset.filter;

        projects.forEach(project => {
          if (filterValue === "all" || project.dataset.categories.includes(filterValue)) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      });
    });
  });