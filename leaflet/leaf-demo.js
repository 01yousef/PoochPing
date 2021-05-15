///* ///////////// basemap /////////////

var map = L.map("map", {
  center: [52.493891, 13.446395],
  minZoom: 14,
  zoom: 16,
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
  collarAlert: {},
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
icons.pinkCollar["coords"] = [52.495891, 13.446395];
icons.purpleCollar["coords"] = [52.492891, 13.445395];
icons.orangeCollar["coords"] = [52.491891, 13.446395];
icons.blueCollar["coords"] = [52.494891, 13.444395];
icons.greenCollar["coords"] = [52.492891, 13.447395];
icons.collarAlert["coords"] = icons.pinkCollar["coords"];

icons["collarAlert"]["icon"] = function () {
  if (alertcircle) {
  } else
    return L.circle(icons.collarAlert["coords"], {
      color: "#bdd2b6",
      fillColor: "none",
      fillOpacity: 0.5,
      radius: 75.0,
      weight: 1,
    });
};

//* Markers

icons.user["marker"] = L.marker(icons.user["coords"], {
  icon: icons["user"]["icon"],
  draggable: true,
  autoPan: true,
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

//* ///////////// The Mockup App ///////////

// audio

var audio = new Audio("sounds/bark.mp3");

function play() {
  audio.play();
}

var alertcircle = icons["collarAlert"]["icon"]();
alertcircle.addTo(map);
// icons["collarAlert"]["icon"].addTo(map);

var canBark = true;

setInterval(function () {
  let keys = Object.keys(icons);

  keys.forEach(function (key) {
    if (key !== "collarAlert" && key !== "user") {
      // icons["collarAlert"]["icon"];
      icons[key]["coords"][0] =
        icons[key]["coords"][0] + (Math.random() * 0.5 - 0.25) * 0.0009;
      icons[key]["coords"][1] =
        icons[key]["coords"][1] + (Math.random() * 0.5 - 0.25) * 0.0009;
      icons[key]["marker"].setLatLng(icons[key]["coords"]).update();
    }

    // console.log(marker.getLatLng().lat);
    // console.log(marker.getLatLng().lng);
    // console.log(key);
  });

  alertcircle.setLatLng(icons["pinkCollar"]["coords"]); //Function for later
  var isInside = false;
  keys.forEach(function (key) {
    if (key !== "pinkCollar" && key !== "collarAlert") {
      var d = map.distance(
        icons[key]["marker"].getLatLng(),
        alertcircle.getLatLng()
      );
      if (d < alertcircle.getRadius()) {
        isInside = true;
      }
      alertcircle.setStyle({
        fillColor: isInside ? "#ce1212" : "",
      });

      if (isInside && canBark) {
        alertify.warning("Careful! Another dog nearby.");
        play();

        setTimeout(() => {
          canBark = true;
        }, 5000);
        canBark = false;
      }
    }
  });
}, 1200);

let keys = Object.keys(icons);

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
