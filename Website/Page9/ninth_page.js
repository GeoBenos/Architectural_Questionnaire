document.addEventListener('DOMContentLoaded', function() {
    const nextPage = document.getElementById('right');
    const prevPage = document.getElementById('left');
    const gallery = document.querySelector('.gallery');
    const pictures = gallery.querySelectorAll('.picture');  
    const progress = document.querySelector('.progress');
    const currentPage = 9;
    const totalPages = 31;
    const progressPercentage = (currentPage-1)/(totalPages-1)*100;
  
    progress.style.width = progressPercentage + "%";
  
    document.documentElement.style.scrollBehavior = 'smooth';


    function SaveUserAnswers() {
      var pageNineAnswers = {};
  
      // Get the ninth_page_title element
      var ninthPageTitle = document.querySelector('.ninth_page_title').innerText.trim();
  
      selectedPictures_ninth_page = Array.from(pictures).filter(picture => picture.classList.contains('selected'));
      const selectedNames = selectedPictures_ninth_page.map(picture => picture.querySelector('.text').innerText.trim());
      console.log(selectedNames);
      console.log(selectedPictures_ninth_page);
      selectedNames.forEach(function(name, index) {
        pageNineAnswers[ninthPageTitle + ': user clicked images' + (index + 1)] = name;
      });
  
      // Get the user input from the answerInput field
      var answerInput = document.getElementById('inputField');
      var userInput = answerInput.value.trim();
  
      // Add the user input to the JSON object
      if (userInput !== "") {
        pageNineAnswers[ninthPageTitle + ': user input'] = userInput;
      }
  
      // Convert the userAnswers object to JSON
      var jsonAnswers = JSON.stringify(pageNineAnswers);
  
      // Store the JSON data in the localStorage
      localStorage.setItem('Page 9 answers', jsonAnswers);
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
          if (selectedPictures.length < 1) {
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
  
  // function showInputField() {

  //   if (inputField.style.opacity === "" || inputField.style.opacity === "0") {
  //     inputField.style.opacity = "1";
  //   } else {
  //     inputField.style.opacity = "0";
  //   }
  
  //   otherButton.classList.toggle("active");
  // };
  
    nextPage.addEventListener('click', function() {
      window.location.href = 'tenth_page.html'
      SaveUserAnswers();
    });
  
    prevPage.addEventListener('click', function(){
      window.localStorage.href = 'eighth_page.html'
    });
  
    // nextPage.addEventListener('keyup'), function(event){
    //   if(event.key === 'ArrowRight') {
    //     window.location.href = 'third_page.html'
    //   }
    // }
  });
  