/*!
* fullpage.js Reset Scroll Overflow
* https://github.com/alvarotrigo/fullPage.js
*
* This code has been bought from www.alvarotrigo.com/fullPage/extensions/ and it is not free to use or distrubute.
* Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
*
* To be used in the following way:
*
* afterLoad: function(anchorLink, index) {
* resetScroll.reset();
* },
* onLeave: function(index, nextIndex, direction) {
* resetScroll.setPrevious($(this));
* }
*/
!(function (e) { window.fp_scrollOverflowResetExtension = function () { const n = 'fp-scrollable'; const t = `.${n}`; const o = this; const r = e.fn.fullpage.getFullpageData(); const l = r.internals; o.reset = function () { if (o.prevDestiny) { const n = o.prevDestiny.find(t); typeof n !== 'undefined' && e.each(n, function () { const n = e(this).data('iscrollInstance'); n && typeof n !== 'undefined' && n.scrollTo(0, 0) }) } }, o.setPrevious = function (e) { o.prevDestiny = e }, o.c = l.c; const i = o['common'.charAt(0)]; return document.readyState === 'complete' && i('scrollOverflowReset'), e(window).on('load', () => { i('scrollOverflowReset') }), o } }(jQuery));
