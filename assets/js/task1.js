jQuery(function() { 
    var autoplaySlider = $('#lightSlider').lightSlider({
        auto:true,
        pause: 5000,
        keyPress: true,
        controls: true,
        loop:true,
        pauseOnHover: true,
        item:1,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        } 
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());
})