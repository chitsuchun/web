(function ($){
    $.fn.MainDataInIt = function () {
    }
    $.fn.ComCss = function (property) {
        var _self = $(this);
            _self['propObj'] = {};
        for(x in property){ 
            _self.propObj['-webkit-'+x] = property[x];
            _self.propObj['-moz-'+x] = property[x];
            _self.propObj['-ms-'+x] = property[x];
            _self.propObj[x] = property[x];
        }
        _self.css(_self.propObj);
        /*for(x in _self.propObj){ 
            delete _self.propObj[x];
        }*/
        delete _self.propObj;
        property = null;
        _self = null;      
    }
})(jQuery);

$(function(){
    $.Body =$('body');
    $.Window = $(window);
    $.Loading = $.Body.find('div#loading');
    $.Window.load(
        function(){
            $.Loading.velocity(
                {
                    'opacity': 0
                }
                , 
                {
                    /* Velocity's default options */
                    duration: 400,
                    easing: "swing",
                    queue: "",
                    begin: undefined,
                    progress: undefined,
                    complete: function(){$.Loading.css({'display':'none'}); $.Body.MainDataInIt();},
                    display: undefined,
                    visibility: undefined,
                    loop: false,
                    delay: false,
                    mobileHA: true
                }
            );
        }
    );
});
