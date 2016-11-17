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







var exist_num = 100;
exist_num + 100
console.log( typeof exist_num );
// 告訴我"exist_num" 

var exist_string = '100';
console.log( typeof exist_string );

var exist_object = {zzz: 123,xxx: 456};
console.log( typeof exist_object );

var exist_array = [1,2,3,4,{},'7'];
console.log( typeof exist_array );

var exist_boolean_a = true,
    exist_boolean_b = false;
console.log( typeof exist_boolean_a, typeof exist_boolean_b );
/*
創造 ：“宣告”
東西 ：“變數”


數字 number
字串 string
物件 object
陣列 array
布林值 boolean
*/  















































