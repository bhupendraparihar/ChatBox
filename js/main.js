const app = (function(){

    let createNewChatBoxBtn;

    return {
        init: function() {
            this.cacheElements();
            this.bindEvents();
        },
        cacheElements: function() {
            createNewChatBoxBtn = document.getElementById('create-new-chatbox');
        },
        bindEvents: function() {
            let that = this;
            createNewChatBoxBtn.addEventListener('click', function(){
                // create new instance
                that.createNewInstance();
            });
        },
        createNewInstance: function() {
            var chatbox = new ChatBox();
            document.body.appendChild(chatbox.element);
        }
    }
})();

app.init();