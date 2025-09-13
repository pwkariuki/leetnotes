// Background script for LeetNotes extension
console.log('LeetNotes background script loaded');

// Listen for extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('LeetNotes extension installed');
});

