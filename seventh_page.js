document.addEventListener('DOMContentLoaded', function() {
    const progress = document.querySelector('.progress');
    const choices = document.querySelectorAll('button');
    const currentPage = 7;
    const totalPages = 32;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";
  
    choices.forEach(function(choice) {
      choice.addEventListener('click', function() {
        const selectedValue = this.value;
        localStorage.setItem('selectedValue', selectedValue);
        console.log("Selected value in Page 7: " + selectedValue);
        setTimeout(() => {
          window.location.href = 'eighth_page.html'; // Automatically proceed to the fourth page
        }, 500); // Delay for 1 second before advancing to the next page
      });
    });
  });