$(() => {

    //complex navbar operation
    (()=>{
        const $dropdownContentTrigger = $('.uk-navbar-dropdown-nav.js-complex-nav li a');
        const $dropdownContentItems = $('.js-dropdown-content');

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
        })

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

        $window.on('scroll', function () {
            const scrollTop = $(window).scrollTop();

            if(scrollTop > 400) {
                $fixedHeader.addClass('tm-header-visible');
            }
            else {
                $fixedHeader.removeClass('tm-header-visible');
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

});