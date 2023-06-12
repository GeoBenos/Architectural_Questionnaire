document.addEventListener('DOMContentLoaded', function() {
    // const userName = document.getElementById('userName');
    // const StoredUserName = localStorage.getItem('userName');
    const answerInput = document.getElementById('answerInput');
    const nextButton = document.getElementById('nextButton');
    const messageContainer = document.createElement('div');
    const progress = document.querySelector('.progress');
    const prevPage = document.getElementById('left');
    const currentPage = 15;
    const totalPages = 31;
    const progressPercentage = (currentPage-1)/(totalPages-1)*100;
  
    progress.style.width = progressPercentage + "%";
  
    messageContainer.classList.add('message-container');
  
    // if (StoredUserName !== null && StoredUserName !== '') {
    //   userName.textContent = StoredUserName;
    //   nextButton.disabled = false; // Enable the next button if username is stored
    // }
  
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
          displayMessage('Please enter your name.');
        } else {
          const bathrooms = answerInput.value.trim();
          localStorage.setItem('userName', bathrooms);
          window.location.href = 'sixteenth_page.html';
        }
      }
    });
  
    nextButton.addEventListener('click', function() {
      if (answerInput.value.trim() === '') {
        displayMessage('Please enter an answer.');
      } else {
        const bedrooms = answerInput.value.trim();
        localStorage.setItem('userName', bedrooms);
        window.location.href = 'sixteenth_page.html';
      }
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

    prevPage.addEventListener('click', function(){
        window.localStorage.href = 'fourteenth_page.html'
    });
  });
  