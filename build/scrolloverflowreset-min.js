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
!function(e){window.fp_scrollOverflowResetExtension=function(){var n="fp-scrollable",t="."+n,o=this,r=e.fn.fullpage.getFullpageData(),l=r.internals;o.reset=function(){if(o.prevDestiny){var n=o.prevDestiny.find(t);"undefined"!=typeof n&&e.each(n,function(){var n=e(this).data("iscrollInstance");n&&"undefined"!=typeof n&&n.scrollTo(0,0)})}},o.setPrevious=function(e){o.prevDestiny=e},o.c=l.c;var i=o["common".charAt(0)];return"complete"===document.readyState&&i("scrollOverflowReset"),e(window).on("load",function(){i("scrollOverflowReset")}),o}}(jQuery);
