(function(n) {
    window.JYAPP = n || {},
    window.JYAPP = {
        activitybindaccount: function() {
            var n = this;
            this.randNum = "",
            this.isNeedVCode = 0,
            this.userAcount = "",
            this.initialize = function() {
                n.getValidCodeState(),
                n.bindSubmit()
            }
            ,
            this.getVcodeImage = function() {
                var t = this;
                n.showVCode(),
                $("#imgvcode").click(function() {
                    n.showVCode()
                }
                )
            }
            ,
            this.showVCode = function() {
                n.randNum = Math.random(),
                $("#imgvcode").attr("src", "/External/YZM?randNum=" + n.randNum)
            }
            ,
            this.getValidCodeState = function() {
                var t = {
                    userId: n.userAcount
                };
                $.ajaxPost("/External/IsNeedValidCodeBind", t, function(t) {
                    +t && (n.isNeedVCode = 1,
                    $("#yzmbox").show(),
                    n.getVcodeImage())
                }
                )
            }
            ,
            this.showMask = function() {
                var n = document.createElement("div");
                n.className = "pop-mask",
                $("body").prepend(n),
                $(".pop-mask").bind("touchstart", function(n) {
                    n.preventDefault()
                }
                ).bind("touchmove", function(n) {
                    n.preventDefault()
                }
                )
            }
            ,
            this.closeMask = function() {
                $(".pop-mask").unbind("touchstart").unbind("touchmove").remove()
            }
            ,
            this.dialog = function(n, t, i) {
                $("body").popup({
                    title: n || "",
                    message: t || "网络繁忙,请稍后再试！",
                    popClass: "style2",
                    ok: "确定",
                    onOk: function() {
                        i && i()
                    },
                    cnacel: ""
                })
            }
            ,
            this.validate_rules = {
                zjzh: function() {
                    var t = $("#fundAccount").val().trim();
                    return t ? /^\d{3}?\*{4}\d{4}?$/.test(t) ? !0 : /^\d{12}?$/.test(t) ? !0 : (n.dialog("", "您输入的信息有误，请重新输入！"),
                    !1) : (n.dialog("", "请输入资金账号！"),
                    !1)
                },
                pwd: function() {
                    var t = $("#tradePassword").val().trim();
                    return t ? !0 : (n.dialog("", "请输入交易密码！"),
                    !1)
                },
                imgyzm: function() {
                    var t = $("#verificateCode").val().trim();
                    return n.isNeedVCode && !t ? (n.dialog("", "请输入验证码！"),
                    !1) : !0
                }
            },
            this.validate = function() {
                for (var t in n.validate_rules)
                    if (n.validate_rules[t].apply(this, arguments) === !1)
                        return !1
            }
            ,
            this.bindSubmit = function() {
                $("#btnSubmit").click(function() {
                    return n.doSubmit(),
                    !1
                }
                )
            }
            ,
            this.unbindSubmit = function() {
                $("#btnConfirm").unbind("click")
            }
            ,
            this.doSubmit = function() {
                var t, i;
                if (n.validate() !== !1) {
                    if (t = $("#fundAccount").val(),
                    n.userAcount = /^\d{3}?\*{4}\d{4}?$/.test(t) ? n.userAcount : t,
                    !/^\d{12}?$/.test(n.userAcount)) {
                        n.dialog("", "您输入的信息有误，请重新输入！");
                        return
                    }
                    n.userAcount && (i = {
                        userId: n.userAcount,
                        password: $("#tradePassword").val(),
                        identifyCode: $("#verificateCode").val(),
                        randNumber: n.randNum,
                        type: "Z"
                    },
                    $.ajaxPost("/External/ActivityAuthBindAccount", i, function(t) {
                        if (t)
                            if (t.Status == 0) {
                                var i = t.Message;
                                i = decodeURIComponent(i),
                                location.href = i
                            } else
                                n.dialog("", filterMsg(t.Message)),
                                n.getValidCodeState();
                        else
                            n.dialog("", "网络繁忙,请稍后再试！");
                        newCloseLoading()
                    }
                    , function() {
                        newCloseLoading(),
                        n.dialog("", "账户绑定失败,请检查网络！")
                    }
                    , function() {
                        newShowLoading("正在绑定账户")
                    }
                    ))
                }
            }
        }
    },
    window.activitybindaccount = new JYAPP.activitybindaccount
}
)(window.JYAPP)
