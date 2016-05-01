/*global window*/

let global = window;
let doc = global.document;

const headerEl = doc.querySelector('header');
const headerTop = headerEl.getBoundingClientRect().top;

const stickyHeader = {
	onScroll() {
		if (global.pageYOffset >= headerTop) {
			headerEl.classList.add('fixed');
		} else {
			headerEl.classList.remove('fixed');
		}
	},
	attachScrollListener() {
		global.addEventListener('scroll', stickyHeader.onScroll);
	},
	init() {
		stickyHeader.attachScrollListener();
	}
};

function start() {
	stickyHeader.init();
}

global.onload = start;
