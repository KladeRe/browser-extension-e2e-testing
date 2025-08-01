(function() {

  // Prevent multiple injections
  if (window.hasContentScriptUI) {
    return;
  }
  window.hasContentScriptUI = true;

  const container = document.createElement('div');
  container.id = 'content-script-ui-container';
  container.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    background: white;
    border: 2px solid #000;
    padding: 10px;
    width: 250px;
  `;

  container.innerHTML = `
    <div id="content-script-panel">
      <h3>Extension UI</h3>
      <button id="close-btn">Close</button>
    </div>
  `;

  document.body.appendChild(container);

  document.getElementById('close-btn').addEventListener('click', function() {
    container.style.display = 'none';
  });

  console.log('Basic Content Script UI injected successfully');
})();