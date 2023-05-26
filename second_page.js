document.addEventListener('DOMContentLoaded', function() {
  const pictures = document.querySelectorAll('.picture');
  const userNameElement = document.getElementById('userName');
  const nextButton = document.getElementById('nextButton');
  const scrollIndicators = document.querySelectorAll('.scroll-indicator-top, .scroll-indicator-bottom');
  const StoredUserName = localStorage.getItem('userName');
  // const title = document.querySelector('.second_page_title');
  const gallery = document.querySelector('.gallery');
  const progress = document.querySelector('.progress');
  const currentPage = 2;
  const totalPages = 32;
  const progressPercentage = (currentPage-1)/(totalPages-1)*100;

  progress.style.width = progressPercentage + "%";

  document.documentElement.style.scrollBehavior = 'smooth';


  // let selectedPictures = [];


  // progressbar.style.width = `${progressPercentage}%`;

  if (StoredUserName !== null && StoredUserName !== '') {
    userNameElement.textContent = StoredUserName;
  }


// Add event listener to the gallery element
  gallery.addEventListener('click', (event) => {
    const clickedElement = event.target;

    // Check if the clicked element is a picture
    if (clickedElement.classList.contains('picture')) {
      // Toggle the selected class on the clicked picture
      clickedElement.classList.toggle('selected');
    }
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
});
