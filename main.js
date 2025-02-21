// ==UserScript==
// @name         Auto Copy FXTwitter URL
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Automatically copy X.com URLs as FXTwitter when copied
// @author       You
// @match        *://x.com/*
// @match        *://twitter.com/*
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';

    function modifyCopiedURL(event) {
        let clipboardData = event.clipboardData || window.clipboardData;
        let text = window.getSelection().toString() || clipboardData.getData('text');
        if (text.includes('x.com') || text.includes('twitter.com')) {
            let newUrl = text.replace(/(x|twitter)\.com/, 'fxtwitter.com');
            clipboardData.setData('text', newUrl);
            event.preventDefault();
            //alert('Modified URL copied: ' + newUrl);
        }
    }

    document.addEventListener('copy', modifyCopiedURL);
})();
