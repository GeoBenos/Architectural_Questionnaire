document.addEventListener('DOMContentLoaded', function() {
    // const userName = document.getElementById('userName');
    // const StoredUserName = localStorage.getItem('userName');
    const answerInput = document.getElementById('answer');
    const nextButton = document.getElementById('nextButton');
    const progress = document.querySelector('.progress');
    const messageContainer = document.createElement('div');
    const currentPage = 19;
    const totalPages = 31;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";
  
    messageContainer.classList.add('message-container');

    pageNineteenAnswers = {};
    answerInput.addEventListener('input', function() {
      if (answerInput.value.trim() !== '') {
        nextButton.disabled = false;
      } else {
        nextButton.disabled = true;
      }
    });
  
    answerInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (answerInput.value.trim() === '') {
          displayMessage('Please enter your answer.');
        } else {
          const userAnswer = answerInput.value.trim();
          var nineteenPagetitle = document.getElementsByClassName("third_page_question").value;
          pageNineteenAnswers[nineteenPagetitle + ": user input"] = userAnswer;
          var jsonAnswers = JSON.stringify(pageNineteenAnswers);
          localStorage.setItem('Page 19 answers', jsonAnswers);
          console.log(jsonAnswers);
          setTimeout(function() {
            window.location.href = '../Page20/twenty_page.html';
          }, 4000);
          
        }
      }
    });
  });
  