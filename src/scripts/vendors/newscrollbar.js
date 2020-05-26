import 'jscrollpane/script/jquery.mousewheel';
import 'jscrollpane/script/jquery.jscrollpane.min';
import 'jscrollpane/style/jquery.jscrollpane.css';


$(() => {

    (() => {
        const $customScrollbars = $('.js-custom-scrollbar');

        $customScrollbars.jScrollPane();

    })();

});