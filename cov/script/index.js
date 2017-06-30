$(function () {
    $("body>div").fullpage({
        'afterRender': function() {
            $('.access-container .text-area').animate({'margin-left': 0});
            $('.access-container .pic-area').animate({'margin-right': 0});
            // $('.fp-tableCell').each(function(){
            //     var height = $(this).height();
            //     var otherHeight = 0;
            //     $(this).children('.not(.content)').each(function(){
            //         otherHeight += $(this).height();
            //     });
            //     $(this).find('.content').css({'height':height-otherHeight+'px'});
            // });

        },
        'afterLoad':function(anchorLink, index) {
            switch (index){
                case 1:
                    break;
                case 2:
                    $('.section .title:after').animate({'width': '120px'});
                    break;
                case 3:
                    break;
                case 4:
                    break;
                default:

            }
        }
    });
});