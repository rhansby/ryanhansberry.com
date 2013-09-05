function Planet(attrs) {
    attrs = attrs || {};

    attrs.radius = attrs.radius || 1;
    attrs.segments = attrs.segments || 16;
    attrs.rings = attrs.rings || 16;
    attrs.material = attrs.material || new THREE.MeshLambertMaterial({ map: THREE.ImageUtils.loadTexture("/portfolio/solar-system/img/dirt.png") });

    THREE.Mesh.call(this, new THREE.SphereGeometry(attrs.radius, attrs.segments, attrs.rings), attrs.material);

    this.position.x = this.position.y = this.position.z = 0;

    attrs.scale = attrs.scale || 1;
    this.scale.x = attrs.scale;
    this.scale.y = attrs.scale;
    this.scale.z = attrs.scale;

    this.orbit_attrs = {
        radius: attrs.orbit_radius || 2,
        rotation_speed: attrs.rotation_speed / 100 || 0.01,
        speed: attrs.orbit_speed / 100 || 0.01,
        y_tilt: attrs.orbit_y_tilt || 0
    };
    this.revolution = 90;

    return this;
}

Planet.prototype = Object.create(THREE.Mesh.prototype);

Planet.prototype.orbit = function() {
    this.rotation.y += this.orbit_attrs.rotation_speed;
    this.revolution += this.orbit_attrs.speed;

    this.position.x = this.orbit_attrs.radius * Math.sin(this.revolution);
    this.position.z = this.orbit_attrs.radius * Math.cos(this.revolution);

    this.position.y = this.orbit_attrs.y_tilt * Math.sin(this.revolution);
};
