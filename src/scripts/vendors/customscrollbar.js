//import './customScrollbar/jquery.mCustomScrollbar.concat.min';
import './customScrollbar/jquery.mCustomScrollbar.concat.min.v3';
import './customScrollbar/jquery.mCustomScrollbar.min.css'


$(window).on("load", function() {

    (() => {
        const $customScrollbars = $('.js-custom-scrollbar');

        ($('<div><div /><div /></div>')).appendTo($('body'));

        $customScrollbars.mCustomScrollbar({
            theme: 'dark',
            setTop: 0,
            scrollInertia: 50,
            autoDraggerLength: false,
            live: "on",
            mouseWheel:{ scrollAmount: 200 },
            advanced:{ updateOnContentResize: true }
        });

    })();

});