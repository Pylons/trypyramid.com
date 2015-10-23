'use strict';

require('./sass/app.scss');
require('./img/logo-white.png');
require('./img/pyramid-16x16.png');

var hljs = require('highlight.js');

hljs.initHighlightingOnLoad();

if ($('.home').length){
  $(window).scroll(function() {
    if ($(document).scrollTop() > $('.hero-header').height()+40) {
      $('#nav').removeClass('index-transparent');
    }
    else {
      $('#nav').addClass('index-transparent');
    }
  });
} else {
    $('#nav').removeClass('index-transparent');
}
