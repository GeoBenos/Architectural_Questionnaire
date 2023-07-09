document.addEventListener('DOMContentLoaded', function() {
    const progress = document.querySelector('.progress');
    const choices = document.querySelectorAll('button');
    const currentPage = 10;
    const totalPages = 31;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";
  
    function SaveUserAnswers(value) {
      var pageTenAnswers = {};
    
      // Get the fifth_page_title element
      var tenthPageTitle = document.querySelector('.tenth_page_question').innerText.trim();
  
      pageTenAnswers[tenthPageTitle+" "] = value
  
    
      // Convert the userAnswers object to JSON
      var jsonAnswers_pageTen = JSON.stringify(pageTenAnswers);
    
      // Store the JSON data in the localStorage
      localStorage.setItem('page 10 answers', jsonAnswers_pageTen);
      console.log(jsonAnswers_pageTen);
    };


    choices.forEach(function(choice) {
      choice.addEventListener('click', function() {
        const selectedValue = this.value;
        localStorage.setItem('selectedValue', selectedValue);
        console.log("Selected value in Page 10: " + selectedValue);

        SaveUserAnswers(selectedValue);
        setTimeout(() => {
          window.location.href = '../Page11/eleventh_page.html'; // Automatically proceed to the fourth page
        }, 500); // Delay for 1 second before advancing to the next page
      });
    });
  });