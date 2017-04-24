var React = require('react');
var ReactDOM = require('react-dom');
var store = require('./demo1-module1.js');

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: []
        };
        this.getData();
    }

    render() {
        var self = this;
        var messages = this.state.messageList;
        var arr = [];

        messages.forEach(function(em) {
            arr.push(<li key={em}> {em} </li>);
        });

        return <section className = "pageContentInner">
            <div className = "head-section"><h1>MessageList: </h1></div>
            <ul>
                {arr}
            </ul>
        </section>;
    }

    getData() {
        var self = this;
        store.getAllData(function(data) {
            var i = 0;
            var len = data.length;
            var messageListArr = [];
            for(; i < len; i++) {
                messageListArr[i] = data[i].Message;
            }
            self.setState({
                messageList: messageListArr
            });
            console.log(self.state.messageList);
        })
    }
}
console.log('start React');

ReactDOM.render(
    <MessageList />,
    document.getElementById('main-container')
);