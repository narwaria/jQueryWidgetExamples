(function ($) {
    $.fn.centerimage = function () {
        var element = $(this);
        function center() {
            var imageWidth = $(element).width();
            var imageHeight = $(element).height();
            var windowWidth = $(window).width();
            var windowHeight = $(window).height();
            $(element).css({
                position:'absolute',
                left: windowWidth/2 - imageWidth/2,
                top : windowHeight/2 - imageHeight/2
            });
        }
        $(window).on('load resize',center);
    };

}(jQuery));


