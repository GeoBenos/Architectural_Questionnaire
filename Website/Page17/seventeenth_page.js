document.addEventListener('DOMContentLoaded', function() {
    const progress = document.querySelector('.progress');
    const choices = document.querySelectorAll('button');
    const answer = document.getElementById('answer');
    const currentPage = 17;
    const totalPages = 30;
    const userInput = answer.value.trim();
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";
    let pageSeventeenAnswers = {}

    answer.addEventListener('input', function() {
      const userInput = answer.value.trim();
      const buttons = document.querySelectorAll('button');
    
      if (userInput !== '') {
        buttons.forEach(function(button) {
          button.disabled = true;
        });
      } else {
        buttons.forEach(function(button) {
          button.disabled = false;
        });
      }
    });

    function SaveUserAnswers(userAnswer) {
      var seventeenthPageTitle = document.querySelector('.third_page_question').innerText.trim();
      var pageSeventeenAnswers = {};

      console.log(userInput)

      pageSeventeenAnswers[seventeenthPageTitle+" "] = userAnswer
  
    
      // Convert the userAnswers object to JSON
      var jsonAnswers_pageSeventeen = JSON.stringify(pageSeventeenAnswers);
    
      // Store the JSON data in the localStorage
      console.log(jsonAnswers_pageSeventeen);
  
      var jsonAnswers = JSON.stringify(pageSeventeenAnswers);
      localStorage.setItem('Page 17 answers', jsonAnswers);
      console.log(jsonAnswers);
      };
  
    choices.forEach(function(choice) {
      choice.addEventListener('click', function() {
        const selectedValue = this.value;
        localStorage.setItem('selectedValue', selectedValue);
        console.log("Selected value in Page 17: " + selectedValue);
        SaveUserAnswers(selectedValue);
        setTimeout(() => {
          window.location.href = '../Page18/eighteen_page.html'; // Automatically proceed to the fourth page
        }, 500); // Delay for 0.5 seconds before advancing to the next page
      });
    });

    var nextPage = document.getElementById("nextPage");
    nextPage.addEventListener('click', function(e) {
        const userInput = answer.value.trim();
        var seventeenthPageTitle = document.querySelector('.third_page_question').innerText.trim();
        if (userInput==='') {
          e.preventDefault();
        }else{
          pageSeventeenAnswers[seventeenthPageTitle + ': user input'] = userInput;
          var jsonAnswers = JSON.stringify(pageSeventeenAnswers);
          localStorage.setItem('Page 17 answers', jsonAnswers);
          console.log(jsonAnswers);
      }});
  });