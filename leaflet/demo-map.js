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
