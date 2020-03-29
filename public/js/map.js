//require('dotenv').config();
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
let apiScript = document.getElementById("apiScript");
apiScript.src = "https://maps.googleapis.com/maps/api/js?key=**API HERE**&callback=initMap";
//  <script async defer src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap"></script>
