///* ///////////// basemap /////////////

var map = L.map("map", {
  center: [52.493891, 13.446395],
  minZoom: 16,
  zoom: 14,
});

L.tileLayer("	http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//* The Collars

let icons = {
  user: {},
  pinkCollar: {},
  purpleCollar: {},
  orangeCollar: {},
  blueCollar: {},
  greenCollar: {},
};

//* Assigned Icons

icons["user"]["icon"] = L.icon({
  iconUrl: "./images/user-icon.png",
  iconSize: [30, 30],
  iconAnchor: [9, 21],
});

icons["pinkCollar"]["icon"] = L.icon({
  iconUrl: "./images/pinkmarker-mapicon.png",
  iconSize: [22, 35],
  iconAnchor: [9, 21],
});

icons["purpleCollar"]["icon"] = L.icon({
  iconUrl: "./images/purplemarker-mapicon.png",
  iconSize: [22, 35],
  iconAnchor: [9, 21],
});

icons["orangeCollar"]["icon"] = L.icon({
  iconUrl: "./images/orangemarker-mapicon.png",
  iconSize: [22, 35],
  iconAnchor: [9, 21],
});

icons["blueCollar"]["icon"] = L.icon({
  iconUrl: "./images/bluemarker-mapicon.png",
  iconSize: [22, 35],
  iconAnchor: [9, 21],
});

icons["greenCollar"]["icon"] = L.icon({
  iconUrl: "./images/greenmarker-mapicon.png",
  iconSize: [22, 35],
  iconAnchor: [9, 21],
});

//* Co-ords
// Code University co-ords
// var lat = 52.493891;
// var lng = 13.446395;

icons.user["coords"] = [52.493891, 13.446395];
icons.pinkCollar["coords"] = [52.495886, 13.44846];
icons.purpleCollar["coords"] = [52.491835, 13.442956];
icons.orangeCollar["coords"] = [52.492829, 13.447287];
icons.blueCollar["coords"] = [52.494875, 13.442967];
icons.greenCollar["coords"] = [52.493886, 13.44918];

//* Markers

icons.user["marker"] = L.marker(icons.user["coords"], {
  icon: icons["user"]["icon"],
}).addTo(map);

icons.pinkCollar["marker"] = L.marker(icons.pinkCollar["coords"], {
  icon: icons["pinkCollar"]["icon"],
}).addTo(map);

icons.purpleCollar["marker"] = L.marker(icons.purpleCollar["coords"], {
  icon: icons["purpleCollar"]["icon"],
}).addTo(map);

icons.orangeCollar["marker"] = L.marker(icons.orangeCollar["coords"], {
  icon: icons["orangeCollar"]["icon"],
}).addTo(map);

icons.blueCollar["marker"] = L.marker(icons.blueCollar["coords"], {
  icon: icons["blueCollar"]["icon"],
}).addTo(map);

icons.greenCollar["marker"] = L.marker(icons.greenCollar["coords"], {
  icon: icons["greenCollar"]["icon"],
}).addTo(map);

setInterval(function () {
  let keys = Object.keys(icons);
  keys.forEach(function (key) {
    icons[key]["coords"][0] =
      icons[key]["coords"][0] + (Math.random() * 0.5 - 0.25) * 0.0004;
    icons[key]["coords"][1] =
      icons[key]["coords"][1] + (Math.random() * 0.5 - 0.25) * 0.0004;
    icons[key]["marker"].setLatLng(icons[key]["coords"]).update();
    // console.log(marker.getLatLng().lat);
    // console.log(marker.getLatLng().lng);
    // let proxi = L.circle(icons.pinkCollar["coords"], {     //! Work with Geofence to create boundary for alert
    //   color: "#ed0cef",
    //   fillColor: "#eca3f5",
    //   fillOpacity: 0.5,
    //   radius: 50,
    // }).addTo(map);
    // console.log(key);
  });
}, 200);

let keys = Object.keys(icons);
// console.log(keys);

// TODO: Create proximity alert for pink collar radius

// ? Use of Geofencing for proximity alert?

var marker = new L.marker([52.491891, 13.446395], {
  draggable: true,
  autoPan: true,
}).addTo(map);

var circle = L.circle([52.493891, 13.446395], {
  color: "none",
  fillColor: "none",
  fillOpacity: 0.5,
  radius: 50.0,
}).addTo(map);

marker.on("drag", function (e) {
  var d = map.distance(e.latlng, circle.getLatLng());
  var isInside = d < circle.getRadius();
  circle.setStyle({
    fillColor: isInside ? "#e84545" : "",
  });
});

//* ///////////// audio /////////////

var audio = new Audio("sounds/bark.mp3");

function play() {
  audio.play();
}

function bark() {
  setTimeout(function () {
    alertify.warning("Careful! Another dog nearby.");
  }, 90);
  play();
}
//* /////////////  Basic demo /////////////

// function runApp() {
//   iconsDlt();
//   setTimeout(function () {
//     mockApp();
//   }, 100);
//   play();
//   setTimeout(function () {
//     alertify.warning("Careful! Another dog nearby.");
//   }, 90);
// }

// TODO: Create example code in website for live location

// Livelocation
// function onLocationFound(e) {
//   var radius = e.accuracy;

//   L.marker(e.latlng).addTo(map)
//       .bindPopup("You are within " + radius + " meters from this point").openPopup();

//   L.circle(e.latlng, radius).addTo(map);
// }

// map.on('locationfound', onLocationFound);

// locationnotfound
// function onLocationError(e) {
//   alert(e.message);
// }

// map.on('locationerror', onLocationError);
