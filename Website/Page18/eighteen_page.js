document.addEventListener('DOMContentLoaded', function() {
    const progress = document.querySelector('.progress');
    const choices = document.querySelectorAll('button');
    const currentPage = 18;
    const totalPages = 30;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";
  
    function SaveUserAnswers(value) {
      var pageEighteenAnswers = {};
    
      // Get the fifth_page_title element
      var eighteenPageTitle = document.querySelector('.third_page_question').innerText.trim();
  
      pageEighteenAnswers[eighteenPageTitle+" "] = value
  
    
      // Convert the userAnswers object to JSON
      var jsonAnswers = JSON.stringify(pageEighteenAnswers);
    
      // Store the JSON data in the localStorage
      localStorage.setItem('page 18 answers', jsonAnswers);
      console.log(jsonAnswers);
    };  

    choices.forEach(function(choice) {
      choice.addEventListener('click', function() {
        const selectedValue = this.value;
        localStorage.setItem('selectedValue', selectedValue);
        console.log("Selected value in Page 18: " + selectedValue);
        SaveUserAnswers(selectedValue);
        setTimeout(() => {
          window.location.href = '../Page19/nineteen_page.html'; // Automatically proceed to the fourth page
        }, 500); // Delay for 0.5 second before advancing to the next page
      });
    });
  });