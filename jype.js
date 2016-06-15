L.mapbox.accessToken = 'pk.eyJ1IjoicGh5c2ljc2lzdGljIiwiYSI6Ik9VMGlKWWcifQ.jP7W0gvvgLs9Li2C7s271A';
var map = L.mapbox.map('map', 'mapbox.streets')
  .setView([40.74562, -73.985], 13);

var myLayer = L.mapbox.featureLayer().addTo(map);

// The GeoJSON representing the two point features
var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        properties: {
            title: 'JOY LUCK PALACE',
            'marker-color': '#3bb2d0',
            'marker-size': 'large',
            url: 'http://jy.pe/joy-luck-palace'
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.997287, 40.717135]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'HARD TIMES SUNDAES',
            'marker-color': '#3bb2d0',
            'marker-size': 'large',
            url: 'http://jy.pe/hard-times-sundaes'
        },
        geometry: {
            type: 'Point',
            coordinates: [-73.976106, 40.754393]
        }
    }]
};

// Pass features and a custom factory function to the map
myLayer.setGeoJSON(geojson);

myLayer.on('mouseover', function(e) {
    e.layer.openPopup();
});
myLayer.on('mouseout', function(e) {
    e.layer.closePopup();
});

myLayer.on('click', function(e) {
    window.open(e.layer.feature.properties.url);
});