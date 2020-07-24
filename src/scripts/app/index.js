$(() => {

    /* headslider slider-box height  */
    (() => {
        const $window = $(window);
        const $slider = $('.headslider__slider');
        const $slides = $('.headslider__slide-box');
        let slideHeight = 0;
        let boxHeightTimer;

        clearTimeout(boxHeightTimer);
        boxHeightTimer = setTimeout(function () {
            setHeight();
        }, 100);

        $window.on('resize', function () {
            $slider.one('setPosition', setHeight);
            clearTimeout(boxHeightTimer);
            boxHeightTimer = setTimeout(function () {
                setHeight();
            }, 100);

        });

        function setHeight() {
            slideHeight = 0;

            $slides.each(function () {
                const $slide = $(this);

                $slide.height('auto');
                slideHeight = Math.max(slideHeight, $slide.height());
            });

            $slides.each(function () {
                $(this).height(slideHeight);
            });
        }
    })();

    /* headslider header show */
    (() => {
        const $window = $(window);
        const $header = $('.headslider__header');
        const $slider = $('.headslider__slider-nav');
        const $slides = $('.headslider__nav-box');
        let height = 0;
        let navHeightTimer;

        setTimeout(showHeader, 1500);

        clearTimeout(navHeightTimer);
        navHeightTimer = setTimeout(function () {
            setHeight();
        }, 100);

        $window.on('resize', function () {
            clearTimeout(navHeightTimer);
            navHeightTimer = setTimeout(function () {
                setHeight();
            }, 100);
            $header.height(height);
            $slider.one('setPosition', function () {
                clearTimeout(navHeightTimer);
                navHeightTimer = setTimeout(function () {
                    setHeight();
                }, 100);
                $header.height(height);
            });
        });

        function showHeader() {
            clearTimeout(navHeightTimer);
            navHeightTimer = setTimeout(function () {
                setHeight();
            }, 100);
            $header.animate({
                height: height,
            }, 500);
        }

        function setHeight() {
            height = 0;

            $slides.each(function () {
                height = Math.max(height, this.offsetHeight);
            });

            height = 230;
        }
    })();

    /* headslider content show */
    (() => {
        const $window = $(window);
        const $header = $('.headslider__header');
        const $content = $('.headslider__content');
        const $slider = $('.headslider__slider');
        const activeClass = 'headslider__header_active';
        const $slides = $('.headslider__slide');
        const $slideses = $('.headslider__slide-box');
        const $close = $('.headslider__close');
        let height = 0;
        let boxHeightTimer;

        clearTimeout(boxHeightTimer);
        boxHeightTimer = setTimeout(function () {
            setHeight();
        }, 100);

        $window.on('resize', function () {
            $slider.one('setPosition', setHeight);
            clearTimeout(boxHeightTimer);
            boxHeightTimer = setTimeout(function () {
                setHeight();
            }, 100);
        });

        $header.on('click', showContainer);

        $close.on('click', hideContainer);

        function showContainer() {
            if ($header.hasClass(activeClass)) return;

            $header.addClass(activeClass);

            clearTimeout(boxHeightTimer);
            boxHeightTimer = setTimeout(function () {
                setHeightes();
                setHeight();
            }, 100);
            $content.animate({
                height: height,
            }, 500);
        }

        function hideContainer() {
            if (!$header.hasClass(activeClass)) return;

            $header.removeClass(activeClass);
            $content.animate({
                height: 0,
            }, 500);
        }

        function setHeight() {
            height = 0;

            $slides.each(function () {
                height = Math.max(height, this.offsetHeight);
            });

            if (!$header.hasClass(activeClass)) return;

            $content.height(height);
        }

        function setHeightes() {
            let slideHeight = 0;

            $slideses.each(function () {
                const $slide = $(this);

                $slide.height('auto');
                slideHeight = Math.max(slideHeight, $slide.height());
            });

            $slideses.each(function () {
                $(this).height(slideHeight);
            });
        }
    })();

    //complex navbar operation
    (()=>{
        const $dropdownContentTrigger = $('.tm-header-bottom-nav .uk-navbar-dropdown-nav.js-complex-nav li a');
        const $offcanvasDropdownTrigger = $('.uk-offcanvas-bar .uk-navbar-dropdown-nav.js-complex-nav li a');
        const $dropdownContentItems = $('.tm-header-bottom-nav .js-dropdown-content');
        const $offcanvasDropdownItems = $('.uk-offcanvas-bar .js-dropdown-content');

        $dropdownContentTrigger.on('mouseenter', function (e) {
            const thisTrigger = $(this);
            const thisIndex = thisTrigger.parent().index();

            $dropdownContentItems.eq(thisIndex).addClass('hover');
        });

        $dropdownContentTrigger.on('mouseleave', function (e) {
            $dropdownContentItems.removeClass('hover');
        });

        $dropdownContentTrigger.on('click', function (e) {
            e.preventDefault();

            const thisTrigger = $(this);
            const thisIndex = thisTrigger.parent().index();

            $dropdownContentItems.removeClass('uk-active');
            $dropdownContentItems.eq(thisIndex).addClass('uk-active');

            $dropdownContentTrigger.parent().removeClass('uk-active');
            thisTrigger.parent().addClass('uk-active');
        });

        $offcanvasDropdownTrigger.on('click', function (e) {
            e.preventDefault();

            const thisTrigger = $(this);
            const thisIndex = thisTrigger.parent().index();

            $offcanvasDropdownItems.removeClass('uk-active');
            $offcanvasDropdownItems.eq(thisIndex).addClass('uk-active');

            $offcanvasDropdownTrigger.parent().removeClass('uk-active');
            thisTrigger.parent().addClass('uk-active');
        });

    })();

    //simple navbar operation
    (()=>{
        const $dropdownContentTrigger = $('.tm-dropdown-simple .uk-navbar-dropdown-nav li a');

        $dropdownContentTrigger.on('click', function (e) {
            e.preventDefault();

            const thisTrigger = $(this);

            $dropdownContentTrigger.parent().removeClass('uk-active');
            thisTrigger.parent().addClass('uk-active');
        })

    })();

    //tour type selector
    (()=>{
        const $dropdownContentTrigger = $('.tm-tours-types-list li');

        $dropdownContentTrigger.on('click', function (e) {

            const thisTrigger = $(this);

            thisTrigger.toggleClass('uk-active');
        })

    })();

    //select
    (() => {
        const $selects = $('.tm-select');

        $selects.each(function () {
            const $selectWrapper = $(this);
            const $select = $selectWrapper.find('.tm-select-pseudo');
            const $dropdown = $selectWrapper.find('.tm-select-pseudo-items');
            const $input = $selectWrapper.find('>input');

            $dropdown.on('click', '.select-option', event, function () {
                const $target = $(event.target);

                return false;

                if (!$target.attr('data-value')) return false;

                const optionText = $target.text();

                $select.text(optionText);
                $input.val($target.attr('data-value'));

                UIkit.dropdown($dropdown).hide();
            });
        })
    })();

    //to order form scroll
    (() => {
        const $orderTriggers = $('.js-order-trigger');
        const $sidebarItem = $('.tm-sidebar');
        const $body = $('body');

        $orderTriggers.on('click', function (e) {
            e.preventDefault();
            if(!$('.tm-order-form').length) return;
            const $orderForm = $('.tm-faq-order-trigger');
            const formTop = ($orderForm.length && !$orderForm.is(":hidden")) ? $orderForm.offset().top - 10 : $('.tm-order-form').offset().top - 100;

            $sidebarItem.removeClass('uk-active');
            $body.removeClass('body-grayed');

            $('html, body').animate({
                scrollTop: formTop
            }, 1000);
        })
    })();

    //fixed header
    (() => {
        const $fixedHeader = $('.tm-header-fixed');
        const $fixedFooter = $('.tm-sidebar-toggle-tour');
        const $mobileFixedButtons = $('.tm-button-seen, .tm-button-totop');
        const $blockTriggers = $fixedHeader.find('.uk-navbar-nav li');
        const $orderForm = $('.tm-order-form');
        const $blockAnchors = $('.js-anchor');
        const $window = $(window);

        $window.on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            //const $faqTrigger = $('.tm-faq-order-trigger');

            let controlPointsArray = [];
            $blockAnchors.each(function () {
                const position = $(this).offset().top;
                controlPointsArray.push(position)
            });

            if(scrollTop > 400) {
                $fixedHeader.addClass('tm-header-visible');
            }
            else {
                $fixedHeader.removeClass('tm-header-visible');
            }

            for(let i = 0; i < controlPointsArray.length; i++) {

                if(scrollTop >= controlPointsArray[i] - 200) {
                    $blockTriggers.removeClass('uk-active');
                    $($blockTriggers[i]).addClass('uk-active');
                }
            }

            if(!$orderForm.length) return;
            const $faqTrigger = $('.tm-faq-order-trigger');

            const topPosition = ($faqTrigger.length && !$faqTrigger.is(":hidden")) ? $faqTrigger.offset().top : $orderForm.offset().top;

            if(scrollTop + 200 > topPosition && scrollTop < $orderForm.offset().top + $orderForm.height()) {
                $fixedHeader.addClass('tm-header-opaque');
                $fixedFooter.addClass('tm-header-opaque');
                $mobileFixedButtons.addClass('tm-header-opaque');
            }
            else {
                $fixedHeader.removeClass('tm-header-opaque');
                $fixedFooter.removeClass('tm-header-opaque');
                $mobileFixedButtons.removeClass('tm-header-opaque');
            }

        });

        $blockTriggers.on('click', function (e) {
            e.preventDefault();

            const $thisTrigger = $(this);
            const $thisAnchor = $($blockAnchors[$thisTrigger.index()]);
            const scrollPosition = $thisAnchor.offset().top - 100;

            $("HTML, BODY").animate({
                scrollTop: scrollPosition
            }, 1000);
        })

    })();

    //mobile fixed header
    (() => {
        const $mobileFixedHeader = $('.tm-mobile-header');

        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();

            if(scrollTop > 300) {
                $mobileFixedHeader.addClass('top-visible');
            }
            else {
                $mobileFixedHeader.removeClass('top-visible');
            }
        })
    })();

    //mobile fixed buttons
    (() => {
        const $mobileFixedButtons = $('.tm-button-seen, .tm-button-totop');
        const $toTop = $mobileFixedButtons.filter('.tm-button-totop');

        $(window).on('scroll', function () {
            const scrollTop = $(window).scrollTop();

            if(scrollTop > 300) {
                $mobileFixedButtons.addClass('tm-visible');
            }
            else {
                $mobileFixedButtons.removeClass('tm-visible');
            }
        });

        $toTop.on('click', function (e) {
            e.preventDefault();

            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        })
    })();

    //animate image icons
    (() => {
        const $imageIcons = $('.tm-panel-image-icons');
        const $window = $(window);

        $window.on('scroll', function () {

            $imageIcons.each(function () {
                const $imageIconsItem = $(this);

                if ($window.scrollTop() + $window.height() >= $imageIconsItem.offset().top) {
                    setTimeout(function () {
                        $imageIconsItem.addClass('tm-visible');
                    }, 2000);
                }
            })
        });

    })();

    //sidebar toggle
    (() => {
        const $sidebarToggle = $('.tm-sidebar-toggle, .tm-dop-info');
        const $sidebarItem = $('.tm-sidebar');
        const $sidebarClose = $('.sidebar-close-outer, .tm-button-apply-filters');
        const $sidebarCloseBody = $('body');
        const $body = $('body');
        const $applyButton = $('.tm-button-apply-filters');

        $sidebarToggle.on('click', function (e) {
            e.preventDefault();
            $sidebarItem.addClass('uk-active');
            $body.addClass('body-grayed');
            $applyButton.addClass('tm-visible');
        });

        $sidebarClose.on('click', function (e) {
            e.preventDefault();
            $sidebarItem.removeClass('uk-active');
            $body.removeClass('body-grayed');
            $applyButton.removeClass('tm-visible');
        });

        $sidebarCloseBody.on('click', function (e) {
            if (e.target !== this) return;
            $sidebarItem.removeClass('uk-active');
            $body.removeClass('body-grayed');
            $applyButton.removeClass('tm-visible');
        });
    })();

    //plus accords
    (() => {
        const $accordTriggers = $('label .tm-plus');

        $accordTriggers.on('click', function (e) {
            e.preventDefault();

            const $accordPlus = $(this);
            const $accordLabel = $accordPlus.parent();
            const $accordBox = $accordLabel.next('.tm-sub-tier');

            $accordBox.toggleClass('uk-open');
        })
    })();
    
    (() => {
        const $bottomBar = $('.tm-sidebar-toggle-tour');
        let scrollPos = 0;

        $bottomBar.addClass('rolled-out');

        $bottomBar.on('click', function () {
            $bottomBar.removeClass('rolled-out');
        });

        $(window).on('scroll', function(event) {
            const scTop = $(this).scrollTop();
            if (scTop > scrollPos){
                $bottomBar.addClass('rolled-out');
            } else {
                $bottomBar.removeClass('rolled-out');
            }
            scrollPos = scTop;
        });
    })();

});

function shortenString(string, length = 60) {
    const newstring = string.slice(0,length);
    return newstring + '...';
}