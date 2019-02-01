$(document).ready(function(){
  $('.parallax').parallax();

  console.log('Setting up the maps');

  var taksimCords = new google.maps.LatLng(41.037860, 28.985049);
  var taksimElId = "taksimMap";
  console.log(document);
  var taksimEl = document.getElementById(taksimElId);
  console.log(taksimEl);
  setupMap(taksimCords, taksimEl);

  var parisCords = new google.maps.LatLng(48.862508, 2.343092);
  var parisElId = "parisMap";
  var parisEl = document.getElementById(parisElId);
  console.log(parisEl);
  setupMap(parisCords, parisEl);

  var vancouverCords = new google.maps.LatLng(49.282425, -123.106959);
  var vancouverElId = "vancouverMap";
  var vancouverEl = document.getElementById(vancouverElId);
  console.log(vancouverEl);
  setupMap(vancouverCords, vancouverEl);
});

function setupMap(cords, el) {
  var map = new google.maps.Map(el, {zoom: 4, center: cords});
  var marker = new google.maps.Marker({position: cords, map: map});
}