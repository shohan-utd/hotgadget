

var owl = $('#car_active');
owl.owlCarousel({
    items:1,
    loop:true,
	autoplay:true,
    autoplayTimeout:3000,
    dots:true,
    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

