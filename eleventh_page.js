document.addEventListener('DOMContentLoaded', function() {
    // const userName = document.getElementById('userName');
    // const StoredUserName = localStorage.getItem('userName');
    const answerInput = document.getElementById('answerInput');
    const nextButton = document.getElementById('nextButton');
    const messageContainer = document.createElement('div');
    const progress = document.querySelector('.progress');
    const prevPage = document.getElementById('left');
    const currentPage = 11;
    const totalPages = 31;
    const progressPercentage = (currentPage-1)/(totalPages-1)*100;
  
    progress.style.width = progressPercentage + "%";
  
    messageContainer.classList.add('message-container');
  
    // if (StoredUserName !== null && StoredUserName !== '') {
    //   userName.textContent = StoredUserName;
    //   nextButton.disabled = false; // Enable the next button if username is stored
    // }
    function SaveUserAnswers() {
      var pageElevenAnswers = {};

      // Get the user input from the answerInput field
      var answerInput = document.getElementById('answerInput');
      var userInput = answerInput.value.trim();
  
      // Add the user input to the JSON object
      if (userInput !== "") {
        pageElevenAnswers[ninthPageTitle + ': user input'] = userInput;
      }
  
      // Convert the userAnswers object to JSON
      var jsonAnswers = JSON.stringify(pageElevenAnswers);
  
      // Store the JSON data in the localStorage
      localStorage.setItem('Page 11 answers', jsonAnswers);
      console.log(jsonAnswers);
    };

  
    answerInput.addEventListener('input', function() {
      if (Number.isInteger(answerInput.value.trim())) {
        nextButton.disabled = false;
      } else {
        nextButton.disabled = true;
      }
    });
  
    answerInput.addEventListener('keyup', function(event) {
      var answerInput = document.getElementById('answerInput');
      if (event.key === 'Enter') {
        event.preventDefault();
        if (answerInput.value.trim() === '') {
          displayMessage('Please enter a number.');
        } else {
          const bedrooms = answerInput.value.trim();
          localStorage.setItem('userName', bedrooms);
          window.location.href = 'twelvth_page.html';
        }
      }
    });
  
    nextButton.addEventListener('click', function() {
      if (answerInput.value.trim() === '') {
        displayMessage('Please enter your name.');
      } else {
        const bedrooms = answerInput.value.trim();
        localStorage.setItem('userName', bedrooms);
        window.location.href = 'twelvth_page.html';
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
        window.localStorage.href = 'eighth_page.html'
    });
  });
  