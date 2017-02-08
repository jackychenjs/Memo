;(function (win) {
    var body = win.document.body;

    var container = document.createElement("div");

    container.style.height = "200px";
    container.style.overflow = "scroll";
    container.id = "Jky_test_container";

    var jackyLog = function (platform) {

        this.container = container;
        body.appendChild(container);

        return this;
    }

    jackyLog.prototype = {
        destory: function(){
            body.removeChild(container);
        },
        init: function(){
            this.destory();
            while(container.hasChildNodes()){
                container.removeChild(container.firstChild);
            }
            body.appendChild(container);
        },
        restore: function(){
            body.appendChild(container);
        },
        showLog: function () {
            var i = 1;
            for(; i <= arguments.length; i++) {
                var logRow = document.createElement("p"),
                    logText = document.createTextNode(i + 1 + ": " + arguments[i]);
                logRow.appendChild(logText);
                this.container.appendChild(logRow);
            }
            this.showCutOff();

            container.scrollTop = container.scrollHeight;
        },
        showCutOff: function(){
            var row = document.createElement("p"),
                text = document.createTextNode("********************************");
            row.appendChild(text);
            this.container.appendChild(row);

            container.scrollTop = container.scrollHeight;
        }
    };

    win.jkyLog = jackyLog;
})(window);
