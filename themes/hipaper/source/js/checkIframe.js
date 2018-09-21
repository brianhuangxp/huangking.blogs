(function($){
$(document).ready(function(){
    let length = $(".embedIframe").length;
    for(let idx=0; idx < length; idx++) {
        let win = $(".embedIframe")[idx];
        win.contentDocument.body.style.zoom="50%";
    }
})
})(jQuery);