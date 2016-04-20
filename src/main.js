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



// basic usage

// init Isotope
// var $grid = $('.grid').isotope({
//   // options
// });
// // filter items on button click
// $('.filter-button-group').on( 'click', 'button', function() {
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
// });



// inclusive selection

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.pyramid-item'
});

// store filter for each group
var filters = [];

// change is-checked class on buttons
$('.filters').on( 'click', 'button', function( event ) {
  var $target = $( event.currentTarget );
  $target.toggleClass('is-checked');
  var isChecked = $target.hasClass('is-checked');
  var filter = $target.attr('data-filter');
  if ( isChecked ) {
    addFilter( filter );
  } else {
    removeFilter( filter );
  }
  // filter isotope
  // group filters together, inclusive
  $grid.isotope({ filter: filters.join(',') });
});

function addFilter( filter ) {
  if ( filters.indexOf( filter ) == -1 ) {
    filters.push( filter );
  }
}

function removeFilter( filter ) {
  var index = filters.indexOf( filter);
  if ( index != -1 ) {
    filters.splice( index, 1 );
  }
}
