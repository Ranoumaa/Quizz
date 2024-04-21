document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let score = 0;
  
    // Get the answers
    const answers = {
      q1: document.querySelector('input[name="q1"]:checked').value,
      q2: document.querySelector('input[name="q2"]:checked').value,
      // Add more answers here
    };
  
    // Calculate the score
    if (answers.q1 === 'A') {
      score++;
    }
    if (answers.q2 === 'C') {
      score++;
    }
    // Add more conditions for other questions
  
    // Display the result
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h2>Your Score: ${score}/10</h2>`;
  });
  