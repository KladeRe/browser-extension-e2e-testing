// Get elements
const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');

// Key for chrome.storage.local
const COUNTER_KEY = 'counterValue';

// Load counter from chrome.storage.local
async function loadCounter() {
  const result = await chrome.storage.local.get([COUNTER_KEY]);
  return result[COUNTER_KEY] !== undefined ? result[COUNTER_KEY] : 0;
}

// Save counter to chrome.storage.local
async function saveCounter(value) {
  await chrome.storage.local.set({ [COUNTER_KEY]: value });
}

// Update the display
function updateDisplay(value) {
  counterDisplay.textContent = value;
}

// Initialize counter
(async () => {
  let counter = await loadCounter();
  updateDisplay(counter);

  // Increment button handler
  incrementBtn.addEventListener('click', async () => {
    counter++;
    await saveCounter(counter);
    updateDisplay(counter);
  });

  // Reset button handler
  resetBtn.addEventListener('click', async () => {
    counter = 0;
    await saveCounter(counter);
    updateDisplay(counter);
  });
})();
