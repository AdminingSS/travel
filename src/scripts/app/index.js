$(() => {

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
            //e.preventDefault();

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
        const $orderForm = $('.tm-faq-order-trigger');
        const $orderTriggers = $('.js-order-trigger');
        const $sidebarItem = $('.tm-sidebar');
        const $body = $('body');

        $orderTriggers.on('click', function (e) {
            e.preventDefault();
            if(!$('.tm-order-form').length) return;
            const formTop = ($orderForm.length) ? $orderForm.offset().top - 10 : $('.tm-order-form').offset().top - 100;

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
        const $blockTriggers = $fixedHeader.find('.uk-navbar-nav li');
        const $orderForm = $('.tm-order-form');
        const $blockAnchors = $('.js-anchor');
        const $window = $(window);


        //console.log(controlPointsArray)

        $window.on('scroll', function () {
            const scrollTop = $(window).scrollTop();
            const $faqTrigger = $('.tm-faq-order-trigger');

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

            const topPosition = ($faqTrigger.length) ? $faqTrigger.offset().top : $orderForm.offset().top;

            if(scrollTop + 200 > topPosition && scrollTop < $orderForm.offset().top + $orderForm.height()) {
                $fixedHeader.addClass('tm-header-opaque');
                $fixedFooter.addClass('tm-header-opaque');
            }
            else {
                $fixedHeader.removeClass('tm-header-opaque');
                $fixedFooter.removeClass('tm-header-opaque');
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

            //$blockTriggers.removeClass('uk-active');
            //$thisTrigger.addClass('uk-active');

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

            console.log(1)
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
        const $sidebarClose = $('.sidebar-close-outer');
        const $body = $('body');

        $sidebarToggle.on('click', function (e) {
            e.preventDefault();
            $sidebarItem.addClass('uk-active');
            $body.addClass('body-grayed');
        });

        $sidebarClose.on('click', function (e) {
            e.preventDefault();
            $sidebarItem.removeClass('uk-active');
            $body.removeClass('body-grayed');
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

    //proximity toggler
    (() => {
        const $proxyToggler = $('.tm-toggler-proximity');

        $proxyToggler.on('click', function (e) {
            e.preventDefault();
            $(this).next().toggleClass('uk-hidden');
            ($(this).html() === 'Заполнить информацию позже') ? $(this).html('Заполнить информацию') : $(this).html('Заполнить информацию позже');
        })
    })();

    //qty forms
    // (() => {
    //     const $qtyForms = $('.tm-qty-form');
    //
    //     $qtyForms.each(function () {
    //         const $thisForm = $(this);
    //         const $btnPlus = $thisForm.find('.tm-button-plus');
    //         const $btnMinus = $thisForm.find('.tm-button-minus');
    //         const $formInput = $thisForm.find('input');
    //         let currentCount = $formInput.val();
    //
    //         $formInput.on('change', function (e) {
    //             if(!$formInput.val().match(/^\d+$/)) {
    //                 $formInput.val(currentCount)
    //             }
    //             else {
    //                 currentCount = $formInput.val();
    //             }
    //         });
    //
    //         $btnPlus.on('click', function () {
    //             const newCount = currentCount + 1;
    //             currentCount = newCount;
    //             $formInput.val(currentCount);
    //         });
    //
    //         $btnMinus.on('click', function () {
    //             const newCount = currentCount - 1;
    //             if(newCount < 0) return;
    //             currentCount = newCount;
    //             $formInput.val(currentCount);
    //         })
    //     })
    //
    // })();

});

function shortenString(string, length = 60) {
    const newstring = string.slice(0,length);
    return newstring + '...';
}