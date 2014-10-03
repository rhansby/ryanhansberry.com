var peeper_spottings = [
    {
        address: '10970 Roebling Ave.',
        location: [34.065076, -118.448908],
        date: 'Sep 7, 2013 20:00:00 PDT'
    },
    {
        address: '10987 Roebling Ave.',
        location: [34.064940, -118.449536],
        date: 'Sep 23, 2013 20:00:00 PDT'
    },
    {
        "address": "10953 Roebling Ave.",
        "location": [34.065618, -118.448932],
        "date": "January 25 2014 22:00:00 PDT"
    },
    {
        "address": "662 Kelton Ave.",
        "location": [34.064998, -118.452470],
        "date": "February 5 2014 04:00:00 PDT"
    },
    {
        "address": "10967 Roebling Ave.",
        "location": [34.065389, -118.449129],
        "date": "March 6 2014 00:00:00 PDT"
    },
    {
        "address": "10969 Roebling Ave.",
        "location": [34.065345, -118.449169],
        "date": "March 8 2014 01:00:00 PDT"
    },
    {
        "address": "10953 Roebling Ave.",
        "location": [34.065618, -118.448932],
        "date": "March 9 2014 23:00:00 PDT"
    },
    {
        "address": "447 Kelton Ave.",
        "location": [34.068941, -118.453717],
        "date": "March 13 2014 01:00:00 PDT"
    },
    {
        "address": "685 Kelton Ave.",
        "location": [34.064452, -118.452709],
        "date": "March 25 2014 00:00:00 PDT"
    },
    {
        "address": "549 Kelton Ave.",
        "location": [34.066924, -118.453470],
        "date": "March 29 2014 20:00:00 PDT"
    },
    {
        "address": "350 De Neve Dr.",
        "location": [34.072129, -118.449981],
        "date": "April 3 2014 17:00:00 PDT"
    },
    {
        "address": "10953 Roebling Ave.",
        "location": [34.065618, -118.448932],
        "date": "April 8 2014 20:00:00 PDT"
    },
    {
        "address": "350 De Neve Dr.",
        "location": [34.072129, -118.449981],
        "date": "April 15 2014 03:00:00 PDT"
    },
    {
        "address": "715 Gayley Ave.",
        "location": [34.065039, -118.448414],
        "date": "April 18 2014 00:00:00 PDT"
    },
    {
        "address": "658 Kelton Ave.",
        "location": [34.065096, -118.452792],
        "date": "May 16 2014 03:00:00 PDT"
    },
    {
        "address": "658 Kelton Ave.",
        "location": [34.065096, -118.452792],
        "date": "May 21 2014 05:00:00 PDT"
    },
    {
        "address": "221 Westwood Plaza",
        "location": [34.071569, -118.445319],
        "date": "May 25 2014 16:00:00 PDT"
    },
    {
        "address": "658 Kelton Ave.",
        "location": [34.065096, -118.452792],
        "date": "June 1 2014 02:00:00 PDT"
    },
    {
        "address": "634 Kelton Ave.",
        "location": [34.065811, -118.452744],
        "date": "June 2 2014 22:00:00 PDT"
    },
    {
        "address": "10960 Roebling Ave.",
        "location": [34.065535, -118.448974],
        "date": "June 16 2014 23:00:00 PDT"
    },
    {
        "address": "400 Kelton Ave.",
        "location": [34.070343, -118.453897],
        "date": "June 17 2014 01:00:00 PDT"
    },
    {
        "address": "10824 Lindbrook Dr.",
        "location": [34.060334, -118.441130],
        "date": "June 23 2014 03:00:00 PDT"
    },
    {
        "address": "685 Kelton Ave.",
        "location": [34.064452, -118.452709],
        "date": "June 25 2014 23:00:00 PDT"
    },
    {
        "address": "10947 Ophir Dr.",
        "location": [34.068461, -118.451359],
        "date": "July 5 2014 01:00:00 PDT"
    },
    {
        "address": "515 Kelton Ave.",
        "location": [34.067700, -118.453924],
        "date": "July 13 2014 23:00:00 PDT"
    },
    {
        "address": "530 Veteran Ave.",
        "location": [34.067400, -118.454464],
        "date": "July 20 2014 22:00:00 PDT"
    },
    {
        "address": "10963 Roebling Ave.",
        "location": [34.065476, -118.449049],
        "date": "August 22 2014 21:00:00 PDT"
    },
    {
        "address": "10972 Roebling Ave.",
        "location": [34.065190, -118.449305],
        "date": "August 25 2014 01:00:00 PDT"
    }
];

var westwood_position = [34.066, -118.445];
var map = L.map('map').setView(westwood_position, 15);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

peeper_spottings.forEach(function(spotting) {
    L.marker(spotting.location).addTo(map)
        .bindPopup(spotting.address + '<br>' + spotting.date);
});











// window.raw = [
//     'January 25/ 2014    10 p.m. 10953   Roebling Ave.',
//     'February 5/ 2014    4 a.m.  662 Kelton Ave.',
//     'March 6/ 2014   12 a.m. 10967   Roebling Ave.',
//     'March 8/ 2014   1 a.m.  10969   Roebling Ave.',
//     'March 9/ 2014   11 p.m. 10953   Roebling Ave.',
//     'March 13/ 2014  1 a.m.  447 Kelton Ave.',
//     'March 25/ 2014  12 a.m. 685 Kelton Ave.',
//     'March 29/ 2014  8 p.m.  549 Kelton Ave.',
//     'April 3/ 2014   5 p.m.  350 De Neve Dr.',
//     'April 8/ 2014   8 p.m.  10953   Roebling Ave.',
//     'April 15/ 2014  3 a.m.  350 De Neve Dr.',
//     'April 18/ 2014  12 a.m. 715 Gayley Ave.',
//     'May 16/ 2014    3 a.m.  658 Kelton Ave.',
//     'May 21/ 2014    5 a.m.  658 Kelton Ave.',
//     'May 25/ 2014    4 p.m.  221 Westwood Plaza',
//     'June 1/ 2014    2 a.m.  658 Kelton Ave.',
//     'June 2/ 2014    10 p.m. 634 Kelton Ave.',
//     'June 16/ 2014   11 p.m. 10960   Roebling Ave.',
//     'June 17/ 2014   1 a.m.  400 Kelton Ave.',
//     'June 23/ 2014   3 p.m.  10824   Lindbrook Dr.',
//     'June 25/ 2014   11 p.m. 685 Kelton Ave.',
//     'July 5/ 2014    1 a.m.  10947   Ophir Dr.',
//     'July 13/ 2014   11 p.m. 515 Kelton Ave.',
//     'July 20/ 2014   10 p.m. 530 Veteran Ave.',
//     'August 22/ 2014 9 p.m.  10963   Roebling Ave.',
//     'August 25/ 2014 1 a.m.  10972   Roebling Ave.',
// ]

// data = raw.map(function(el) {
//     addr = (el.split(/m\./)[1].trim().split(/\s+/).join(' '));
//     dat = el.substring(0, el.indexOf('.m.') - 4).trim().replace(/\//g, '')

//     return {
//         address: addr,
//         location: [],
//         date: dat
//     }
// });
