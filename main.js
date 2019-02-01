$(document).ready(function(){
  $('.parallax').parallax();

  console.log('Setting up the maps');

  var taksimCords = new google.maps.LatLng(41.037860, 28.985049);
  var taksimElId = "taksimMap";
  console.log(document);
  var taksimEl = document.getElementById(taksimElId);
  console.log(taksimEl);
  setupMap(taksimCords, taksimEl);

  var bledCords = new google.maps.LatLng(46.364355, 13.093704);
  var bledElId = "bledMap";
  var bledEl = document.getElementById(bledElId);
  console.log(bledEl);
  setupMap(bledCords, bledEl);

  var berlinCords = new google.maps.LatLng(52.475413, 13.401801);
  var berlinElId = "berlinMap";
  var berlinEl = document.getElementById(berlinElId);
  console.log(berlinEl);
  setupMap(berlinCords, berlinEl);
});

function setupMap(cords, el) {
  var map = new google.maps.Map(el, {zoom: 12, center: cords});
  var marker = new google.maps.Marker({position: cords, map: map});
}