let alljsonAnswers = {};
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const pictures = gallery.querySelectorAll('.picture, .picture_1');  
    const progress = document.querySelector('.progress');
    const currentPage = 29;
    const totalPages = 30;
    const progressPercentage = (currentPage-1)/(totalPages-1)*100;
  
    progress.style.width = progressPercentage + "%";

  
  

  let page29Answers = {}; // Define page29Answers variable in the outer scope
  const nextPageButton = document.getElementById('nextPage');

  console.log(localStorage);


  function SaveUserAnswers() {
    page29Answers = {};
    var page29title = document.querySelector('.twentynine_page_question').innerText.trim();
    let selectedPictures_twelveth_page = [];
    selectedPictures_twelveth_page = Array.from(pictures).filter(picture => picture.classList.contains('selected'));
    const selectedNames = selectedPictures_twelveth_page.map(picture => picture.querySelector('.text').innerText.trim());
    const selectedURL = selectedPictures_twelveth_page.map(picture => picture.querySelector('img').src);
    console.log(selectedNames);
    console.log(selectedPictures_twelveth_page);
      page29Answers[page29title] = selectedNames;

    selectedURL.forEach(function(url, index) {
      page29Answers['Picture No. ' + (index + 1)] = url;
    });

    var jsonAnswers = JSON.stringify(page29Answers);

    localStorage.setItem('Page 29 answers', jsonAnswers);
    if (currentPage + 1 === totalPages){
      alljsonAnswers = JSON.stringify(localStorage)
    }

    console.log(jsonAnswers);
  };

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
        if (selectedPictures.length < 9) {
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

  nextPageButton.addEventListener('click', function(e) {
    if (selectedPictures.length === 0) {
      e.preventDefault();
      }else{
        SaveUserAnswers();
      };
    });
});
