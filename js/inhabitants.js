// create the sphere's material
var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xCC0000});

// create cube material
var coolMaterial = new THREE.MeshBasicMaterial({color: 0xCC0000, map: THREE.ImageUtils.loadTexture('crate.jpg')});
 
// set up the sphere vars
var radius = 50, segments = 16, rings = 16;

var sphere = new THREE.Mesh(new THREE.SphereGeometry(100, radius, segments, rings), sphereMaterial);
sphere.position.x = -300;

var cube = new THREE.Mesh(new THREE.CubeGeometry(100, 100, 100), coolMaterial);
cube.position.x = 300;
cube.rotation.y = 45;
