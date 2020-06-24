import 'slick-slider/slick/slick.min';
import 'slick-slider/slick/slick.less';
import 'slick-slider/slick/slick-theme.less';

$(() => {

    (()=>{
        const $slickSlider = $('.tm-slider-gallery, .tm-sections-slider, .tm-accomodation-slider');
        const $sliderMobileLinks = $('.js-slider-mobile-links');
        //const $sliderMobileNews = $('.js-mobile-slider-news');
        const $body = $('body');
        const $window = $(window);
        const $linksSliderControls = $('.tm-links-slider-controls a');

        const options = {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: true
        };

        const optionsLinks = {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false
        };

        let sliderLinksCreated = false;
        let sliderNewsCreated = false;

        $slickSlider.slick(options);

        sliderInint();

        $window.on('resize', sliderInint);

        function sliderInint() {
            if (!sliderLinksCreated && $body.width() <= 622) {
                $sliderMobileLinks.slick(optionsLinks);
                sliderLinksCreated = true;
            } else if (sliderLinksCreated && $body.width() > 622) {
                $sliderMobileLinks.slick('unslick');
                sliderLinksCreated = false;
            }

            if (!sliderNewsCreated && $body.width() <= 622) {
                //$sliderMobileNews.slick(options);
                sliderNewsCreated = true;
            } else if (sliderNewsCreated && $body.width() > 622) {
                //$sliderMobileNews.slick('unslick');
                sliderNewsCreated = false;
            }
        }

        $linksSliderControls.on('click', function (e) {
            e.preventDefault();
            if(!sliderLinksCreated) return;
            const $thisLink = $(this);

            $sliderMobileLinks.slick('slickGoTo', $thisLink.index());
        });

        $sliderMobileLinks.on('afterChange', function(event, slick, currentSlide){
            $linksSliderControls.removeClass('uk-active');
            $($linksSliderControls[currentSlide]).addClass('uk-active');
        });

    })()

});