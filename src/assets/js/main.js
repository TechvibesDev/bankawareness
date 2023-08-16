function initialize() {
    ! function(i) {
        i.fn.theiaStickySidebar = function(t) {
            var e, o, a, s, n;

            function d(t, e) {
                return !0 === t.initialized || !(i(".main").width() < t.minWidth) && (function(t, e) {
                    // alert(i(".main").width());
                    t.initialized = !0, 0 === i("#theia-sticky-sidebar-stylesheet-" + t.namespace).length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function() {
                        var e = {};
                        if (e.sidebar = i(this), e.options = t || {}, e.container = i(e.options.containerSelector), 0 == e.container.length && (e.container = e.sidebar.parent()), e.sidebar.parent().css("-webkit-transform", "none"), e.sidebar.css({ position: e.options.defaultPosition, overflow: "visible", "-webkit-box-sizing": "border-box", "-moz-box-sizing": "border-box", "box-sizing": "border-box" }), e.stickySidebar = e.sidebar.find(".theiaStickySidebar"), 0 == e.stickySidebar.length) {

                            e.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()), e.sidebar.append(e.stickySidebar)
                        }
                        e.marginBottom = parseInt(e.sidebar.css("margin-bottom")), e.paddingTop = parseInt(e.sidebar.css("padding-top")), e.paddingBottom = parseInt(e.sidebar.css("padding-bottom"));
                        var a, s, n, d = e.stickySidebar.offset().top,
                            c = e.stickySidebar.outerHeight();

                        function p() {
                            e.fixedScrollTop = 0, e.sidebar.css({ "min-height": "1px" }), e.stickySidebar.css({ position: "static", width: "", transform: "none" })
                        }
                        e.stickySidebar.css("padding-top", 1), e.stickySidebar.css("padding-bottom", 1), d -= e.stickySidebar.offset().top, c = e.stickySidebar.outerHeight() - c - d, 0 == d ? (e.stickySidebar.css("padding-top", 0), e.stickySidebarPaddingTop = 0) : e.stickySidebarPaddingTop = 1, 0 == c ? (e.stickySidebar.css("padding-bottom", 0), e.stickySidebarPaddingBottom = 0) : e.stickySidebarPaddingBottom = 1, e.previousScrollTop = null, e.fixedScrollTop = 0, p(), e.onScroll = function(e) {
                            if (e.stickySidebar.is(":visible"))
                                if (i(".main").width() < e.options.minWidth)
                                    p();
                                else {
                                    if (e.options.disableOnResponsiveLayouts)
                                        if (e.sidebar.outerWidth("none" == e.sidebar.css("float")) + 50 > e.container.width())
                                            return void p();
                                    var o, a, s = i(document).scrollTop(),
                                        n = "static";
                                    if (s >= e.sidebar.offset().top + (e.paddingTop - e.options.additionalMarginTop)) {
                                        var d, c = e.paddingTop + t.additionalMarginTop,
                                            b = e.paddingBottom + e.marginBottom + t.additionalMarginBottom,
                                            l = e.sidebar.offset().top,
                                            h = e.sidebar.offset().top + (o = e.container, a = o.height(), o.children().each(function() {
                                                a = Math.max(a, i(this).height())
                                            }), a),
                                            f = 0 + t.additionalMarginTop;
                                        d = e.stickySidebar.outerHeight() + c + b < i(window).height() ? f + e.stickySidebar.outerHeight() : i(window).height() - e.marginBottom - e.paddingBottom - t.additionalMarginBottom;
                                        var g = l - s + e.paddingTop,
                                            S = h - s - e.paddingBottom - e.marginBottom,
                                            m = e.stickySidebar.offset().top - s,
                                            y = e.previousScrollTop - s;
                                        "fixed" == e.stickySidebar.css("position") && "modern" == e.options.sidebarBehavior && (m += y), "stick-to-top" == e.options.sidebarBehavior && (m = t.additionalMarginTop), "stick-to-bottom" == e.options.sidebarBehavior && (m = d - e.stickySidebar.outerHeight()), m = 0 < y ? Math.min(m, f) : Math.max(m, d - e.stickySidebar.outerHeight()), m = Math.max(m, g), m = Math.min(m, S - e.stickySidebar.outerHeight());
                                        var u = e.container.height() == e.stickySidebar.outerHeight();
                                        n = !u && m == f || !u && m == d - e.stickySidebar.outerHeight() ? "fixed" : s + m - e.sidebar.offset().top - e.paddingTop <= t.additionalMarginTop ? "static" : "absolute"
                                    }
                                    if ("fixed" == n) {
                                        var k = i(document).scrollLeft();
                                        e.stickySidebar.css({ position: "fixed", width: r(e.stickySidebar) + "px", transform: "translateY(" + m + "px)", left: e.sidebar.offset().left + parseInt(e.sidebar.css("padding-left")) - k + "px", top: "0px" })
                                    } else if ("absolute" == n) {
                                        var v = {};
                                        "absolute" != e.stickySidebar.css("position") && (v.position = "absolute", v.transform = "translateY(" + (s + m - e.sidebar.offset().top - e.stickySidebarPaddingTop - e.stickySidebarPaddingBottom) + "px)", v.top = "0px"), v.width = r(e.stickySidebar) + "px", v.left = "", e.stickySidebar.css(v)
                                    } else
                                        "static" == n && p();
                                    "static" != n && 1 == e.options.updateSidebarHeight && e.sidebar.css({ "min-height": e.stickySidebar.outerHeight() + e.stickySidebar.offset().top - e.sidebar.offset().top + e.paddingBottom }), e.previousScrollTop = s
                                }
                        }, e.onScroll(e), i(document).on("scroll." + e.options.namespace, (a = e, function() {
                            a.onScroll(a)
                        })), i(window).on("resize." + e.options.namespace, (s = e, function() {
                            s.stickySidebar.css({ position: "static" }), s.onScroll(s)
                        })), "undefined" != typeof ResizeSensor && new ResizeSensor(e.stickySidebar[0], (n = e, function() {
                            n.onScroll(n)
                        }))
                    })
                }(t, e), !0)
            }

            function r(i) {
                var t;
                try {
                    t = i[0].getBoundingClientRect().width
                } catch (i) {}
                return void 0 === t && (t = i.width()), t
            }
            return (t = i.extend({ containerSelector: "", additionalMarginTop: 0, additionalMarginBottom: 0, updateSidebarHeight: !0, minWidth: 0, disableOnResponsiveLayouts: !0, sidebarBehavior: "modern", defaultPosition: "relative", namespace: "TSS" }, t)).additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, d(e = t, this) || (console.log("TSS: .main width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + e.namespace, (s = e, n = this, function(t) {
                d(s, n) && i(this).unbind(t)
            })), i(window).on("resize." + e.namespace, (o = e, a = this, function(t) {
                d(o, a) && i(this).unbind(t)
            }))), this
        }
    }(jQuery);
    /*! pbtMenu by Divine mark | v1.0.0 -  */
    ! function(a) {
        a.fn.pbtMenu = function() {
            return this.each(function() {
                var $t = a(this),
                    b = $t.find('.LinkList ul > li').children('a'),
                    c = b.length;
                for (var i = 0; i < c; i++) {
                    var d = b.eq(i),
                        h = d.text();
                    if (h.charAt(0) !== '_') {
                        var e = b.eq(i + 1),
                            j = e.text();
                        if (j.charAt(0) === '_') {
                            var m = d.parent();
                            m.append('<ul class="sub-menu m-sub"/>');
                        }
                    }
                    if (h.charAt(0) === '_') {
                        d.text(h.replace('_', ''));
                        d.parent().appendTo(m.children('.sub-menu'));
                    }
                }
                for (var i = 0; i < c; i++) {
                    var f = b.eq(i),
                        k = f.text();
                    if (k.charAt(0) !== '_') {
                        var g = b.eq(i + 1),
                            l = g.text();
                        if (l.charAt(0) === '_') {
                            var n = f.parent();
                            n.append('<ul class="sub-menu2 m-sub"/>');
                        }
                    }
                    if (k.charAt(0) === '_') {
                        f.text(k.replace('_', ''));
                        f.parent().appendTo(n.children('.sub-menu2'));
                    }
                }
                $t.find('.LinkList ul li ul').parent('li').addClass('has-sub');
            });
        }
    }(jQuery);
    /*! pbtThumb by Divine Mark*/
    ! function(o) {
        o.fn.pbtThumb = function(n) {
            return n = o.extend({ onScroll: !0 }, n), this.each(function(t, c) {
                var e = o(this),
                    r = o(window),
                    a = e.data("image"),
                    l = "w" + Math.round(e.width() + e.width() / 10) + "-h" + Math.round(e.height() + e.height() / 10) + "-p-k-no-nu";

                function h() {
                    var o = new Image;
                    o.onload = function() {
                        e.attr("style", "background-image:url(" + this.src + ")").addClass("pbt-lazy")
                    }, o.src = t
                }
                a.match("localhost") && (a = "undefined" != typeof noThumbnail ? noThumbnail : "assets/images/ptb-nth.png"), a.match("localhost") && !a.match("=w") && (a += "=w72-h72-p-k-no-nu"), t = a.match("/s72-c") ? a.replace("/s72-c", "/" + l) : a.match("/w72-h") ? a.replace("/w72-h72-p-k-no-nu", "/" + l) : a.match("=w72-h") ? a.replace("=w72-h72-p-k-no-nu", "=" + l) : a, 1 == n.onScroll ? r.on("load resize scroll", function o() {
                    r.scrollTop() + r.height() >= e.offset().top && (r.off("load resize scroll", o), h())
                }).trigger("scroll") : r.on("load", function o() {
                    r.off("load", o), h()
                }).trigger("load")
            })
        }
    }(jQuery);
    /*! jQuery replaceText | v1.1.0  */
    ! function(e) {
        e.fn.replaceText = function(n, t, i) {
            return this.each(function() {
                var o, r, l = this.firstChild,
                    u = [];
                if (l)
                    do {
                        3 === l.nodeType && (r = (o = l.nodeValue).replace(n, t)) !== o && (!i && /</.test(r) ? (e(l).before(r), u.push(l)) : l.nodeValue = r)
                    } while (l = l.nextSibling);
                u.length && e(u).remove()
            })
        }
    }(jQuery);
    /*! Table of Contents | v0.4.1 */
    ! function(t) {
        "use strict";
        var n = function(n) {
                return this.each(function() {
                    var e, i, a = t(this),
                        o = a.data(),
                        c = [a],
                        r = this.tagName,
                        d = 0;
                    e = t.extend({ content: ".main", headings: "h1,h2,h3" }, { content: o.toc || void 0, headings: o.tocHeadings || void 0 }, n), i = e.headings.split(","), t(e.content).find(e.headings).attr("id", function(n, e) {
                        return e || function(t) {
                            0 === t.length && (t = "?");
                            for (var n = t.replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, "_"), e = "", i = 1; null !== document.getElementById(n + e);)
                                e = "_" + i++;
                            return n + e
                        }(t(this).text())
                    }).each(function() {
                        var n = t(this),
                            e = t.map(i, function(t, e) {
                                return n.is(t) ? e : void 0
                            })[0];
                        if (e > d) {
                            var a = c[0].children("li:last")[0];
                            a && c.unshift(t("<" + r + "/>").appendTo(a))
                        } else
                            c.splice(0, Math.min(d - e, Math.max(c.length - 1, 0)));
                        t("<li/>").appendTo(c[0]).append(t("<a/>").text(n.text()).attr("href", "#" + n.attr("id"))), d = e
                    })
                })
            },
            e = t.fn.toc;
        t.fn.toc = n, t.fn.toc.noConflict = function() {
            return t.fn.toc = e, this
        }, t(function() {
            n.call(t("[data-toc]"))
        })
    }(window.jQuery);

}
