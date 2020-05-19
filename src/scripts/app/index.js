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
            e.preventDefault();

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

    //fixed header
    (() => {
        const $fixedHeader = $('.tm-header-fixed');
        const $blockTriggers = $fixedHeader.find('.uk-navbar-nav li');
        const $blockAnchors = $('.js-anchor');
        const $window = $(window);
        let controlPointsArray = [];
        $blockAnchors.each(function () {
            const position = $(this).offset().top;
            controlPointsArray.push(position)
        });

        $window.on('scroll', function () {
            const scrollTop = $(window).scrollTop();

            if(scrollTop > 400) {
                $fixedHeader.addClass('tm-header-visible');
            }
            else {
                $fixedHeader.removeClass('tm-header-visible');
            }

            for(let i = 0; i < controlPointsArray.length; i++) {

                if(scrollTop >= controlPointsArray[i] - 1000) {
                    $blockTriggers.removeClass('uk-active');
                    $($blockTriggers[i]).addClass('uk-active');
                }
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

            $blockTriggers.removeClass('uk-active');
            $thisTrigger.addClass('uk-active');
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

        $sidebarToggle.on('click', function () {
            $sidebarItem.addClass('uk-active');
            $body.addClass('body-grayed');
        });

        $sidebarClose.on('click', function () {
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

});