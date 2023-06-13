document.addEventListener('DOMContentLoaded', function() {
    const progress = document.querySelector('.progress');
    const choices = document.querySelectorAll('button');
    const currentPage = 17;
    const totalPages = 31;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";
  
    choices.forEach(function(choice) {
      choice.addEventListener('click', function() {
        const selectedValue = this.value;
        localStorage.setItem('selectedValue', selectedValue);
        console.log("Selected value in Page 11: " + selectedValue);
        setTimeout(() => {
          window.location.href = '/Questionnaire_website/Website/Page18/eighteen_page.html'; // Automatically proceed to the fourth page
        }, 500); // Delay for 1 second before advancing to the next page
      });
    });

    nextPage.addEventListener('click', function() {
        var answerInput = document.getElementById('answer');
        var answer = answerInput.value;
        localStorage.setItem('user answer for page 17', answer)
        console.log(answer);
        window.location.href = '/Questionnaire_website/Website/Page18/eighteen_page.html'
      });

    prevPage.addEventListener('click', function(){
    window.localStorage.href = '/Questionnaire_website/Website/Page16/sixteenth_page.html'
    });
  });