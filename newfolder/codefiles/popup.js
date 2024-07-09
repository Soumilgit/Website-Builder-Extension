document.getElementById('checkButton').addEventListener('click', () => {
    const url = document.getElementById('urlInput').value;
    chrome.runtime.sendMessage({type: "CHECK_URL", url: url}, response => {
        document.getElementById('result').innerText = response.message;
    });
});
