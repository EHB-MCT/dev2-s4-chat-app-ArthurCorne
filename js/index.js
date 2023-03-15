"use strict";

const chat = {
    author: "yourName",
    init() {
    },
    sendMessage() {
        this.fetchMessages();
    },
    fetchMessages() {
        fetch ('https://dev2chat.onrender.com/messages')
        .then(function(response){
    return response.json();
    })
    .then(function(messages){
console.log(messages);

    });
    },
    
    renderMessage(message) {
    }

};

chat.init();