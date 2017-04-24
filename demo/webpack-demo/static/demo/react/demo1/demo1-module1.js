var EventEmitter = require('events').EventEmitter;

class Store_MessageList extends EventEmitter{
    constructor() {
        this.allData = null;
    }

    getAllData(callback) {
        fetch(
            "/data/react-demo1-getMessageList",
            {
                method: 'POST'
            }
        ).then(function(res) {
            if(res.ok) {
                res.json().then(function(data) {
                    self.allData = data;
                    callback(self.allData);
                });
            } else {
                console.log("Looks like the response wasn't perfect, got status", res.status);
            }
        }, function(e) {
            console.log("Fetch failed!", e);
        });
    }
}

module.exports = new Store_MessageList();