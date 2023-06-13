document.addEventListener('DOMContentLoaded', function() {
    const progress = document.querySelector('.progress');
    const choices = document.querySelectorAll('button');
    const currentPage = 6;
    const totalPages = 31;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";

    function SaveUserAnswers(value) {
      var pageSixAnswers = {};
    
      // Get the fifth_page_title element
      var sixthPageTitle = document.querySelector('.sixth_page_question').innerText.trim();
  
      pageSixAnswers[sixthPageTitle] = value
  
    
      // Convert the userAnswers object to JSON
      var jsonAnswers_pageSix = JSON.stringify(pageSixAnswers);
    
      // Store the JSON data in the localStorage
      localStorage.setItem('page 5 answers', jsonAnswers_pageSix);
      console.log(jsonAnswers_pageSix);
    };
  
    choices.forEach(function(choice) {
      choice.addEventListener('click', function() {
        const selectedValue = this.value;
        localStorage.setItem('selectedValue', selectedValue);
        console.log("Selected value in Page 6: " + selectedValue);
        SaveUserAnswers(selectedValue)
        setTimeout(() => {
          window.location.href = '/Questionnaire_website/Website/Page7/seventh_page.html'; // Automatically proceed to the fourth page
        }, 500); // Delay for 1 second before advancing to the next page
      });
    });
  });