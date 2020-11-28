$(document).ready(function() {
	window.addEventListener('scroll', () => {
		const scrollPos = window.scrollY;
		if (scrollPos > 20) {
			// console.log(scrollPos);
			$('.main-header').addClass('scrolled');
		} else {
			// console.log(scrollPos);
			$('.main-header').removeClass('scrolled');
		}
	});

	$('#pagepiling').pagepiling({
		menu: null,
		direction: 'vertical',
		verticalCentered: true,
		sectionsColor: [],
		anchors: [],
		scrollingSpeed: 700,
		easing: 'swing',
		loopBottom: false,
		loopTop: false,
		css3: true,
		sectionsColor: [ '#f57f17', '#4BBFC3', '#388e3c' ],
		navigation: {
			textColor: '#000',
			bulletsColor: '#000',
			position: 'left',
			tooltips: [ 'section1', 'section2', 'section3' ]
		},
		normalScrollElements: null,
		normalScrollElementTouchThreshold: 5,
		touchSensitivity: 5,
		keyboardScrolling: true,
		sectionSelector: '.section',
		animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction) {},
		afterLoad: function(anchorLink, index) {},
		afterRender: function() {}
	});
});
