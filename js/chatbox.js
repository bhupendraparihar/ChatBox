function ChatBox() {
    this.init();
}

ChatBox.prototype.init = function() {
    this.element = document.createElement('div');
    this.element.classList.add('chat-box');
    this.element.innerHTML = document.getElementById('chatbox-template').innerHTML;

    this.bindEvents();
}

ChatBox.prototype.bindEvents = function() {
    let that = this;
    let sendBtn = this.element.querySelector('.send');

    sendBtn.addEventListener('click', this.sendMessage.bind(this));

    document.body.addEventListener('new-message', function(event) {
        that.addMessagetoMessageList(event.detail);
    });
}

ChatBox.prototype.sendMessage = function() {
    let messageTextBox = this.element.querySelector('.message');
    var event = new CustomEvent('new-message',{ detail : messageTextBox.value });

    document.body.dispatchEvent(event);
}

ChatBox.prototype.addMessagetoMessageList = function(message) {
    let messageElement = document.createElement('p');
    let chatMessagesElement = this.element.querySelector('.chat-messages');
    
    messageElement.innerHTML = message;
    chatMessagesElement.appendChild(messageElement);
}

