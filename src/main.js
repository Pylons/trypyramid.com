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

var jQBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
$.bridget( 'isotope', Isotope );

// Init Isotope Grid
var $grid = $('.grid').isotope({
  itemSelector: '.pyramid-item'
});

// Multiselect Isotope Filter
var filterSelector = '.extending-filters .filter-multiselect';
$(filterSelector).multiselect({
  enableClickableOptGroups: true,
  buttonText: function(options, select) {
    return 'Filter packages';
  },
  onChange: function(option, checked) {
    var filters = []
    $(filterSelector + ' option:selected').map(function(a, item) {
      filters.push('.'+item.value)
    });
    $grid.isotope({ filter: filters.join(',') });
  }
});
