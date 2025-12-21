// Side panel script
document.addEventListener('DOMContentLoaded', function() {
  const userInput = document.getElementById('user-input');
  const submitBtn = document.getElementById('submit-btn');
  const outputArea = document.getElementById('output-area');

  submitBtn.addEventListener('click', function() {
    const text = userInput.value.trim();
    if (text) {
      const div = document.createElement('div');
      div.textContent = text;
      div.setAttribute('data-testid', 'output-item');
      outputArea.appendChild(div);
    }
  });
});