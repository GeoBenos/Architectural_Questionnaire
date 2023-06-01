document.addEventListener('DOMContentLoaded', function() {
  const scrollIndicators = document.querySelectorAll('.scroll-indicator-top, .scroll-indicator-bottom');
  const nextPage = document.getElementById('right');
  const prevPage = document.getElementById('left');
  const gallery = document.querySelector('.gallery');
  const pictures = gallery.querySelectorAll('.picture');  
  const progress = document.querySelector('.progress');
  const currentPage = 4;
  const totalPages = 31;
  const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;

  progress.style.width = progressPercentage + "%";

  document.documentElement.style.scrollBehavior = 'smooth';

  function SaveUserAnswers() {
    var pageFourAnswers = {};
  
    // Get the fourth_page_title element
    var fourthPageTitle = document.querySelector('.fourth_page_title').innerText.trim();

    selectedPictures_fourth_page = Array.from(pictures).filter(picture => picture.classList.contains('selected'));
    const selectedNames = selectedPictures_fourth_page.map(picture => picture.querySelector('.text').innerText.trim());
    console.log(selectedNames)
    console.log(selectedPictures_fourth_page);
    selectedNames.forEach(function(name, index) {
      pageFourAnswers[fourthPageTitle + ': answer' + (index + 1)] = name;
    });
  
    // Convert the userAnswers object to JSON
    var jsonAnswers = JSON.stringify(pageFourAnswers);
  
    // Store the JSON data in the localStorage
    localStorage.setItem('Page 4 answers', jsonAnswers);
    console.log(jsonAnswers);
  }

  let selectedPictures_fourth_page = [];
  pictures.forEach(function(picture) {
    const checkmark = picture.querySelector('.checkmark')
    
    picture.addEventListener('click', function() {
      // Toggle the selected class on the clicked picture
      if (picture.classList.contains('selected')) {
        picture.classList.remove('selected');
        checkmark.classList.toggle('show')
        const index = selectedPictures_fourth_page.indexOf(picture);
        if (index !== -1) {
          selectedPictures_fourth_page.splice(index, 1);
        }
      } else {
        if (selectedPictures_fourth_page.length < 2) {
          picture.classList.add('selected');
          selectedPictures_fourth_page.push(picture);
          checkmark.classList.toggle('show');
        } else {
          checkmark.classList.remove('show ')
          const firstSelected = selectedPictures_fourth_page.shift();
          firstSelected.classList.remove('selected');
          const index = selectedPictures_fourth_page.indexOf(firstSelected);
          if (index !== -1) {
            selectedPictures_fourth_page.splice(index, 1);
          }
          picture.classList.add('selected');
          selectedPictures_fourth_page.push(picture);
        }
      }
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

  nextPage.addEventListener('click', function() {
    storeUserAnswers();
    window.location.href = 'fifth_page.html';
  });
  
  prevPage.addEventListener('click', function(){
    window.location.href = 'home_page.html';
  });
});
