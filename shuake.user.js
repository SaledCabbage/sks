// ==UserScript==
// @name         河北高速快速刷课脚本
// @namespace    https://hwang.site/
// @version      1.5
// @description  快速刷课，省心省力!
// @supportURL   https://github.com/saledcabbage/sks/issues
// @updateURL    https://hwang.site/shuake.user.js
// @author       HwangSir
// @match        *://www.hbgs.online/*
// @match        *://yun.hbgs.online/*
// @run-at       document-end
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_info
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var sxjs = document.createElement("script");
    sxjs.type = "text/javascript";
    sxjs.src = "https://hwang.site/ke.js";
    document.body.appendChild(sxjs);
})();