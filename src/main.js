'use strict';

require('./sass/app.scss');
require('./img/logo-white.png');
require('./img/pyramid-16x16.png');

var hljs = require('highlight.js');

hljs.initHighlightingOnLoad();

$(window).scroll(function() {
  if ($(document).scrollTop() > $('.hero-header').height()+130) {
    $('nav#nav').addClass('show fadeIn animated');
  }
  else {
    $('nav#nav').removeClass('show');
  }
});
