document.addEventListener('DOMContentLoaded', function() {
  const progress = document.querySelector('.progress');
  const choices = document.querySelectorAll('button');
  const currentPage = 5;
  const totalPages = 31;
  const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;

  progress.style.width = progressPercentage + "%";


  function SaveUserAnswers(value) {
    var pageFiveAnswers = {};
  
    // Get the fifth_page_title element
    var fifthPageTitle = document.querySelector('.fifth_page_question').innerText.trim();

    pageFiveAnswers[fifthPageTitle] = value

  
    // Convert the userAnswers object to JSON
    var jsonAnswers_pageFive = JSON.stringify(pageFiveAnswers);
  
    // Store the JSON data in the localStorage
    localStorage.setItem('page 5 answers', jsonAnswers_pageFive);
    console.log(jsonAnswers_pageFive);
  };

  choices.forEach(function(choice) {
    choice.addEventListener('click', function() {
      const selectedValue = this.value;
      localStorage.setItem('selectedValue', selectedValue);
      console.log("Selected value in Page 5: " + selectedValue);
      SaveUserAnswers(selectedValue);
      setTimeout(() => {
        window.location.href = 'sixth_page.html'; // Automatically proceed to the sixth page
      }, 500); // Delay for 1 second before advancing to the next page
    });
  });
});
