

$(document).ready(function () {
    $('.position_dot').click(function(){
        $('html,body').animate({scrollTop: $('.home').offset().top},1000)
    });

    $('.js-about').click(function(){
        $('html,body').animate({scrollTop: $('.aboutus').offset().top},1000)
    });

    $('.js-works').click(function(){
        $('html,body').animate({scrollTop: $('.our_works').offset().top},1000)
    });

    $('.js-services').click(function(){
        $('html,body').animate({scrollTop: $('.services').offset().top},1000)
    });

    $('.js-contact').click(function(){
        $('html,body').animate({scrollTop: $('.contacti').offset().top},1000)
    });

});



$(document).ready(function(){

    $('#studio_show').hide();
    $('#home_show').hide();
    $('#bedroom_show').hide();

    $('#solution').click(function show(element){
        $('#studio_show').hide();
        $('#home_show').hide();
        $('#bedroom_show').hide();
        var element = $('#solution_show').toggle(0, 'none');
    });
    
    $('#studio').click(function show(element){
        $('#solution_show').hide();
        $('#home_show').hide();
        $('#bedroom_show').hide();
        var element = $('#studio_show').toggle(0, 'none');
    });

    $('#home').click(function show(element){
        $('#studio_show').hide();
        $('#solution_show').hide();
        $('#bedroom_show').hide();
        var element = $('#home_show').toggle(0, 'none');
    });

    $('#bedroom').click(function show(element){
        $('#studio_show').hide();
        $('#home_show').hide();
        $('#solution_show').hide();
        var element = $('#bedroom_show').toggle(0, 'none');
    });

    



});

$(document).ready(function () {
    document.addEventListener('scroll', function (e) {
        if (window.innerHeight <= window.scrollY) {
            $("nav").addClass('sticky');
        } else if (window.innerHeight > window.scrollY) {
            $("nav").removeClass('sticky');
        }
    });
});

$(document).ready(function(){
    $('#theButton1').hide();
    $('#theButton').click(function show(element){
        var element = $('.navbar1').slideToggle(0, 'none');
    });

    $(document).ready(function(){
        $('#theButton').click(function show(element){
            var element = $('.mobile-nav').toggleClass('activ');
        });
       
       
    });

});