//* basemap

var map = L.map("map", {
  center: [52.493891, 13.446395],
  minZoom: 16,
  zoom: 14,
});

L.tileLayer("	http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//* dog collars = markers

var myURL = jQuery('script[src$="leaf-demo.js"]')
  .attr("src")
  .replace("leaf-demo.js", "");

console.log(myURL);

var user = L.icon({
  iconUrl: myURL + "../Images/user-icon.png",
  iconSize: [30, 30],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
});

var pinkCollar = L.icon({
  iconUrl: myURL + "../Images/pinkmarker-mapicon.png",
  iconSize: [22, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
});

var orangeCollar = L.icon({
  iconUrl: myURL + "../Images/orangemarker-mapicon.png",
  iconSize: [22, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
});

var purpleCollar = L.icon({
  iconUrl: myURL + "../Images/purplemarker-mapicon.png",
  iconSize: [22, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
});

var blueCollar = L.icon({
  iconUrl: myURL + "../Images/bluemarker-mapicon.png",
  iconSize: [22, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
});

var greenCollar = L.icon({
  iconUrl: myURL + "../Images/greenmarker-mapicon.png",
  iconSize: [22, 35],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
});

// *App Mockup Example

const originLat = 52.493891;
const originLng = 13.446395;
/*create array:*/

var icons = new Array();
let proxi;

const mockApp = function () {
  let tempIcon;

  for (var i = 0; i < markers.length; ++i) {
    if (markers[i].icon === "user") {
      tempIcon = user;
    } else if (markers[i].icon === "pinkCollar") {
      tempIcon = pinkCollar;
    } else if (markers[i].icon === "orangeCollar") {
      tempIcon = orangeCollar;
    } else if (markers[i].icon === "purpleCollar") {
      tempIcon = purpleCollar;
    } else if (markers[i].icon === "blueCollar") {
      tempIcon = blueCollar;
    } else if (markers[i].icon === "greenCollar") {
      tempIcon = greenCollar;
    } else {
      console.log("i dont exist");
    }

    if (markers[i].ranPos === true) {
      markers[i].lat = originLat + (Math.random() * 3.5 - 2) / 1000;
      markers[i].lng = originLng + (Math.random() * 3.5 - 2) / 1000;
      if (tempIcon === pinkCollar) {
        proxi = L.circle([markers[i].lat, markers[i].lng], {
          color: "#ed0cef",
          fillColor: "#eca3f5",
          fillOpacity: 0.5,
          radius: 100,
        });
        map.addLayer(proxi);
      }
    }

    var ranMarker = new L.marker([markers[i].lat, markers[i].lng], {
      icon: tempIcon,
    });
    icons.push(ranMarker);
    map.addLayer(icons[i]);
  }
};

/* Going through these marker-items again removing them*/
function iconsDlt() {
  for (i = 0; i < icons.length; i++) {
    map.removeLayer(icons[i]);
    map.removeLayer(proxi);
  }
  icons = [];
}

function runApp() {
  iconsDlt();
  setTimeout(function () {
    mockApp();
  }, 100);
}

mockApp();
