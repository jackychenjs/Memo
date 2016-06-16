; (function (window, $) {

    var doc = document, body = doc.body;

    var Dialog = function (opts) {

        var options = this.opts = $.extend(defaultOpts, opts || {}), self = this;
        this.mask = new Mask();

        this.wrapper = $(options.dom).addClass('dcui-dialog-wrapper').css('width', options.width).appendTo(body);

        $(window).on('resize', function () {
            self.resetPosition();
        });

        return this;
    };

    var defaultOpts = {
        dom: '',
        width: 250,
        mask: true
    };

    Dialog.prototype = {

        close: function () {
            this.mask && this.mask.close();
            this.wrapper.hide();
        },

        open: function () {
            this.mask && this.mask.open();
            this.wrapper.show();
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

    var Mask = function (opts) {

        var self = this;

        this.options = $.extend({
            autoOpen: true,
            dom: doc.body,
            color: '#000',
            opacity: 0.6
        }, opts || {});

        this.mask = $('<div class="dcui-mask">').hide().css({

        }).appendTo(doc.body);

        $(window).on('resize', function () {
            self.resetPosition();
        });

        return this;
    };

    Mask.prototype = {

        resetPosition: function () {
            this.mask.css({
                width: body.scrollWidth || doc.docElement.scrollWidth,
                height: body.scrollHeight || doc.docElement.scrollHeight
            });
        },

        open: function () {
            this.resetPosition();
            this.mask.show();
        },

        close: function () {
            this.mask.hide();
        }
    }

    window.dcUI = window.dcUI || {};
    window.dcUI.Dialog = Dialog;

})(window, $);