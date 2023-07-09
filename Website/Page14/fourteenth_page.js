document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicators = document.querySelectorAll('.scroll-indicator-top, .scroll-indicator-bottom');
    const nextPage = document.getElementById('right');
    const prevPage = document.getElementById('left');
    const gallery = document.querySelector('.gallery');
    const pictures = gallery.querySelectorAll('.picture');  
    const progress = document.querySelector('.progress');
    const currentPage = 14;
    const totalPages = 31;
    const progressPercentage = (currentPage-1)/(totalPages-1)*100;
  
    progress.style.width = progressPercentage + "%";
    const nextPageButton = document.getElementById('nextPage');
  
    document.documentElement.style.scrollBehavior = 'smooth';
  
    function SaveUserAnswers() {
      pageFourteenAnswers = {};
      var fourteenthPageTitle = document.querySelector('.fourteenth_page_title').innerText.trim();
  
      selectedPictures_twelveth_page = Array.from(pictures).filter(picture => picture.classList.contains('selected'));
      const selectedNames = selectedPictures_twelveth_page.map(picture => picture.querySelector('.text').innerText.trim());
      console.log(selectedNames);
      console.log(selectedPictures_twelveth_page);
      selectedNames.forEach(function(name, index) {
        pageFourteenAnswers[fourteenthPageTitle + ': user clicked images No.' + (index + 1)] = name;
      });
  
      var jsonAnswers = JSON.stringify(pageFourteenAnswers);
      localStorage.setItem('Page 14 answers', jsonAnswers);
      console.log(jsonAnswers);
    };

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
      var answerInput = document.getElementById('inputField');
      var userInput = answerInput.value.trim();
      if (selectedPictures.length === 0 && userInput !== "") {
        UserInput();
      } else {
        SaveUserAnswers();
      }
      window.location.href = '../Page15/fifteenth_page.html';
    });
  
    prevPage.addEventListener('click', function(){
      window.localStorage.href = '../Page13/thirteenth_page.html'
    });
  
    // nextPage.addEventListener('keyup'), function(event){
    //   if(event.key === 'ArrowRight') {
    //     window.location.href = 'third_page.html'
    //   }
    // }
  });
  