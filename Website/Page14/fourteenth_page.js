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
  
    document.documentElement.style.scrollBehavior = 'smooth';
  
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
      window.location.href = 'fifteenth_page.html'
    });
  
    prevPage.addEventListener('click', function(){
      window.localStorage.href = 'thirteenth_page.html'
    });
  
    // nextPage.addEventListener('keyup'), function(event){
    //   if(event.key === 'ArrowRight') {
    //     window.location.href = 'third_page.html'
    //   }
    // }
  });
  