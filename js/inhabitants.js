// create the sphere's material
var mapmaterial = new THREE.MeshPhongMaterial();
mapmaterial.map = THREE.ImageUtils.loadTexture('images/earthmap.jpg');
mapmaterial.bumpMap    = THREE.ImageUtils.loadTexture('images/earthbump1k.jpg')
mapmaterial.bumpScale = 0.05
mapmaterial.specularMap    = THREE.ImageUtils.loadTexture('images/earthspec1k.jpg')
mapmaterial.specular  = new THREE.Color('grey')

// create cube material
var coolMaterial = new THREE.MeshBasicMaterial();
coolMaterial.map = THREE.ImageUtils.loadTexture('images/crate.jpg');
 
// set up the sphere vars
var radius = 50, segments = 16, rings = 16;

var sphere = new THREE.Mesh(new THREE.SphereGeometry(100, radius, segments, rings), mapmaterial);
sphere.position.x = 300;
sphere.position.y = 200;

var cube = new THREE.Mesh(new THREE.CubeGeometry(100, 100, 100), coolMaterial);
cube.position.x = 300;
cube.rotation.y = 45;

var character = new THREE.mesh(new THREE.CubeGeometry(100,50,100));
character.position.y = camera.position.y + 200;