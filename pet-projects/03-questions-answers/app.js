document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.fa-plus');

  const toggleAnswer = (toggle) => {
    const qna = toggle.closest('.qna');
    const answer = toggle.parentElement.nextElementSibling;
    if (answer.style.display == 'block') {
      answer.style.display = 'none';
      toggle.classList.remove('fa-minus');
      toggle.classList.add('fa-plus');
      qna.style.background = '#fff';
    } else {
      answer.style.display = 'block';
      toggle.classList.remove('fa-plus');
      toggle.classList.add('fa-minus');
      qna.style.background = '#F0F4FD';
    }
  };
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => toggleAnswer(toggle));
  });
});