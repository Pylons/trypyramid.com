'use strict';

require('./sass/app.scss');
require('./img/logo-white.png');
require('./img/pyramid-16x16.png');

var hljs = require('highlight.js');

hljs.initHighlightingOnLoad();

if ($('.home').length){
  $('#nav').addClass('index-transparent');

  $(window).scroll(function() {
    if ($(document).scrollTop() > $('.hero-header').height()+70) {
      $('#nav').removeClass('index-transparent');
    }
    else {
      $('#nav').addClass('index-transparent');
    }
  });

}


