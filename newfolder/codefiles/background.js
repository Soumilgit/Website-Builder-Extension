let websiteExists = false; // Simulate a variable that tracks if the website exists

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "CHECK_URL") {
        // Simulate checking if the website exists
        // In a real application, this could involve making an HTTP request to the website
        // or querying a database/list of known URLs
        if (!websiteExists) {
            message = "Website does not exist";
        } else {
            message = "Website exists";
        }

        sendResponse({message: message});
    }
    return true; // Keeps the message channel open until sendResponse is called
});
