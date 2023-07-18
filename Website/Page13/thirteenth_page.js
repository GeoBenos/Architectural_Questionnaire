document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.gallery');
  const pictures = gallery.querySelectorAll('.picture');  
  const progress = document.querySelector('.progress');
  const currentPage = 12;
  const totalPages = 31;
  const progressPercentage = (currentPage-1)/(totalPages-1)*100;

  progress.style.width = progressPercentage + "%";

  document.documentElement.style.scrollBehavior = 'smooth';


  let page13Answers = {}; // Define pageThirteenAnswers variable in the outer scope
  const nextPageButton = document.getElementById('nextPage');
  
  function SaveUserAnswers() {
    page13Answers = {};
    var thirteenthPageTitle = document.querySelector('.thirteen_page_title').innerText.trim();

    selectedPictures = Array.from(pictures).filter(picture => picture.classList.contains('selected'));
    const selectedNames = selectedPictures.map(picture => picture.querySelector('.text').innerText.trim());
    const selectedURL = selectedPictures.map(picture => picture.querySelector('img').src);
    console.log(selectedNames);
    console.log(selectedPictures);

    page13Answers[thirteenthPageTitle] = selectedNames;
 

    selectedURL.forEach(function(url, index) {
      page13Answers['Picture No. ' + (index + 1)] = url;
    });

    var answerInput = document.getElementById('inputField');
    var userInput = answerInput.value.trim();

    if (userInput !== "") {
      page13Answers[thirteenthPageTitle + ': user input'] = userInput;
    }

    var jsonAnswers = JSON.stringify(page13Answers);
    localStorage.setItem('Page 13 answers', jsonAnswers);
    console.log(jsonAnswers);
  }

  function UserInput() {
    page13Answers={}
    var thirteenthPageTitle = document.querySelector('.thirteen_page_title').innerText.trim();

    var answerInput = document.getElementById('inputField');
    var userInput = answerInput.value.trim();

    if (userInput !== "") {
      page13Answers[thirteenthPageTitle + ': user input'] = userInput;
    }

    var jsonAnswers = JSON.stringify(page13Answers);
    localStorage.setItem('Page 12 answers', jsonAnswers);
    console.log(jsonAnswers);
  }

  let selectedPictures = [];
  pictures.forEach(function(picture) {
    const checkmark = picture.querySelector('.checkmark')

    picture.addEventListener('click', function() {
      if (picture.classList.contains('selected')) {
        picture.classList.remove('selected');
        checkmark.classList.toggle('show')
        const index = selectedPictures.indexOf(picture);
        if (index !== -1) {
          selectedPictures.splice(index, 1);
        }
      } else {
        if (selectedPictures.length < 1) {
          picture.classList.add('selected');
          selectedPictures.push(picture);
          checkmark.classList.toggle('show');
        } else {
          checkmark.classList.remove('show ')
          const firstSelected = selectedPictures.shift();
          firstSelected.classList.remove('selected');
          const index = selectedPictures.indexOf(firstSelected);
          if (index !== -1) {
            selectedPictures.splice(index, 1);
          }
          picture.classList.add('selected');
          selectedPictures.push(picture);
        }
      }

      var answerInput = document.getElementById('inputField');
      var userInput = answerInput.value.trim();
      if (selectedPictures.length === 0 && userInput !== "") {
        UserInput();
      } else {
        SaveUserAnswers();
      }

      setTimeout(function() {
        checkmark.classList.toggle('animate');
      }, 10);
    });
  });

  nextPageButton.addEventListener('click', function() {
    var answerInput = document.getElementById('inputField');
    var userInput = answerInput.value.trim();
    if (selectedPictures.length === 0 && userInput !== "") {
      UserInput();
    } else {
      SaveUserAnswers();
    }
    window.location.href = '../Page14/fourteenth_page.html';
  });
});

