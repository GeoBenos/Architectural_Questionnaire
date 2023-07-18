document.addEventListener('DOMContentLoaded', function() {
  const progress = document.querySelector('.progress');
  const choices = document.querySelectorAll('button');
  const currentPage = 5;
  const totalPages = 30;
  const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;

  progress.style.width = progressPercentage + "%";


  function SaveUserAnswers(value) {
    var pageFiveAnswers = {};
  
    // Get the fifth_page_title element
    var fifthPageTitle = document.querySelector('.fifth_page_question').innerText.trim();

    pageFiveAnswers[fifthPageTitle] = value

  
    // Convert the userAnswers object to JSON
    var jsonAnswers = JSON.stringify(pageFiveAnswers);
  
    // Store the JSON data in the localStorage
    localStorage.setItem('page 5 answers', jsonAnswers);
    console.log(jsonAnswers);
  };

  choices.forEach(function(choice) {
    choice.addEventListener('click', function() {
      const selectedValue = this.value;
      console.log("Selected value in Page 5: " + selectedValue);
      SaveUserAnswers(selectedValue);
      setTimeout(() => {
        window.location.href = '../Page6/sixth_page.html'; // Automatically proceed to the sixth page
      }, 500); // Delay for 1 second before advancing to the next page
    });
  });
});
