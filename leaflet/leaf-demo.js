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
