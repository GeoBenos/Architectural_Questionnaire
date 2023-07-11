document.addEventListener('DOMContentLoaded', function() {
    // const userName = document.getElementById('userName');
    // const StoredUserName = localStorage.getItem('userName');
    const answerInput = document.getElementById('answer');
    const nextButton = document.getElementById('nextPage');
    const progress = document.querySelector('.progress');
    const messageContainer = document.createElement('div');
    const currentPage = 19;
    const totalPages = 30;
    const progressPercentage = (currentPage - 1) / (totalPages - 1) * 100;
  
    progress.style.width = progressPercentage + "%";
  
    messageContainer.classList.add('message-container');

    let pageNineteenAnswers = {};
    nextButton.addEventListener('click', function(e) {
      if (answerInput.value.trim() === '') {
        e.preventDefault();
      }else{
      pageNineteenAnswers = {};
      var nineteenPagetitle = document.querySelector('.third_page_question').innerHTML.trim();
      pageNineteenAnswers[nineteenPagetitle + ": user input"] = answerInput.value.trim();
      var jsonAnswers = JSON.stringify(pageNineteenAnswers);
      localStorage.setItem('Page 19 answers', jsonAnswers);
      console.log(jsonAnswers);
      }
    });
  
    answerInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        if (answerInput.value.trim() === '') {
          event.preventDefault();
        } else {
          pageNineteenAnswers = {};
          var nineteenPagetitle = document.querySelector('.third_page_question').innerHTML.trim();
          pageNineteenAnswers[nineteenPagetitle + ": user input"] = answerInput.value.trim();
          var jsonAnswers = JSON.stringify(pageNineteenAnswers);
          localStorage.setItem('Page 19 answers', jsonAnswers);
          console.log(jsonAnswers);
          setTimeout(() => {
            window.location.href = '../Page20/twenty_page.html'; // Automatically proceed to the fourth page
          }, 500); // Delay for 0.5 seconds before advancing to the next page
        }
      }
    });
  });
  