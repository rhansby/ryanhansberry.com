function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}
function toDegrees(rads) {
    return rads * (180 / Math.PI);
}

$(document).ready(function() {
    window.App = window.App || {};

    var $canvas = $('#canvas');

    var width = $('#canvas').width(),
        height = $('#canvas').height();

    var view_angle = 45,
        aspect = width / height,
        near = 0.1,
        far = 10000;

    App.scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(view_angle, aspect, near, far);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    $canvas.append(renderer.domElement);

    $(window).resize(function() {
        if (width !== $('#canvas').width()) {
            width = $('#canvas').width();
            height = $('#canvas').height();

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
        }
    });

    var light = new THREE.AmbientLight( 0x705030 ); // soft white light
    App.scene.add( light );

    var pointLight = new THREE.PointLight(0xff8000);
    pointLight.position.x = 0;
    pointLight.position.y = 0;
    pointLight.position.z = 0;
    App.scene.add(pointLight);

    camera.position.z = 50;

    var stars = new Planet({
        material: new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture("/portfolio/solar-system/img/stars.jpg") }),
        scale: 100
    });

    var sun = new Planet({
        material: new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("/portfolio/solar-system/img/sun.jpg") }),
        scale: 5
    });

    // Dirty hack to flip the sphere "inside out" and reverse its normals so that its whole interior surface is lit:
    for (var i = 0; i < stars.geometry.vertices.length; i++) {
        stars.geometry.vertices[i].x *= -1;
        stars.geometry.vertices[i].y *= -1;
        stars.geometry.vertices[i].z *= -1;
    }

    var planets = [
        // Small red planet
        new Planet({
            material: new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture("/portfolio/solar-system/img/venus.jpg") }),
            scale: 2,
            orbit_radius: 8,
            orbit_speed: 0.6,
            orbit_y_tilt: 5
        }),

        // Smaller red planet
        new Planet({
            scale: 1,
            orbit_radius: 11,
            orbit_speed: -0.4,
            orbit_y_tilt: 0.5
        }),

        // Medium sized earth
        new Planet({
            material: new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture("/portfolio/solar-system/img/earth.jpg") }),
            rotation_speed: 1.5,
            scale: 3,
            orbit_radius: 17,
            orbit_speed: 0.75,
            orbit_y_tilt: -2
        }),

        // Large Jupiter
        new Planet({
            material: new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture("/portfolio/solar-system/img/jupiter.jpg") }),
            scale: 5,
            orbit_radius: 28,
            orbit_speed: 0.1,
            orbit_y_tilt: 1
        }),

        // Medium icy planet
        new Planet({
            material: new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture("/portfolio/solar-system/img/ice.png") }),
            scale: 2,
            orbit_radius: 35,
            orbit_speed: -0.2,
            orbit_y_tilt: -7
        })
    ];

    // Earth's moon:
    window.moon = new Planet({
        material: new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture("/portfolio/solar-system/img/moon.gif") }),
        scale: 0.5,
    });
    moon.position.x = 1.8;
    planets[2].add(moon);

    window.solar_system = new THREE.Object3D();
    solar_system.add(stars);
    solar_system.add(sun);
    for (i = 0; i < planets.length; i++) {
        solar_system.add(planets[i]);
    }
    App.scene.add(solar_system);

    App.updatePlanetAttributes = function(planet_id, new_attrs) {
        if (isNaN(planet_id) || planet_id < 0 || 4 < planet_id || ! new_attrs) {
            return false;
        }
        if (new_attrs.radius) {
            planets[planet_id].orbit_attrs.radius = new_attrs.radius;
        }
        if (new_attrs.scale) {
            planets[planet_id].scale.x = planets[planet_id].scale.y = planets[planet_id].scale.z = new_attrs.scale;
        }
        return true;
    };

    var mouseX = 0, mouseY = 0;
    document.getElementById('canvas').addEventListener('mousemove', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }, false);

    var render = function () {
        requestAnimationFrame(render);

        var theta = (mouseX - (width / 2)) / 500;
        var phi = (mouseY - (height / 2)) / 500;

        solar_system.rotation.y = theta;
        solar_system.rotation.x = phi * Math.cos(theta);
        solar_system.rotation.z = phi * Math.sin(-theta);

        for (var i = 0; i < planets.length; i++) {
            planets[i].orbit();
        }

        renderer.render(App.scene, camera);
    };

    // Wrapped in onload to allow all images to load first (the textures):
    $(window).load(function() {
        render();
    });
});
