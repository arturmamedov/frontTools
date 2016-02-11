/* * * * * * * * * * * * * * * * * * 
 * * * * *  gDiv Message * * * * * *
need Bootstrap alert and some css:
.withAlert {left: 15%; position: fixed !important; text-align: center; top: 55px; width: 70%; z-index: 5000;}
* * * * * * * * * * * * * * * * * */
(function($){
    $.fn.gdivMessage = function(message, type, options){
        var defaults = {autohide: true, hidetime: 4000};
        var opts = $.extend(defaults, options);
        var zindex = 5001, top = 40, alert_count = 1;
        if(!message){
            message = 'Errore inaspettato. Scusate per il disagio. (Unexpected Error)';
        } if(!type) {
            type = 'warning';
        }

        alert_count = parseInt($(".withAlert").length);
        zindex = alert_count + 5001;
        top =  alert_count * top;
        if(top > 100){
            top = 100 + (alert_count * 3);
            if(top > 150){
                top = 150;
            }
        }

        // qui creiamo il codice del alert
        var element = '<div class="withAlert alert alert-'+type+' alert-dismissible" style="z-index: '+ zindex +'; top: '+ top +'px;"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><span class="message">'+message+'</span><div class="clearfix"></div></div>';

        var eobj = $(element).clone();

        $(eobj).appendTo("body");
        if(opts.autohide){
            setTimeout(function(){$(eobj).hide('slow', function(){$(this).remove();});}, opts.hidetime);
        }
    };
})(jQuery);
$("body").on('click', ".withAlert .close", function(){
    $(this).parent().hide('slow', function(){$(this).remove();});
});
/* * * * ----- gDiv Message ----- * * */

/* jQuery plugins and other thing that need to be run after the document is load */	
$(document).ready(function () {
	/**
	 * Raty - https://github.com/wbotelhos/raty
     * with data API initialization from https://github.com/wbotelhos/raty/pull/168
     * get only the star type or set my prefered icon type and all others from data-api:
     * <span class="getraty" data-score="5" data-star-on="fa fa-star" data-star-off="" data-read-only="true"></span>
     */
    $('.getraty').each(function(){
        var startype = $(this).data('startype');
        if(typeof startype == 'undefined' || startype.length == 0)
            startype = 'i';
        $(this).raty({starType: startype});
    });
});
