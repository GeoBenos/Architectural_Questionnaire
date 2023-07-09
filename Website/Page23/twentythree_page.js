document.addEventListener('DOMContentLoaded', function() {
    const answerInput = document.getElementById('answer');
    const nextButton = document.getElementById('nextButton');
    const progress = document.querySelector('.progress');
    const messageContainer = document.createElement('div');
    const currentPage = 23;
    const totalPages = 31;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";
  
    messageContainer.classList.add('message-container');
  
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
          localStorage.setItem('userAnswer', userAnswer);
          window.location.href = '../Page24/twentyfour_page.html';
        }
      }
    });
  
    nextButton.addEventListener('click', function() {
      if (answerInput.value.trim() === '') {
        displayMessage('Please enter your answer.');
      } else {
        const userAnswer = answerInput.value.trim();
        localStorage.setItem('userName', userAnswer);
        window.location.href = '../Page24/twentyfour_page.html';
      }
    });

    prevPage.addEventListener('click', function(){
      window.localStorage.href = '../Page22/twentytwo_page.html'
      });
  
    function displayMessage(text) {
      messageContainer.textContent = text;
      document.body.appendChild(messageContainer);
      setTimeout(function() {
        messageContainer.classList.add('fade-out');
      }, 3000);
      setTimeout(function() {
        messageContainer.remove();
      }, 4000);
    }
  });
  