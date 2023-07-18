document.addEventListener('DOMContentLoaded', function() {
  const progress = document.querySelector('.progress');
  const choices = document.querySelectorAll('button');
  const currentPage = 3;
  const totalPages = 31;
  const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;

  progress.style.width = progressPercentage + "%";

  console.log(localStorage);

  function SaveUserAnswers(value) {
    var page3Answers = {};
  
    // Get the fifth_page_title element
    var Page3Title = document.querySelector('.third_page_question').innerText.trim();

    page3Answers[Page3Title] = value

  
    // Convert the userAnswers object to JSON
    var jsonAnswers = JSON.stringify(page3Answers);
  
    // Store the JSON data in the localStorage
    localStorage.setItem('page 3 answers', jsonAnswers);
    console.log(jsonAnswers);
  };

  choices.forEach(function(choice) {
    choice.addEventListener('click', function() {
      const selectedValue = this.value;
      localStorage.setItem('selectedValue', selectedValue);
      console.log("Selected value in Page 3: " + selectedValue);
      SaveUserAnswers(selectedValue)
      setTimeout(() => {
        window.location.href = '../Page4/fourth_page.html'; // Automatically proceed to the fourth page
      }, 500); // Delay for 1 second before advancing to the next page
    });
  });
});