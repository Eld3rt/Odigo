{
	const smoothScroll = function (targetEl, duration) {
		const headerElHeight =  document.querySelector('.header__inner').clientHeight;
		let target = document.querySelector(targetEl);
		let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		let startPosition = window.pageYOffset;
		let startTime = null;

		const ease = function(t,b,c,d) {
			t /= d / 2;
			if (t < 1) return c / 2 * t * t + b;
			t--;
			return -c / 2 * (t * (t - 2) - 1) + b;
		};

		const animation = function(currentTime){
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0,run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		};
			requestAnimationFrame(animation);
	};

		const scrollTo = function () {
			const links = document.querySelectorAll('.header__link');
			links.forEach(each => {
				each.addEventListener('click', function () {
					const currentTarget = this.getAttribute('href');
					smoothScroll(currentTarget, 1000);
				});
			});
		};

	scrollTo();
}

{
	const header = document.querySelector('.header');
	const wrapper = document.querySelector('.wrapper');
	window.onscroll = () => {
			if (window.pageYOffset > 50) {
					header.classList.add('header-active');
			} else {
					header.classList.remove('header-active');
			};
	};
}

{
	const burger = document.querySelector('.header__burger');
	const headerNav = document.querySelector('.header__nav');
	const close = document.querySelector('.header__nav-close');
	const headerLink = document.querySelectorAll('.header__link');
	burger.addEventListener('click', () => {
		headerNav.classList.add('header__nav-active');
	});
	close.addEventListener('click', () => {
		headerNav.classList.remove('header__nav-active');
	});
	headerLink.forEach(each => {
		each.addEventListener('click', () => {
		headerNav.classList.remove('header__nav-active');
		});
	});
	window.addEventListener("resize", () => {
		headerNav.classList.remove('header__nav-active');
	});
}

{
	let resizeTimer;
	const headerNav = document.querySelector('.header__nav');
	window.addEventListener("resize", () => {
		headerNav.classList.add("resize-animation-stopper");
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(() => {
			headerNav.classList.remove("resize-animation-stopper");
		}, 100);
	});
}

$(function() {
	$('.benefits__card-title').matchHeight();
	$('.benefits__card-desc').matchHeight();
	$('.places__card-desc').matchHeight();
});