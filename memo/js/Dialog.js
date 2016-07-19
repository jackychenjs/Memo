; (function (window, $) {

    var doc = document, body = doc.body;

    var defaultOpts = {
        dom: '',
        width: 250,
        mask: true,
        content: '',
        className: ''
    };

    var Dialog = ( function() {

        var fuc = {

            init: function(opts){

                var options = this.opts = $.extend(defaultOpts, opts || {}), self = this;

                this.mask = new Mask();

                this.wrapper = options.dom ? $(options.dom).addClass('ui-dialog').css('width', options.width).appendTo(body) : $('<div class="ui-dialog"><div class="ui-dialog-header"></div><div class="ui-dialog-content"></div></div>').css('width', options.width).appendTo(body);

                options.className ? this.wrapper.addClass(options.className) : '';

                fuc.bindEvent.call(this);
            },

            bindEvent: function(){
                var self = this;
                $(window).on('resize', function () {
                    self.resetPosition();
                });
            }
        };

        var dialog = function(opts){

            fuc.init.apply(this, arguments);

            return this;
        }

        dialog.prototype = {

            close: function () {
                this.mask && this.mask.close();
                //this.wrapper.hide();
                this.wrapper.css('display', 'none');
            },

            open: function () {
                this.mask && this.mask.open();
                //this.wrapper.show();
                this.wrapper.css('display', 'block');
                this.resetPosition();
            },

            resetPosition: function () {
                var self = this;

                this.mask && this.mask.resetPosition();
                
                this.wrapper.css({
                    left: parseInt(($(body).width() - self.wrapper.width()) / 2),
                    top: parseInt(($(body).height() - self.wrapper.height()) / 2),
                    position: 'fixed'
                });
            }
        };

        return dialog;

    } )();

    var Mask = ( function() {

        var fuc = {
            init: function(opts) {

                this.options = $.extend({
                    autoOpen: true,
                    dom: doc.body,
                    color: '#000',
                    opacity: 0.6
                }, opts || {});

                this.mask = $('<div class="ui-mask">').hide().css({

                }).appendTo(doc.body);

                fuc.bindEvent.call(this);
            },

            bindEvent: function(){
                var self = this;
                $(window).on('resize', function () {
                    self.resetPosition();
                });
            }
        };

        var mask = function(){

            fuc.init.apply(this, arguments);

            return this;  
        };

        mask.prototype = {

            resetPosition: function () {
                this.mask.css({
                    width: body.scrollWidth || doc.docElement.scrollWidth,
                    height: body.scrollHeight || doc.docElement.scrollHeight
                });
            },

            open: function () {
                this.resetPosition();
                this.mask.css('display', 'block');
            },

            close: function () {
                this.mask.css('display', 'none');
            }
        };

        return mask;

    } )();


    var Tips = {
        show: function(content, timeout, mask, classname) {
            var dialog = new Dialog({
                width: 250,
                mask: true,
                content: content,
                className: classname,
                timeout: timeout
            });

            Tips.instance = dialog;

            dialog.open();
        }
    };

    $.each(['success', 'error', 'warn', 'loading'], function(index, item){
        Tips[item] = function(content, timeout, mask){
            return Tips.show(content, timeout, mask, 'ui-tips-' + item);
        };
    });

    window.ksDialog = Dialog;
    window.ksMask = Mask;
    window.ksTips = Tips;

})(window, $);