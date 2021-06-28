// carousels
$(function () {
    slider;
 $(".carousel").hover(function () {
   $(this).carousel('pause');
 });
 $(".carousel").mouseout(function () {
   $(this).carousel(slider);
 });
});
function slider() {
 $(".carousel").carousel({
     interval : 1000
 });
}