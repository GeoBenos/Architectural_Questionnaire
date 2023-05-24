document.addEventListener('DOMContentLoaded', function() {
    const choices = document.querySelectorAll('input[type="radio"]');
    const progressBar = document.querySelector('.progress-bar');
  
    choices.forEach(choice => {
      choice.addEventListener('change', function() {
        progressBar.style.width = '33%'; // Update the progress bar to 33%
        setTimeout(() => {
          window.location.href = 'fourth_page.html'; // Automatically proceed to the fourth page
        }, 1000); // Delay for 1 second before advancing to the next page
      });
    });
  });
  