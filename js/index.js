"use strict";

const chat = {
    author: "yourName",
    init() {
        this.fetchMessages();
        this.renderMessage();
    },
    sendMessage() {

    },
    fetchMessages() {
        console.log('fetching...');
        fetch('https://dev2chat.onrender.com/messages')
            .then(function (response) {
                return response.json();
            })
            .then(function (messages) {
                console.log(messages);
                const message = messages[0];
                console.log(message);
            });
    },

    renderMessage(message) {
        let htmlstring = `
        <div class="messageItem">
                  <div class="header">
                      <span class="author">${message.author}</span>
                      <span class="time">00:00</span>
                  </div>
                  <p>
                  ${message.message}
                  </p>
              </div>`;
        document.querySelector("#messageContainer").insertAdjecentHTML('beforeend', htmlstring);
    }

};

chat.init();