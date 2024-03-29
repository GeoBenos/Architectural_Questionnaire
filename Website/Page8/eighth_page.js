document.addEventListener('DOMContentLoaded', function() {
    const progress = document.querySelector('.progress');
    const choices = document.querySelectorAll('button');
    const currentPage = 8;
    const totalPages = 31;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";

    function SaveUserAnswers(value) {
      var page8Answers = {};
    
      // Get the fifth_page_title element
      var eighthPageTitle = document.querySelector('.eighth_page_question').innerText.trim();
  
      page8Answers[eighthPageTitle+" "] = value
  
    
      // Convert the userAnswers object to JSON
      var jsonAnswers = JSON.stringify(page8Answers);
    
      // Store the JSON data in the localStorage
      localStorage.setItem('page 8 answers', jsonAnswers);
      console.log(jsonAnswers);
    };
  
    choices.forEach(function(choice) {
      choice.addEventListener('click', function() {
        const selectedValue = this.value;
        localStorage.setItem('selectedValue', selectedValue);
        console.log("Selected value in Page 8: " + selectedValue);
        SaveUserAnswers(selectedValue)
        setTimeout(() => {
          window.location.href = '../Page9/ninth_page.html'; // Automatically proceed to the fourth page
        }, 500); // Delay for 1 second before advancing to the next page
      });
    });
  });