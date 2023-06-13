document.addEventListener('DOMContentLoaded', function() {
    const progress = document.querySelector('.progress');
    const choices = document.querySelectorAll('button');
    const currentPage = 18;
    const totalPages = 31;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";
  
    choices.forEach(function(choice) {
      choice.addEventListener('click', function() {
        const selectedValue = this.value;
        localStorage.setItem('selectedValue', selectedValue);
        console.log("Selected value in Page 18: " + selectedValue);
        setTimeout(() => {
          window.location.href = '/Questionnaire_website/Website/Page19/nineteen_page.html'; // Automatically proceed to the fourth page
        }, 500); // Delay for 0.5 second before advancing to the next page
      });
    });

    prevPage.addEventListener('click', function(){
      window.localStorage.href = '/Questionnaire_website/Website/Page17/seventeenth_page.html'
      });
  });