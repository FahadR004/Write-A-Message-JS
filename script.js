function showMessageContent(message) {

    const messageContent = document.querySelector(".message");
    messageContent.textContent = `"${message} - Your message
    was delivered"`;

    messageContent.style.display = "block"; // This runs immediately setting the display to block.
    // Block is changed to none after five seconds for every message

    setTimeout(()=> {  // This is asynchronous meaning run after five seconds.
        messageContent.style.display = "none";
    }, 5000);


}

function showInvalidMessage() {
    const invalidMessage = document.querySelector(".invalid-message");
    invalidMessage.style.display = "block";
    setTimeout(()=> {
        invalidMessage.style.display = "none";
    }, 2000);
}

function submitForm (e) {

    e.preventDefault(); // Data will be send to the URL, so we're preventing that.

    const messageInput = document.querySelector(".msg-input");
    const message = messageInput.value.trim();

    if (message === "") {
        showInvalidMessage();

    } else {
        showMessageContent(message);
    }
}


(function() {
    const form = document.querySelector(".container");
    form.addEventListener("submit", submitForm);
})()