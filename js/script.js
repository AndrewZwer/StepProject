$(document).ready(function () {

    /* Tabs services block */

    $("#servicesTab .tab-item").click( function () {
        changeTabContent(this);
    });

    function changeTabContent(elem) {
        $(elem).addClass("active").siblings().removeClass("active");

        const currentTabIndex = $(elem).index();

        $("#servicesTab .tabs-content-item").removeClass("active").eq(currentTabIndex).addClass("active");
    }

    /* Gallery filter Our amazing works block */

    $(".gallery-item").hide().slice(0, 12).show();

    $(".load-more-btn").click(function () {

        $("#gallery-loader").show();
        $("#gallery-loader span:first-child").addClass("up-and-down");

        let galleryTimer = setInterval(function () {
            $("#gallery-loader span.up-and-down").removeClass("up-and-down").next().addClass("up-and-down");
        }, 200);

        setTimeout(function () {
            clearTimeout(galleryTimer);
            $("#gallery-loader").hide();
            const imgCategoryItem = $(".filter-item.active").data("filter");
            $(`.gallery-item${imgCategoryItem}:hidden`).slice(0, 12).show();

            if ($(`.gallery-item${imgCategoryItem}:hidden`).length > 0) {
                $(".our-works .load-more-btn").show();
            }
            else {
                $(".our-works .load-more-btn").hide();
            }
        }, 2000);

    });

    /* Click event on the filter item */

    $(".filter-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        $(".gallery-item").hide();

        const imgCategoryItem = $(".filter-item.active").data("filter");

        $(`.gallery-item${imgCategoryItem}:hidden`).slice(0, 12).show();

        if ($(`.gallery-item${imgCategoryItem}:hidden`).length > 0) {
            $(".load-more-btn").show();
        }
        else {
            $(".load-more-btn").hide();
        }
    });

    /* Awesome slider What people say about theHAM block */

    $(".comment-item").hide();
    $(".comment-item").eq(0).show();

    $(".preview-img").hide().slice(0, 4).show();

    $(".preview-img").click( function () {
        changeComment(this);
    });

    function changeComment (elem) {
        $(".preview-img:visible").removeClass("active-comment");
        $(elem).addClass("active-comment");

        const currentComment = $(elem).index();
        $(".comment-item").slideUp();
        $(".comment-item").eq(currentComment - 1).slideDown();
    }

    $(".fa-chevron-left").click(function (event) {
        let activePreview = $(`.preview-img.active-comment`);

        $(this).addClass("disabled-arrow");
        setTimeout(function () {
            $(".fa-chevron-left").removeClass("disabled-arrow");
        }, 400);

        if (activePreview.index() !== 1 && activePreview.index() > 4) {
            activePreview.removeClass("active-comment").prev().addClass("active-comment").show();
            $(".comment-item").slideUp();
            $(".comment-item").eq(activePreview.index() - 2).slideDown();
        }
        else if (activePreview.index() !== 1 && $(`.preview-img.active-comment:visible`).index() <= 4) {
            $(".preview-img").eq(activePreview.index() - 5 ).hide();
            activePreview.removeClass("active-comment").prev().addClass("active-comment").show();
            $(".comment-item").slideUp();
            $(".comment-item").eq(activePreview.index() - 2).slideDown();
        }
        else if (activePreview.index() === 1) {
            $(".preview-img").hide().slice(3, 7).show();
            activePreview.removeClass("active-comment");
            $(".preview-img").eq(6).addClass("active-comment");
            $(".comment-item").slideUp();
            $(".comment-item").eq($(`.preview-img.active-comment`).index() - 1).slideDown();
        }
    });

    $(".fa-chevron-right").click(function () {
        let activePreview = $(`.preview-img.active-comment`);

        $(this).addClass("disabled-arrow");
        setTimeout(function () {
            $(".fa-chevron-right").removeClass("disabled-arrow");
        }, 400);

        if (activePreview.index() !== 7 && $(`.preview-img.active-comment:visible`).index() < 4) {
            activePreview.removeClass("active-comment").next().addClass("active-comment").show();
            $(".comment-item").slideUp();
            $(".comment-item").eq(activePreview.index()).slideDown();
        }
        else if (activePreview.index() !== 7 && $(`.preview-img.active-comment:visible`).index() >= 4) {
            $(".preview-img").eq(activePreview.index() - 4 ).hide();
            activePreview.removeClass("active-comment").next().addClass("active-comment").show();
            $(".comment-item").slideUp();
            $(".comment-item").eq(activePreview.index()).slideDown();
        }
        else if (activePreview.index() === 7) {
            $(".preview-img").hide().slice(0, 4).show();
            activePreview.removeClass("active-comment");
            $(".preview-img").eq(0).addClass("active-comment");
            $(".comment-item").slideUp();
            $(".comment-item").eq($(`.preview-img.active-comment`).index() - 1).slideDown();
        }
    });

    /* Best images block */

    $(".best-images .grid-item").hide().slice(0, 12).show();

    let msnry = new Masonry( '.grid', {
        itemSelector: ".grid-item",
        columnWidth: 10,
        gutter: 40
    });

    $(".best-images .load-more-btn").click(function () {

        $("#amazing-work-loader").show();
        $("#amazing-work-loader span:first-child").addClass("up-and-down");

        let amazingWorkTimer = setInterval(function () {
            $("#amazing-work-loader span.up-and-down").removeClass("up-and-down").next().addClass("up-and-down");
        }, 200);

        setTimeout(function () {
            clearInterval(amazingWorkTimer);
            $("#amazing-work-loader").hide();

            $(`.grid-item:hidden`).slice(0, 12).show();

            let msnry = new Masonry( '.grid', {
                itemSelector: ".grid-item",
                columnWidth: 10,
                gutter: 40
            });

            if ($(`.grid-item:hidden`).length > 0) {
                $(".best-images .load-more-btn").show();
            }
            else {
                $(".best-images .load-more-btn").hide();
            }
        }, 2000);

    });

});
