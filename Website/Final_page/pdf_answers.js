pdfMake.vfs = pdfFonts.pdfMake.vfs;

const answers = JSON.parse(localStorage);

// Format the answers into a suitable structure for PDF generation
const formattedAnswers = formatAnswersForPDF(answers);

function formatAnswersForPDF(answers) {
  // Format the answers into a structured format
  // based on your specific requirements
  // Example:
  const formattedAnswers = [];
  for (const question in answers) {
    formattedAnswers.push({
      question: question,
      answer: answers[question]
    });
  }
  return formattedAnswers;
}

function generatePDF(answers) {
  const docDefinition = {
    content: [
      // PDF content here, based on the formatted answers
      'Questionnaire Answers:',
      {
        ul: answers.map(answer => `${answer.question}: ${answer.answer}`)
      }
    ]
  };

  pdfMake.createPdf(docDefinition).download('Questionnaire_answers.pdf');
}

generatePDF(formattedAnswers);
