$(document).ready(function(){
  $('.parallax').parallax();
  console.log('Setting up the maps');
  setupTaksim();
  setupParis();
  setupVancouver();

  google.maps.event.addDomListener(window, 'load', initialize);
});

function setupTaksim() {
  var taksimProp = {
    center:new google.maps.LatLng(41.037860, 28.985049),
    zoom:12,
    mapTypeId:google.maps.MapTypeId.SATELLITE
  };
  var map=new google.maps.Map(document.getElementById("taksimMap"), taksimProp);
}

function setupParis() {
  var taksimProp = {
    center:new google.maps.LatLng(48.862508, 2.343092),
    zoom:12,
    mapTypeId:google.maps.MapTypeId.SATELLITE
  };
  var map=new google.maps.Map(document.getElementById("parisMap"), taksimProp);
}

function setupVancouver() {
  var taksimProp = {
    center:new google.maps.LatLng(49.282425, -123.106959),
    zoom:12,
    mapTypeId:google.maps.MapTypeId.SATELLITE
  };
  var map=new google.maps.Map(document.getElementById("vancouverMap"), taksimProp);
}