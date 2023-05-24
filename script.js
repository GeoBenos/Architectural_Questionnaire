document.addEventListener('DOMContentLoaded', function() {
  const userNameElement = document.getElementById('userName');
  const nameInput = document.getElementById('nameInput');
  const storedUserName = localStorage.getItem('userName');
  const nextButton = document.getElementById('nextButton');
  const messageContainer = document.createElement('div');
  const pictures = document.querySelectorAll('.picture');
  messageContainer.classList.add('message-container');


  if (storedUserName) {
    userNameElement.textContent = storedUserName;
  }

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
        window.location.href = 'second_page.html';
      }
    }
  });

  nextButton.addEventListener('click', function() {
    if (nameInput.value.trim() === '') {
      displayMessage('Please enter your name.');
    } else {
      window.location.href = 'second_page.html';
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

  let selectedPictures = [];

  pictures.forEach((picture) => {
    picture.addEventListener('click', () => {
      picture.classList.toggle('selected');
      const isSelected = picture.classList.contains('selected');

      if (isSelected) {
        selectedPictures.push(picture);
      } else {
        selectedPictures = selectedPictures.filter((pic) => pic !== picture);
      }

      if (selectedPictures.length > 0 && selectedPictures.length < 3) {
        nextButton.removeAttribute('disabled');
      } else {
        nextButton.setAttribute('disabled', 'true');
      }

      if (selectedPictures.length === 3) {
        // Automatically proceed to the next page
        window.location.href = 'next_page.html';
      }
    });
  });

  const scrollIndicators = document.querySelectorAll('.scroll-indicator-top, .scroll-indicator-bottom');
  scrollIndicators.forEach(function(indicator) {
    indicator.addEventListener('click', function() {
      const container = document.querySelector('.container');
      const scrollHeight = container.scrollHeight;
      
      if (indicator.classList.contains('scroll-indicator-top')) {
        container.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({ top: scrollHeight, behavior: 'smooth' });
      }
    });
  });
});
