import 'slick-slider/slick/slick.min';
import 'slick-slider/slick/slick.less';
import 'slick-slider/slick/slick-theme.less';

$(() => {

    (()=>{
        const $slickSlider = $('.tm-slider-gallery, .tm-sections-slider, .tm-accomodation-slider');

        $slickSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: true
        })
    })()

});