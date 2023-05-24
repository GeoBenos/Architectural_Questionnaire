document.addEventListener('DOMContentLoaded', function() {
  const pictures = document.querySelectorAll('.picture');
  const userNameElement = document.getElementById('userName');
  const nextButton = document.getElementById('nextButton');
  const scrollIndicators = document.querySelectorAll('.scroll-indicator-top, .scroll-indicator-bottom');
  const StoredUserName = localStorage.getItem('userName');
  // const progressbar = document.querySelector('.progress-bar');
  // const currentPage = 2;
  // const totalPages = 32;
  // const progressPercentage = (currentPage-1)/(totalPages-1)*100
  let selectedPictures = [];


  // progressbar.style.width = `${progressPercentage}%`;

  if (StoredUserName !== null && StoredUserName !== '') {
    userNameElement.textContent = StoredUserName;
  }

  pictures.forEach((picture) => {
    picture.addEventListener('click', () => {
      picture.classList.toggle('selected');
      const isSelected = picture.classList.contains('selected');

      if (isSelected) {
        selectedPictures.push(picture);
      } else {
        selectedPictures = selectedPictures.filter((pic) => pic !== picture);
      }

      if (selectedPictures.length > 0 && selectedPictures.length < 3) {
        nextButton.removeAttribute('disabled');
      } else {
        nextButton.setAttribute('disabled', 'true');
      }

      if (selectedPictures.length === 3) {
        // Automatically proceed to the next page
        window.location.href = 'third_page.html';
      }
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
});
