document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicators = document.querySelectorAll('.scroll-indicator-top, .scroll-indicator-bottom');
    const nextPage = document.getElementById('right');
    const prevPage = document.getElementById('left');
    const gallery = document.querySelector('.gallery');
    const pictures = gallery.querySelectorAll('.picture');  
    const progress = document.querySelector('.progress');
    let inputField = localStorage.getItem('input');
    localStorage.setItem("Extra materials the user entered: ", inputField)
    console.log(inputField)
    var otherButton = document.querySelector(".other");
    const currentPage = 22;
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
        setTimeout(function() {
        checkmark.classList.toggle('animate');
        }, 10);
      });
    });

    
    nextPage.addEventListener('click', function() {
        var answerInput = document.getElementById('answerInput');
        var answer = answerInput.value;
        localStorage.setItem('user answer for page 22', answer)
        console.log(answer);
        window.location.href = 'twentythree_page.html'
      });
    
      prevPage.addEventListener('click', function(){
        window.localStorage.href = 'twentyone_page.html'
      });
});