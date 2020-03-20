const correctAnswers = ['B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
form.addEventListener('submit', e => {
  e.preventDefault(); //prevent refreshing page
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value];
  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 50;
    }
  });
});
