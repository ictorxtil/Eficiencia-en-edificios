var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xFFFFFF );
var camera = new THREE.PerspectiveCamera(750, window.innerWidth/window.innerHeight, 1, 1000);

camera.position.z = 1000;


// Renderer
var renderer = new THREE.WebGLRenderer({antialias: true, preserveDrawingBuffer: true});
renderer.setSize(300, 300);
container = document.getElementById('container');
container.appendChild(renderer.domElement);
// Cube
var geometry = new THREE.BoxGeometry(300, 300, 300, 10, 10, 10);
var material = new THREE.MeshBasicMaterial({color: 0x6D0394, wireframe: true});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

render();

$("#btn_print").click(function() {
                window.open( renderer.domElement.toDataURL("image/png"), "Final");
                return false;
            });
