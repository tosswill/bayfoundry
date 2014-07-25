$(function() {
var $w = $(window);
var v_width = 640;
var v_height = 360;

$w.resize(function() {
    //TODO: debounce
    var use_width = $w.width() / $w.height() > v_width / v_height;

    console.log("Use width?" , use_width);

    var offset_top = 0;
    var offset_left = 0;
    if(use_width) {
        var new_width = $w.width();
        var new_height = (v_height * $w.width()) / v_width;

        offset_top = ((new_height - $w.height()) / 2) * -1;
    } else {
        var new_height = $w.height();
        var new_width = (v_width * $w.height()) / v_height;

        offset_left = ((new_width - $w.width()) / 2) * -1;
    }

    $('video').css({'width': new_width, 'height': new_height, 'top': offset_top, 'left': offset_left});
    $('#ggb_parent').css({'width': $w.width(), 'height': $w.height()});
}).trigger('resize');

});
