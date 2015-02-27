/**
 * Created by Ruslan on 2/26/2015.
 */

$(document).ready(function() {

    $("#owl-example").owlCarousel({
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        itemsMobile : [479,1],
        autoPlay : true,
        pagination : true
    });
});
