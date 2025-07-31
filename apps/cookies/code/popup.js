// Hardcoded values for the cookie to look for
const TARGET_DOMAIN = 'www.test.com';
const TARGET_COOKIE_NAME = 'CookieTest';

// DOM elements
const resultDiv = document.getElementById('result');
const checkCookieBtn = document.getElementById('checkCookie');

// Event listeners
checkCookieBtn.addEventListener('click', checkForCookie);

// Auto-check for cookie when popup opens
document.addEventListener('DOMContentLoaded', checkForCookie);

async function checkForCookie() {
  try {
    showLoading();

    // Query for the specific hardcoded cookie
    const cookies = await chrome.cookies.getAll({
      domain: TARGET_DOMAIN,
      name: TARGET_COOKIE_NAME
    });

    if (cookies.length === 0) {
      showError(`Cookie "${TARGET_COOKIE_NAME}" not found on domain "${TARGET_DOMAIN}"`);
      return;
    }

    // Display the cookie value
    const cookie = cookies[0];
    showCookieResult(cookie);

  } catch (error) {
    showError(`Error reading cookie: ${error.message}`);
  }
}

function showLoading() {
  resultDiv.innerHTML = '<div class="loading">🔍 Checking for cookie...</div>';
}

function showError(message) {
  resultDiv.innerHTML = `<div class="error">❌ ${message}</div>`;
}

function showCookieResult(cookie) {
  const cookieInfo = `
    <div class="cookie-result">
      <h3>🍪 Cookie Found!</h3>
      <p><strong>Name:</strong> ${escapeHtml(cookie.name)}</p>
      <p><strong>Domain:</strong> ${escapeHtml(cookie.domain)}</p>
      <p><strong>Value:</strong></p>
      <div class="cookie-value">${escapeHtml(cookie.value)}</div>
    </div>
  `;
  resultDiv.innerHTML = cookieInfo;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

async function readCookie() {
  const siteUrl = siteUrlInput.value.trim();
  const cookieName = cookieNameInput.value.trim();

  if (!siteUrl || !cookieName) {
    showError('Please enter both website URL and cookie name');
    return;
  }

  try {
    showLoading();

    // Parse URL to get domain
    const url = new URL(siteUrl);
    const domain = url.hostname;

    // Query for the specific cookie
    const cookies = await chrome.cookies.getAll({
      domain: domain,
      name: cookieName
    });

    if (cookies.length === 0) {
      showError(`Cookie "${cookieName}" not found on domain "${domain}"`);
      return;
    }

    // Display the cookie information
    const cookie = cookies[0];
    showCookieResult(cookie);

  } catch (error) {
    showError(`Error reading cookie: ${error.message}`);
  }
}

async function useCurrentTab() {
  try {
    // Get the current active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (tab && tab.url) {
      const url = new URL(tab.url);
      siteUrlInput.value = `${url.protocol}//${url.hostname}`;
    } else {
      showError('Could not get current tab URL');
    }
  } catch (error) {
    showError(`Error getting current tab: ${error.message}`);
  }
}

function showLoading() {
  resultDiv.innerHTML = '<div class="loading">🔍 Reading cookie...</div>';
}

function showError(message) {
  resultDiv.innerHTML = `<div class="error">❌ ${message}</div>`;
}

function showCookieResult(cookie) {
  const cookieInfo = `
    <div class="cookie-result">
      <h3>🍪 Cookie Found!</h3>
      <p><strong>Name:</strong> ${escapeHtml(cookie.name)}</p>
      <p><strong>Domain:</strong> ${escapeHtml(cookie.domain)}</p>
      <p><strong>Path:</strong> ${escapeHtml(cookie.path)}</p>
      <p><strong>Secure:</strong> ${cookie.secure ? 'Yes' : 'No'}</p>
      <p><strong>HTTP Only:</strong> ${cookie.httpOnly ? 'Yes' : 'No'}</p>
      <p><strong>SameSite:</strong> ${escapeHtml(cookie.sameSite || 'not specified')}</p>
      <p><strong>Expires:</strong> ${cookie.expirationDate ? new Date(cookie.expirationDate * 1000).toLocaleString() : 'Session cookie'}</p>
      <p><strong>Value:</strong></p>
      <div class="cookie-value">${escapeHtml(cookie.value)}</div>
    </div>
  `;
  resultDiv.innerHTML = cookieInfo;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

async function addTestCookie() {
  try {
    await chrome.cookies.set({
      url: 'https://keybr.com',
      name: 'CookieConsent',
      value: 'test_value_123',
      path: '/'
    });
  } catch (error) {
    console.log('Could not set test cookie:', error);
  }
}

// Set a test cookie when the extension loads (for demonstration)
addTestCookie();