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
    const page = document.location.href,
        loc = document.location.pathname.toLocaleLowerCase().slice(1).split('/');

    setInterval(()=>{
        if(document.location.href != page) return document.location.reload();
    }, 1000);
    if(loc[0] == 'u' && (loc[1] == 'obeylordgoomy'||loc[1] == 'calculus')){
        $('.profile-username').after('<div class="flex-item flex-item-no-shrink"><span class="admin_icon profile-badge" title="BetaFRHD Admin"></span></div>');
        (loc[1] == 'obeylordgoomy') && ($('h3:contains(ObeyLordGoomy)')[0].style.color = '#bf25bf');
    }
    if(loc[0] == 't'){
        $('.track-comment[data-d_name="ObeyLordGoomy"] a.bold').css('color: #bf25bf');
    }
})();
