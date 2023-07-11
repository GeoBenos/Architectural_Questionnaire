document.addEventListener('DOMContentLoaded', function() {
    const answerInput = document.getElementById('answerInput');
    const nextButton = document.getElementById('nextButton');
    const messageContainer = document.createElement('div');
    const progress = document.querySelector('.progress');
    const prevPage = document.getElementById('left');
    const currentPage = 15;
    const totalPages = 30;
    const progressPercentage = (currentPage-1)/(totalPages-1)*100;
  
    progress.style.width = progressPercentage + "%";
  
    messageContainer.classList.add('message-container');
  
    function SaveUserAnswers() {
      var pageFifteenAnswers = {};

      // Get the user input from the answerInput field
      var fifteenPageTitle = document.querySelector('.fifteenth_page_question').innerText.trim();
      var answerInput = document.getElementById('answerInput');
      var userInput = answerInput.value.trim();
  
      // Add the user input to the JSON object
      if (userInput !== "") {
        pageFifteenAnswers[fifteenPageTitle + ': user input'] = userInput;
      }
  
      // Convert the userAnswers object to JSON
      var jsonAnswers = JSON.stringify(pageFifteenAnswers);
  
      // Store the JSON data in the localStorage
      localStorage.setItem('Page 15 answers', jsonAnswers);
      console.log(jsonAnswers);
    };
  
    answerInput.addEventListener('input', function() {
      if (isNaN(answerInput.value.trim())===false && answerInput.value.trim!=null) {
        nextButton.disabled = false;
      } else {
        displayMessage("Please enter a number.")
        nextButton.disabled = true;
      }
    });
  
    answerInput.addEventListener('keyup', function(event) {
      var answerInput = document.getElementById('answerInput');
      if (event.key === 'Enter') {
        event.preventDefault();
        if (answerInput.value.trim() === '' || isNaN(answerInput.value.trim())===true) {
          displayMessage('Please enter a number.');
        } else {
          SaveUserAnswers();
          window.location.href = '../Page16/sixteenth_page.html';
        }
      }
    });
  
    nextButton.addEventListener('click', function() {
      if (answerInput.value.trim() === '') {
        displayMessage('Please enter a number.');
      } else {
        SaveUserAnswers();
        window.location.href = '../Page16/sixteenth_page.html'; 
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
        window.localStorage.href = '../Page14/fourteenth_page.html'
    });
  });
  