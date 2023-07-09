document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.gallery');  
  const pictures = gallery.querySelectorAll('.picture');  
  const progress = document.querySelector('.progress');
  const currentPage = 22;
  const totalPages = 31;
  const progressPercentage = (currentPage-1)/(totalPages-1)*100;

  progress.style.width = progressPercentage + "%";

  document.documentElement.style.scrollBehavior = 'smooth';

  let page22Answers = {}; // Define page22Answers variable in the outer scope
  const nextPageButton = document.getElementById('nextPage');

  function SaveUserAnswers() {
    page22Answers = {};
    var page22Title = document.querySelector('.twentytwo_page_question').innerText.trim();

    selectedPictures_thirteenth_page = Array.from(pictures).filter(picture => picture.classList.contains('selected'));
    const selectedNames = selectedPictures_thirteenth_page.map(picture => picture.querySelector('.text').innerText.trim());
    console.log(selectedNames);
    console.log(selectedPictures_thirteenth_page);
    selectedNames.forEach(function(name, index) {
      page22Answers[page22Title + ': user clicked images' + (index + 1)] = name;
    });

    var answerInput = document.getElementById('inputField');
    var userInput = answerInput.value.trim();

    if (userInput !== "") {
      page22Answers[page22Title + ': user input'] = userInput;
    }

    var jsonAnswers = JSON.stringify(page22Answers);
    localStorage.setItem('Page 13 answers', jsonAnswers);
    console.log(jsonAnswers);
  }

  function UserInput() {
    page22Answers={}
    var page21Title = document.querySelector('.twentytwo_page_question').innerText.trim();

    var answerInput = document.getElementById('inputField');
    var userInput = answerInput.value.trim();

    if (userInput !== "") {
      page22Answers[page21Title + ': user input'] = userInput;
    }

    var jsonAnswers = JSON.stringify(page22Answers);
    localStorage.setItem('Page 22 answers', jsonAnswers);
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
        if (selectedPictures.length < 2) {
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

  nextPageButton.addEventListener('click', function(e) {
    var answerInput = document.getElementById('inputField');
    var userInput = answerInput.value.trim();
    if (userInput==='' && selectedPictures.length === 0) {
      e.preventDefault();
    }else{
      if (selectedPictures.length === 0 && userInput !== "") {
        UserInput();
      } else {
        SaveUserAnswers();
      }
      window.location.href = '../Page23/twentythree_page.html';
}});
});