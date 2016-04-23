'use strict';

require('./sass/app.scss');
require('./img/pyramid-60x60.png');
require('./img/pyramid-16x16.png');
require('./img/linode.png');
require('./img/substance-d-logo.png');

require('./img/adroll-logo.png');
require('./img/appenlight-logo.png');
require('./img/autonomie-logo.png');
require('./img/avatars.png');
require('./img/baobab-infoladen-logo.gif');
require('./img/bateau-de-hollande-logo.png');
require('./img/birdseye-logo.jpg');
require('./img/bravewords-logo.png');
require('./img/discnw-logo.png');
require('./img/environmental-health-news-logo.png');
require('./img/european-energy-award-logo.jpg');
require('./img/fit-for-life-logo.jpg');
require('./img/hypothesis-logo.png');
require('./img/itcase-logo.png');
// require('./img/klein-und-partner-logo.svg');
// require('./img/konrad-adenauer-stiftung-logo.svg');
require('./img/kuiu-logo.png');
require('./img/linode.png');
//require('./img/linkpeek.svg');
require('./img/logo-white.png');
require('./img/logo.png');
require('./img/majerti-logo.png');
require('./img/mozilla-logo.png');
require('./img/newcars-logo.png');
require('./img/pc-blueprint-logo.png');
require('./img/peiffer-rollrasen-garten-und-landschaftsbau-logo.png');
require('./img/pyramid-16x16.png');
require('./img/pyramid-60x60.png');
require('./img/rhodecode-logo.png');
require('./img/sabrina-pontzen-raumdesign-logo.png');
require('./img/surveymonkey-logo.png');
require('./img/the-daily-climate-logo.png');
require('./img/talk-python-to-me-logo.png');
require('./img/travelcrm-logo.png');
require('./img/warehouse-pypi-logo.png');
require('./img/yelp-logo.png');
require('./img/zopyx-logo.jpg');

require('./img/adroll-logo.png');
require('./img/appenlight-logo.png');
require('./img/autonomie-logo.png');
require('./img/avatars.png');
require('./img/baobab-infoladen-logo.gif');
require('./img/bateau-de-hollande-logo.png');
require('./img/birdseye-logo.jpg');
require('./img/bravewords-logo.png');
require('./img/discnw-logo.png');
require('./img/environmental-health-news-logo.png');
require('./img/european-energy-award-logo.jpg');
require('./img/fit-for-life-logo.jpg');
require('./img/hypothesis-logo.png');
require('./img/itcase-logo.png');
// require('./img/klein-und-partner-logo.svg');
// require('./img/konrad-adenauer-stiftung-logo.svg');
require('./img/kuiu-logo.png');
require('./img/linode.png');
//require('./img/linkpeek.svg');
require('./img/logo-white.png');
require('./img/logo.png');
require('./img/majerti-logo.png');
require('./img/mozilla-logo.png');
require('./img/newcars-logo.png');
require('./img/pc-blueprint-logo.png');
require('./img/peiffer-rollrasen-garten-und-landschaftsbau-logo.png');
require('./img/pyramid-16x16.png');
require('./img/pyramid-60x60.png');
require('./img/rhodecode-logo.png');
require('./img/sabrina-pontzen-raumdesign-logo.png');
require('./img/surveymonkey-logo.png');
require('./img/the-daily-climate-logo.png');
require('./img/talk-python-to-me-logo.png');
require('./img/travelcrm-logo.png');
require('./img/warehouse-pypi-logo.png');
require('./img/yelp-logo.png');
require('./img/zopyx-logo.jpg');

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
