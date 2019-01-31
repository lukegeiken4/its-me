$(document).ready(function(){
  $('.parallax').parallax();
});

function initMaps() {
  console.log('Setting up the maps');
  
  var taksimCords = {lat: 41.037860, lng: 28.985049};
  var taksimElId = 'taksimMap';
  setupMap(taksimCords, taksimElId);

  var parisCords = {lat: 48.862508, lng: 2.343092};
  var parisElId = 'parisMap';
  setupMap(parisCords, parisElId);

  var vancouverCords = {lat: 49.282425, lng: -123.106959};
  var vancouverElId = 'vancouverMap';
  setupMap(vancouverCords, vancouverElId);
}

function setupMap(cords, elementId) {
  var map = new google.maps.Map(
      document.getElementById(elementId), {zoom: 4, center: cords});
  var marker = new google.maps.Marker({position: cords, map: map});
}