document.addEventListener('DOMContentLoaded', function() {
    const answerInput = document.getElementById('answer');
    const nextButton = document.getElementById('nextPage');
    const progress = document.querySelector('.progress');
    const messageContainer = document.createElement('div');
    const currentPage = 23;
    const totalPages = 30;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";
  
    messageContainer.classList.add('message-container');
  
    let page23Answers = {};
    nextButton.addEventListener('click', function(e) {
      if (answerInput.value.trim() === '') {
        e.preventDefault();
      }else{
        page23Answers = {};
        var Page23title = document.querySelector('.third_page_question').innerHTML.trim();
        page23Answers[Page23title + ": user input"] = answerInput.value.trim();
        var jsonAnswers = JSON.stringify(page23Answers);
        localStorage.setItem('Page 23 answers', jsonAnswers);
        console.log(jsonAnswers);
      }
    });
  
    answerInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        if (answerInput.value.trim() === '') {
          event.preventDefault();
        } else {
          page23Answers = {};
          var nineteenPagetitle = document.querySelector('.third_page_question').innerHTML.trim();
          page23Answers[nineteenPagetitle + ": user input"] = answerInput.value.trim();
          var jsonAnswers = JSON.stringify(page23Answers);
          localStorage.setItem('Page 23 answers', jsonAnswers);
          console.log(jsonAnswers);
          setTimeout(() => {
            window.location.href = '../Page24/twentyfour_page.html'; // Automatically proceed to the fourth page
          }, 500); // Delay for 0.5 seconds before advancing to the next page
        }
      }
    });
  });
  