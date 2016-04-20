'use strict';

require('./sass/app.scss');
require('./img/pyramid-60x60.png');
require('./img/pyramid-16x16.png');
require('./img/linode.png');
require('./img/substance-d-logo.png');

var hljs = require('highlight.js');

hljs.initHighlightingOnLoad();

if ($('.home').length){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 25) {
      $('#nav').removeClass('index-transparent');
    }
    else {
      $('#nav').addClass('index-transparent');
    }
  });
}
// var Isotope = require('isotope-layout');
//
// var iso = new Isotope( '.grid', {
//   filter: '.gi1'
// });

var $ = require('jquery');
var jQBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
// make Isotope a jQuery plugin
$.bridget( 'isotope', Isotope );
// now you can use $().isotope()
// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
