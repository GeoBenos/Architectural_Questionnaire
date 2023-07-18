document.addEventListener('DOMContentLoaded', function() {
  const userNameElement = document.getElementById('userName');
  const scrollIndicators = document.querySelectorAll('.scroll-indicator-top, .scroll-indicator-bottom');
  const StoredUserName = localStorage.getItem('userName');
  const gallery = document.querySelector('.gallery');
  const pictures = gallery.querySelectorAll('.picture');  
  const progress = document.querySelector('.progress');
  const currentPage = 2;
  const totalPages = 31;
  const progressPercentage = (currentPage-1)/(totalPages-1)*100;

  progress.style.width = progressPercentage + "%";

  const nextPageButton = document.getElementById('nextPage');
  let page2Answers = {}
  function SaveUserAnswers() {
    page2Answers = {};
    var page2Title = document.querySelector('.second_page_question').innerText.trim();

    let selectedPictures_twelveth_page = [];
    selectedPictures_twelveth_page = Array.from(pictures).filter(picture => picture.classList.contains('selected'));
    const selectedNames = selectedPictures_twelveth_page.map(picture => picture.querySelector('.text').innerText.trim());
    const selectedURL = selectedPictures_twelveth_page.map(picture => picture.querySelector('img').src);
    console.log(selectedNames);
    console.log(selectedPictures_twelveth_page);
    page2Answers[page2Title] = selectedNames;

    selectedURL.forEach(function(url, index) {
      page2Answers['Picture No. ' + (index + 1)] = url;
    });

    var jsonAnswers = JSON.stringify(page2Answers);
    localStorage.setItem('Page 2 answers', jsonAnswers);
    console.log(jsonAnswers);
  };


  if (StoredUserName !== null && StoredUserName !== '') {
    userNameElement.textContent = StoredUserName;
  }

  let selectedPictures = [];
  pictures.forEach(function(picture) {
    const checkmark = picture.querySelector('.checkmark')
    
    picture.addEventListener('click', function() {
      // Toggle the selected class on the clicked picture
      if (picture.classList.contains('selected')) {
        picture.classList.remove('selected');
        checkmark.classList.toggle('show');
        const index = selectedPictures.indexOf(picture);
        if (index !== -1) {
          selectedPictures.splice(index, 1);
        };
      } else {
        if (selectedPictures.length < 5) {
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
        };
      };

      SaveUserAnswers();

      setTimeout(function() {
        checkmark.classList.toggle('animate');
      }, 10);
    });
  });

  
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

  nextPageButton.addEventListener('click', function() {
    SaveUserAnswers();
    window.location.href = '../Page3/third_page.html';
  });

  // prevPage.addEventListener('click', function(){
  //   window.localStorage.href = '../Page13/thirteenth_page.html'
  // });



});
