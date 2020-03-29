function generateMarkers(map){
  $.getJSON('homeless_drop_in_center.json', function(json){
    console.log('JSON Loaded');
    let lat_idx = 13;
    let lng_idx = 14;
    for(let i = 0; i < json['data'].length; i++){
      let lat = parseInt(json['data'][0][lat_idx]);
      let lng = parseInt(json['data'][0][lng_idx]);
      let marker = new google.maps.Marker({
        position: {lat, lng},
        map: map
      });
    }
  });
}
function generateMap(center){
}
//require('dotenv').config();
function initMap() {
  // The location of Uluru
  let nyc_lat = 40.7128;
  let nyc_lng = -74.006;
  var nyc_lat_lng = {lat: nyc_lat, lng: nyc_lng};
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 10,
      center: nyc_lat_lng
  });
  $.getJSON('homeless_drop_in_center.json', function(json){
    console.log('JSON Loaded');
    console.log(json);
    let lat_idx = 13;
    let lng_idx = 14;
    for(let i = 0; i < json['data'].length; i++){
      let lat = parseFloat(json['data'][i][lat_idx]);
      let lng = parseFloat(json['data'][i][lng_idx]);
      console.log(lat + " " + lng);
      let marker = new google.maps.Marker({
        position: {lat, lng}
      });
      marker.setMap(map);
    }
  });

  // The marker, positioned at Uluru
  /*var marker = new google.maps.Marker({
    position: nyc_lat_lng,
    map: map
  });*/
}
let apiScript = document.getElementById("apiScript");
apiScript.src = "https://maps.googleapis.com/maps/api/js?key=**API HERE**&callback=initMap";
