
$(document).ready(function() {
    general_utils();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}
var animation = bodymovin.loadAnimation({
    container: document.getElementById('build1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "assets/js/building1.json"
  });

var animation = bodymovin.loadAnimation({
    container: document.getElementById('build2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "assets/js/building2.json"
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById('build3'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: "assets/js/building3.json"
});
