import '../scss/about-us_styles.scss'

const initSlide = () =>{
    $('.client-say__slides').slick({
        arrows: false,
        dots:true
    });
}
$(document).ready(function () {
    console.log('test js about')
    initSlide();
});