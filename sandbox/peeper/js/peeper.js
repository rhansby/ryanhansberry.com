var peeperSpottings = [
    {
        address: '10970 Roebling Ave.',
        coordinates: [34.065076, -118.448908],
        date: 'Sep 7, 2013 20:00:00 PDT'
    },
    {
        address: '10987 Roebling Ave.',
        coordinates: [34.064940, -118.449536],
        date: 'Sep 23, 2013 20:00:00 PDT'
    },
    {
        address: "10953 Roebling Ave.",
        coordinates: [34.065618, -118.448932],
        date: "January 25 2014 22:00:00 PDT"
    },
    {
        address: "662 Kelton Ave.",
        coordinates: [34.064998, -118.452470],
        date: "February 5 2014 04:00:00 PDT"
    },
    {
        address: "10967 Roebling Ave.",
        coordinates: [34.065389, -118.449129],
        date: "March 6 2014 00:00:00 PDT"
    },
    {
        address: "10969 Roebling Ave.",
        coordinates: [34.065345, -118.449169],
        date: "March 8 2014 01:00:00 PDT"
    },
    {
        address: "10953 Roebling Ave.",
        coordinates: [34.065618, -118.448932],
        date: "March 9 2014 23:00:00 PDT"
    },
    {
        address: "447 Kelton Ave.",
        coordinates: [34.068941, -118.453717],
        date: "March 13 2014 01:00:00 PDT"
    },
    {
        address: "685 Kelton Ave.",
        coordinates: [34.064452, -118.452709],
        date: "March 25 2014 00:00:00 PDT"
    },
    {
        address: "549 Kelton Ave.",
        coordinates: [34.066924, -118.453470],
        date: "March 29 2014 20:00:00 PDT"
    },
    {
        address: "350 De Neve Dr.",
        coordinates: [34.072129, -118.449981],
        date: "April 3 2014 17:00:00 PDT"
    },
    {
        address: "10953 Roebling Ave.",
        coordinates: [34.065618, -118.448932],
        date: "April 8 2014 20:00:00 PDT"
    },
    {
        address: "350 De Neve Dr.",
        coordinates: [34.072129, -118.449981],
        date: "April 15 2014 03:00:00 PDT"
    },
    {
        address: "715 Gayley Ave.",
        coordinates: [34.065039, -118.448414],
        date: "April 18 2014 00:00:00 PDT"
    },
    {
        address: "658 Kelton Ave.",
        coordinates: [34.065096, -118.452792],
        date: "May 16 2014 03:00:00 PDT"
    },
    {
        address: "658 Kelton Ave.",
        coordinates: [34.065096, -118.452792],
        date: "May 21 2014 05:00:00 PDT"
    },
    {
        address: "221 Westwood Plaza",
        coordinates: [34.071569, -118.445319],
        date: "May 25 2014 16:00:00 PDT"
    },
    {
        address: "658 Kelton Ave.",
        coordinates: [34.065096, -118.452792],
        date: "June 1 2014 02:00:00 PDT"
    },
    {
        address: "634 Kelton Ave.",
        coordinates: [34.065811, -118.452744],
        date: "June 2 2014 22:00:00 PDT"
    },
    {
        address: "10960 Roebling Ave.",
        coordinates: [34.065535, -118.448974],
        date: "June 16 2014 23:00:00 PDT"
    },
    {
        address: "400 Kelton Ave.",
        coordinates: [34.070343, -118.453897],
        date: "June 17 2014 01:00:00 PDT"
    },
    {
        address: "10824 Lindbrook Dr.",
        coordinates: [34.060334, -118.441130],
        date: "June 23 2014 03:00:00 PDT"
    },
    {
        address: "685 Kelton Ave.",
        coordinates: [34.064452, -118.452709],
        date: "June 25 2014 23:00:00 PDT"
    },
    {
        address: "10947 Ophir Dr.",
        coordinates: [34.068461, -118.451359],
        date: "July 5 2014 01:00:00 PDT"
    },
    {
        address: "515 Kelton Ave.",
        coordinates: [34.067700, -118.453924],
        date: "July 13 2014 23:00:00 PDT"
    },
    {
        address: "530 Veteran Ave.",
        coordinates: [34.067400, -118.454464],
        date: "July 20 2014 22:00:00 PDT"
    },
    {
        address: "10963 Roebling Ave.",
        coordinates: [34.065476, -118.449049],
        date: "August 22 2014 21:00:00 PDT"
    },
    {
        address: "10972 Roebling Ave.",
        coordinates: [34.065190, -118.449305],
        date: "August 25 2014 01:00:00 PDT"
    }
];

peeperSpottings.forEach(function(spotting) {
    spotting.date = new Date(spotting.date);
});

var i = 1;
var geoJsonData = {
    type: "FeatureCollection",
    features: peeperSpottings.map(function(spotting) {
        return {
            type: 'Feature',
            id: i++,
            properties: {
                address: spotting.address,
                date: spotting.date
            },
            geometry: {
                type: 'Point',
                // Strangely this plugin switches lat and long... wtf.
                coordinates: [spotting.coordinates[1], spotting.coordinates[0]]
            }
        };
    })
};

var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var map = L.map('map').addLayer(tiles);

var markers = L.markerClusterGroup();

var geoJsonLayer = L.geoJson(geoJsonData, {
    onEachFeature: function(feature, layer) {
        var date = feature.properties.date;
        // var dateString = date.getMonth() + ' ' + date.getDate() + ' ' + date.getFullYear() + ', ' + date.getHours() + ':' + date.getMinutes();
        var dateString = date.toDateString().substring(3);

        layer.bindPopup(feature.properties.address + '<br>' + dateString + ', ' + date.toLocaleTimeString());
    }
});
markers.addLayer(geoJsonLayer);

map.addLayer(markers);
map.fitBounds(markers.getBounds());









// function DateSlider() {
//     var dates = peeperSpottings.map(function(spotting) {
//         return new Date(spotting.date);
//     });
//     var dateIterator = dates.length - 1;

//     var intervalHandle, dateSliderEl = document.getElementById('date-slider');
//     dateSliderEl.addEventListener('change', function() {
//         intervalHandle = setInterval(function() {
//             dateIterator = dateSliderEl.value;
//             this.updateMap();
//         }.bind(this), 100);
//     }.bind(this));

//     dateSliderEl.addEventListener('blur', function() {
//         clearInterval(intervalHandle);
//     });

//     this.incrementDate = function() {
//         if (dateIterator >= dates.length) {
//             return false;
//         }
//         dateIterator++;
//         this.updateMap();
//         return true;
//     };

//     this.decrementDate = function() {
//         if (dateIterator <= 0) {
//             return false;
//         }
//         dateIterator--;
//         this.updateMap();
//         return true;
//     };

//     this.updateMap = function() {
//         peeperSpottings.forEach(function(spotting) {
//             var spotting_time = (new Date(spotting.date)).getTime();
//             if (spotting_time < dates[dateIterator].getTime()) {
//                 if (!spotting.marker.isOnMap) {
//                     spotting.marker
//                         .addTo(map)
//                         .bindPopup(spotting.address + '<br>' + spotting.date);
//                     spotting.marker.isOnMap = true;
//                 }
//             } else {
//                 map.removeLayer(spotting.marker);
//                 spotting.marker.isOnMap = false;
//             }
//         });
//     };
// }

// var dateSlider = new DateSlider();
// dateSlider.updateMap();



