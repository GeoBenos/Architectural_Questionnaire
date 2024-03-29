document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicators = document.querySelectorAll('.scroll-indicator-top, .scroll-indicator-bottom');
    const nextPage = document.getElementById('right');
    const prevPage = document.getElementById('left');
    const gallery = document.querySelector('.gallery');
    const pictures = gallery.querySelectorAll('.picture');  
    const progress = document.querySelector('.progress');
    const currentPage = 16;
    const totalPages = 31;
    const progressPercentage = (currentPage-1)/(totalPages-1)*100;
  
    progress.style.width = progressPercentage + "%";
  
    document.documentElement.style.scrollBehavior = 'smooth';

    let page16Answers = {};

    function SaveUserAnswers() {
      page16Answers = {};
      var sixteenPageTitle = document.querySelector('.sixteen_page_question').innerText.trim();
  
      selectedPictures = Array.from(pictures).filter(picture => picture.classList.contains('selected'));
      const selectedNames = selectedPictures.map(picture => picture.querySelector('.text').innerText.trim());
      const selectedURL = selectedPictures.map(picture => picture.querySelector('img').src);
      console.log(selectedNames);
      console.log(selectedPictures);

      page16Answers[sixteenPageTitle] =  selectedNames;


      selectedURL.forEach(function(url, index) {
        page16Answers['Picture No. ' + (index + 1)] = url;
      })
  
      var jsonAnswers = JSON.stringify(page16Answers);
      localStorage.setItem('Page 16 answers', jsonAnswers);
      console.log(jsonAnswers);
    }


    let selectedPictures = [];
    pictures.forEach(function(picture) {
      const checkmark = picture.querySelector('.checkmark')
      
      picture.addEventListener('click', function() {
        // Toggle the selected class on the clicked picture
        if (picture.classList.contains('selected')) {
          picture.classList.remove('selected');
          checkmark.classList.toggle('show')
          const index = selectedPictures.indexOf(picture);
          if (index !== -1) {
            selectedPictures.splice(index, 1);
          }
        } else {
          if (selectedPictures.length < 3) {
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
      window.location.href = '../Page17/seventeenth_page.html';
    });
  });
  