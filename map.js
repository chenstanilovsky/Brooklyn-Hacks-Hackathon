//require('dotenv').config();
console.log(process.env);
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
apiScript.src = "";
//  <script async defer src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap"></script>
