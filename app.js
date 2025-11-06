const notepad = document.getElementById('notepad');
const display = document.getElementById('display-panel');

notepad.addEventListener('input', (e) => {
  chrome.runtime.sendMessage({
    type: 'TEXT_UPDATE',
    payload: e.target.value
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'DISPLAY_UPDATE') {
    display.textContent = message.payload;
  }
});