// background.js

// This script manages the background tasks for the Instagram Agent extension.

chrome.runtime.onInstalled.addListener(() => {
    console.log('Instagram Agent extension installed.');
    // Initialization tasks can be added here.
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'performAction') {
        // Handle actions received from the extension
        console.log(request.data);
        sendResponse({status: 'success'});
    }
});

// Additional background functionalities can be implemented here.