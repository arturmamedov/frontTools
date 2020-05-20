/**
 * Default conf enable/disable withPlugins functions
 *
 * @object {{
 *      debug: boolean,
 *      wAppearBottomButton: boolean,
 *      go2top: boolean
 * }}
 */
var withOptions = {
    debug: false, // enable/disable Debug mode
    wAppearBottomButton: false, // enable/disable widget/w-appear_btn.js -Bottom
    wAppearTopButton: false, // enable/disable widget/w-appear_btn.js -Top
    go2top: true, // enable/disable widget/w-go2top.js
    htmlNicescroll: false,
    whatsappWeb: true, // replace WhatsApp mobile with Desktop on Desktop
};

if (typeof wOptions != 'undefined') {
    var withOptions = $.extend(withOptions, wOptions);
}

/**
 * Debug function for console.info() messages only if debug mode is enabled
 * so you don't need to worry about your debug message when in production
 *
 * @param text
 */
function clog(text){
    if (withOptions.debug) {
        console.info(text);
    }
}