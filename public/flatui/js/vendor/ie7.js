/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-triangle-down': '&#xe601;',
		'icon-triangle-up-small': '&#xe602;',
		'icon-triangle-down-small': '&#xe603;',
		'icon-triangle-left-large': '&#xe604;',
		'icon-triangle-right-large': '&#xe605;',
		'icon-arrow-left': '&#xe606;',
		'icon-arrow-right': '&#xe607;',
		'icon-plus': '&#xe608;',
		'icon-cross': '&#xe609;',
		'icon-check': '&#xe60a;',
		'icon-radio-unchecked': '&#xe60b;',
		'icon-radio-checked': '&#xe60c;',
		'icon-checkbox-unchecked': '&#xe60d;',
		'icon-checkbox-checked': '&#xe60e;',
		'icon-alert-circle': '&#xe610;',
		'icon-question-circle': '&#xe611;',
		'icon-check-circle': '&#xe612;',
		'icon-cross-circle': '&#xe613;',
		'icon-plus-circle': '&#xe614;',
		'icon-pause': '&#xe615;',
		'icon-play': '&#xe616;',
		'icon-volume': '&#xe617;',
		'icon-mute': '&#xe618;',
		'icon-resize': '&#xe619;',
		'icon-list': '&#xe61a;',
		'icon-list-thumbnailed': '&#xe61b;',
		'icon-list-small-thumbnails': '&#xe61c;',
		'icon-list-large-thumbnails': '&#xe61d;',
		'icon-list-columned': '&#xe61f;',
		'icon-list-bulleted': '&#xe620;',
		'icon-window': '&#xe621;',
		'icon-windows': '&#xe622;',
		'icon-loop': '&#xe623;',
		'icon-cmd': '&#xe624;',
		'icon-mic': '&#xe625;',
		'icon-heart': '&#xe626;',
		'icon-location': '&#xe627;',
		'icon-new': '&#xe628;',
		'icon-video': '&#xe629;',
		'icon-photo': '&#xe62a;',
		'icon-time': '&#xe62b;',
		'icon-eye': '&#xe62c;',
		'icon-home': '&#xe62e;',
		'icon-upload': '&#xe62f;',
		'icon-search': '&#xe630;',
		'icon-user': '&#xe631;',
		'icon-mail': '&#xe632;',
		'icon-lock': '&#xe633;',
		'icon-power': '&#xe634;',
		'icon-calendar': '&#xe635;',
		'icon-gear': '&#xe636;',
		'icon-bookmark': '&#xe637;',
		'icon-exit': '&#xe638;',
		'icon-trash': '&#xe639;',
		'icon-folder': '&#xe63a;',
		'icon-bubble': '&#xe63b;',
		'icon-calendar-solid': '&#xe63d;',
		'icon-star': '&#xe63e;',
		'icon-star-2': '&#xe63f;',
		'icon-credit-card': '&#xe640;',
		'icon-clip': '&#xe641;',
		'icon-link': '&#xe642;',
		'icon-tag': '&#xe643;',
		'icon-document': '&#xe644;',
		'icon-image': '&#xe645;',
		'icon-facebook': '&#xe646;',
		'icon-youtube': '&#xe647;',
		'icon-vimeo': '&#xe648;',
		'icon-twitter': '&#xe649;',
		'icon-spotify': '&#xe64a;',
		'icon-pinterest': '&#xe64c;',
		'icon-path': '&#xe64d;',
		'icon-linkedin': '&#xe64e;',
		'icon-google-plus': '&#xe64f;',
		'icon-dribbble': '&#xe650;',
		'icon-behance': '&#xe651;',
		'icon-stumbleupon': '&#xe652;',
		'icon-yelp': '&#xe653;',
		'icon-wordpress': '&#xe654;',
		'icon-windows-8': '&#xe655;',
		'icon-vine': '&#xe656;',
		'icon-tumblr': '&#xe657;',
		'icon-paypal': '&#xe658;',
		'icon-lastfm': '&#xe659;',
		'icon-instagram': '&#xe65a;',
		'icon-triangle-up': '&#xe600;',
		'icon-info-circle': '&#xe60f;',
		'icon-list-numbered': '&#xe61e;',
		'icon-chat': '&#xe62d;',
		'icon-export': '&#xe63c;',
		'icon-skype': '&#xe64b;',
		'icon-html5': '&#xe65b;',
		'icon-github': '&#xe65c;',
		'icon-foursquare': '&#xe65d;',
		'icon-dropbox': '&#xe65e;',
		'icon-android': '&#xe65f;',
		'icon-apple': '&#xe660;',
		'icon-globe': '&#xe661;',
		'icon-eye2': '&#xe662;',
		'icon-eye-blocked': '&#xe663;',
		'icon-thumbs-up': '&#xe664;',
		'icon-thumbs-up2': '&#xe665;',
		'icon-googleplus': '&#xe666;',
		'icon-github2': '&#xe667;',
		'icon-linkedin2': '&#xe668;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
