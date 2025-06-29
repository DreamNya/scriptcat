// ==UserScript==
// @name         cat get tab info
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  如果当前页面是浏览器最后一个标签则打开指定页面。无论是否打开均关闭当前页面
// @author       DreamNya
// @match        file:///D:/indexPage.htm
// @grant        CAT_getTabInfo
// @grant        GM_openInTab
// @run-at       document-start
// ==/UserScript==

unsafeWindow.CAT_getTabInfo = CAT_getTabInfo;

const tabInfo = await CAT_getTabInfo();
if (tabInfo.length === 1) {
  GM_openInTab("chrome://extensions/", { active: true });
}

setTimeout(() => unsafeWindow.close(), 500);
