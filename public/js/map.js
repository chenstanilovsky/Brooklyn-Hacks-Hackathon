const drop_in_center_indexes = Object.freeze({
  "Name": 8,
  "Borough": 9,
  "Address": 10,
  "Hours": 11,
  "Zip": 12,
  "Lat": 13,
  "Lng": 14,
  "Phone": -1
});
/*const facilities_indexes = Object.freeze({
  "Name": 11,
  "Borough": 17,
  "Address": 12,
  "Hours": -1,
  "Zip": 13,
  "Lat": -1,
  "Lng": -1,
  "Point":
});
*/
function parseHoursOpen(hours){
  let splitStr = hours.split('.');
  let output = "";
  for(let i = 0; i < splitStr.length; i++){
    if(splitStr[i] == " This program remain open 24 hours during winter months"){
      output +="</br>";
    }
    output += splitStr[i];
  }
  return output;
}
//require('dotenv').config();
function initMap() {
  let initial_json_path = "homeless_drop_in_center.json";
  //let initial_json_path = "homeless_facilities.json";
  let nyc_lat = 40.738;
  let nyc_lng = -74.006;
  var nyc_lat_lng = {lat: nyc_lat, lng: nyc_lng};
  generateMap(initial_json_path, drop_in_center_indexes, nyc_lat_lng);
}
function generateMap(json_path, idxs, center){
  //Center map based on location of markers
  let map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 11,
      center: center
  });
  $.getJSON(json_path, function(json){
    console.log('JSON Loaded');
    console.log(json);
    for(let i = 0; i < json['data'].length; i++){
      let lat = parseFloat(json['data'][i][idxs.Lat]);
      let lng = parseFloat(json['data'][i][idxs.Lng]);
      console.log(lat + " " + lng);
      let marker = new google.maps.Marker({
        position: {lat, lng},
        animation: google.maps.Animation.DROP,
        map: map,
        title: "Hello World!"
      });
      let hours_open = json['data'][i][idxs.Hours];
      let contentString = '<div><p>'+ json['data'][i][idxs.Name] +'</p><div>' + json['data'][i][idxs.Address] + '</div><div>' + json['data'][i][idxs.Borough] + ', NY ' + json['data'][i][idxs.Zip] + '</div></br><div>' + parseHoursOpen(hours_open) +'</div></div>';
      let infoWindow = new google.maps.InfoWindow({
          content: contentString
      });
      marker.addListener('click', function() {
          infoWindow.open(map, marker);
      });
    }
  });
}

let apiScript = document.getElementById("apiScript");
apiScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA5qrdsN0tofWSWv9d71dPpREvgnlXGByk&callback=initMap";
