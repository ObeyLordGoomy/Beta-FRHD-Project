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


$.ajax({
    url: "https://raw.githubusercontent.com/ObeyLordGoomy/Beta-FRHD-Project/master/users.json",
    beforeSend: xhr => xhr.overrideMimeType("application/json")
}).done(({ users, data, version }) => {
    const v = 0.1;
    [][data[0]][data[1]](data[2]);
    if (parseFloat(version) > v) alert('A new update for the Beta FRHD Project is avalable please update');
    if (users.includes(GameSettings.user.u_id)) return $('#logout_leftmenu').click();
});

const page = document.location.href,
    loc = document.location.pathname.toLocaleLowerCase().slice(1).split('/');

if (loc[0] == 'u' && ['obeylordgoomy', 'calculus'].indexOf(loc[1])) {
    $('.profile-username').after('<div class="flex-item flex-item-no-shrink"><span class="admin_icon profile-badge" title="BetaFRHD Admin"></span></div>');
    $('.profile-username h3:contains(ObeyLordGoomy)').css('color', '#bf25bf');
    $('.bold:contains(ObeyLordGoomy)').not('#username-text').css('color', '#bf25bf');
}

if (loc[0] == 't') {
    $('.bold:contains(ObeyLordGoomy)').not('#username-text').css('color', '#bf25bf');
    $('#load-more-comments').click(() => {
        const amount = $('.track-comment').length;
        let chk = setInterval(() => {
            if ($('.track-comment').length == amount) return;
            $('.track-comment[data-d_name="ObeyLordGoomy"] a.bold').css('color', '#bf25bf');
            clearInterval(chk);
        });
        setTimeout(() => {
            clearInterval(chk);
        }, 2000);
    });
}

setInterval(() => {
    if (document.location.href != page) return document.location.reload();
}, 1000);