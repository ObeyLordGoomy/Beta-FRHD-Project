/* 
MIT License

Copyright (c) 2019 ObeyLordGoomy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

chrome.webRequest.onBeforeRequest.addListener(({ url }) => {
    const r = url.match(/https:\/\/cdn\.freeriderhd\.com\/free_rider_hd\/(styles\/application\/|assets\/styles\/combined\/gui\/)(frhd_app|combined)\.min/g);
    if (r == void 0 || r[0] == void 0 || r[1] == void 0) return;
    const nUrl = chrome.runtime.getURL(`css/${r[1]}.css`);
    return {
        redirectUrl: nUrl
    };
}, {
    urls: ['*://cdn.freeriderhd.com/*'],
    types: ['stylesheet']
}, ['blocking']);