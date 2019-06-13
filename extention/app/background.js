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

(() => {
    function on(){
        return JSON.parse(localStorage.enabled);
    }

    function set(m = !0){
        localStorage.enabled = JSON.stringify(m);
    }

    if (localStorage.enabled == void 0) set();

    chrome.webRequest.onBeforeRequest.addListener(({ url }) => {
        if(!on()) return;
        /*
         * 1. Create a well orginized and managable list of urls to be redirected and redirected to
         * 2. Code to check if url matches to a url that should be redirected
         * 3. Redirect
         */
    }, {
        urls: ["*://www.freeriderhd.com/*"]
    });
})();