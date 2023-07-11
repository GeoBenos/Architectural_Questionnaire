document.addEventListener('DOMContentLoaded', function() {
    // const userName = document.getElementById('userName');
    // const StoredUserName = localStorage.getItem('userName');
    const nameInput = document.getElementById('nameInput');
    const nextButton = document.getElementById('nextButton');
    const messageContainer = document.createElement('div');
  
    messageContainer.classList.add('message-container');

    localStorage.clear();
  
    nameInput.addEventListener('input', function() {
      if (nameInput.value.trim() !== '') {
        nextButton.disabled = false;
      } else {
        nextButton.disabled = true;
      }
    });
  
    nameInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (nameInput.value.trim() === '') {
          displayMessage('Please enter your name.');
        } else {
          const userName = nameInput.value.trim();
          localStorage.setItem('userName', userName);
          window.location.href = '../Page2/second_page.html';
        }
      }
    });
  
    nextButton.addEventListener('click', function() {
      if (nameInput.value.trim() === '') {
        displayMessage('Please enter your name.');
      } else {
        const userName = nameInput.value.trim();
        localStorage.setItem('userName', userName);
        window.location.href = '../Page2/second_page.html';
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
  });
  