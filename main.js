$(document).ready(function(){
  $('.parallax').parallax();
});

function initMaps() {
  console.log('Setting up the maps');

  var taksimCords = new google.maps.LatLng(41.037860, 28.985049);
  var taksimElId = 'taksimMap';
  setupMap(taksimCords, taksimElId);

  var parisCords = new google.maps.LatLng(48.862508, 2.343092);
  var parisElId = 'parisMap';
  setupMap(parisCords, parisElId);

  var vancouverCords = new google.maps.LatLng(49.282425, -123.106959);
  var vancouverElId = 'vancouverMap';
  setupMap(vancouverCords, vancouverElId);
}

function setupMap(cords, elementId) {
  var map = new google.maps.Map(
      document.getElementById(elementId), {zoom: 4, center: cords});
  var marker = new google.maps.Marker({position: cords, map: map});
}