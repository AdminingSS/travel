//import './customScrollbar/jquery.mCustomScrollbar.concat.min';
import './customScrollbar/jquery.mCustomScrollbar.concat.min.v3';
import './customScrollbar/jquery.mCustomScrollbar.min.css'


$(window).on("load", function() {

    (() => {
        const $customScrollbars = $('.js-custom-scrollbar');

        $customScrollbars.mCustomScrollbar({
            theme: 'dark',
            setTop: 0,
            scrollInertia: 50,
            autoDraggerLength: false,
            mouseWheel:{ scrollAmount: 200 },
            advanced:{ updateOnContentResize: true }
        });

    })();

});