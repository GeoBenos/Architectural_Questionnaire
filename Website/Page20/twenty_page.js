document.addEventListener('DOMContentLoaded', function() {
    const progress = document.querySelector('.progress');
    const choices = document.querySelectorAll('button');
    const currentPage = 20;
    const totalPages = 30;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
    
  
    progress.style.width = progressPercentage + "%";
    pageTwentyAnswers = {};
  
    choices.forEach(function(choice) {
      choice.addEventListener('click', function() {
        const selectedValue = this.value;
        var pageTwentyTitle = document.getElementsByClassName('third_page_question')[0].innerHTML;
        localStorage.setItem('selectedValue', selectedValue);
        console.log("Selected value in Page 20: " + selectedValue);
        pageTwentyAnswers[pageTwentyTitle + ": user answer"] = selectedValue;
        var jsonAnswers = JSON.stringify(pageTwentyAnswers);
        localStorage.setItem('Page 20 answers', jsonAnswers);
        console.log(jsonAnswers);
        console.log(localStorage);
        setTimeout(() => {
          window.location.href = '../Page21/twentyone_page.html'; // Automatically proceed to the fourth page
        }, 10000); // Delay for 1 second before advancing to the next page
      });
    });

  });