$('.logo').click(function () { 
        $('.logo').hide();
        $('.helo').animate({height: '900vw',width: '900vw',},
        1000);
        $('#search-bar').show()
});