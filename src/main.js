'use strict';

require('./sass/app.scss');
require('./img/pyramid-60x60.png');
require('./img/pyramid-16x16.png');
require('./img/linode.png');

// logos
require('./img/adroll-logo.png');
require('./img/appenlight-logo.png');
require('./img/atramhasis-logo.png');
require('./img/autonomie-logo.png');
require('./img/baobab-infoladen-logo.gif');
require('./img/bateau-de-hollande-logo.png');
require('./img/bravewords-logo.png');
require('./img/discnw-logo.png');
require('./img/easyblognetworks-logo.png');
require('./img/environmental-health-news-logo.png');
require('./img/european-energy-award-logo.png');
require('./img/fit-for-life-logo.jpg');
require('./img/hypothesis-logo.png');
require('./img/itcase-logo.png');
require('./img/jetbrains-logo.png');
require('./img/klein-und-partner-logo.png');
require('./img/konrad-adenauer-stiftung-logo.png');
require('./img/kuiu-logo.png');
require('./img/lex-machina-logo.png');
require('./img/linkpeek-logo.png');
require('./img/majerti-logo.png');
require('./img/mozilla-logo.png');
require('./img/nasa-images-logo.jpg');
require('./img/nextgis-logo.png');
require('./img/nextgis-web-logo.png');
require('./img/newcars-logo.png');
require('./img/niteoweb-logo.png');
require('./img/noppo-logo.png');
require('./img/opencioc-org-logo.png');
require('./img/pc-blueprint-logo.png');
require('./img/peiffer-rollrasen-garten-und-landschaftsbau-logo.png');
require('./img/pycharm-logo.png');
require('./img/remarkbox-logo.png');
require('./img/rhodecode-logo.png');
require('./img/rollbar-logo.png');
require('./img/sabrina-pontzen-raumdesign-logo.png');
require('./img/snapsat-logo.png');
require('./img/substance-d-logo.png');
require('./img/surveymonkey-logo.png');
require('./img/talk-python-to-me-logo.png');
require('./img/the-daily-climate-logo.png');
require('./img/travelcrm-logo.png');
require('./img/truveris-logo.png');
require('./img/warehouse-pypi-logo.png');
require('./img/yelp-logo.png');
require('./img/zopyx-logo.png');

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

$(window).bind('load', function() {
  $grid.isotope('layout');
});
