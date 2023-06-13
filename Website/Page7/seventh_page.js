document.addEventListener('DOMContentLoaded', function() {
    const progress = document.querySelector('.progress');
    const choices = document.querySelectorAll('button');
    const currentPage = 7;
    const totalPages = 31;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";

    function SaveUserAnswers(value) {
      var pageSevenAnswers = {};
    
      // Get the fifth_page_title element
      var SevenPageTitle = document.querySelector('.seventh_page_question').innerText.trim();
  
      pageSevenAnswers[SevenPageTitle] = value
  
    
      // Convert the userAnswers object to JSON
      var jsonAnswers_pageSeven = JSON.stringify(pageSevenAnswers);
    
      // Store the JSON data in the localStorage
      localStorage.setItem('page 5 answers', jsonAnswers_pageSeven);
      console.log(jsonAnswers_pageSeven);
    };
  
    choices.forEach(function(choice) {
      choice.addEventListener('click', function() {
        const selectedValue = this.value;
        localStorage.setItem('selectedValue', selectedValue);
        console.log("Selected value in Page 7: " + selectedValue);

        SaveUserAnswers(selectedValue)
        setTimeout(() => {
          window.location.href = '/Questionnaire_website/Website/Page8/eighth_page.html'; // Automatically proceed to the fourth page
        }, 500); // Delay for 1 second before advancing to the next page
      });
    });
  });