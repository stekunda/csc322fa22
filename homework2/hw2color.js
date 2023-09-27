import * as THREE from "three";

// Creating and setting scene, camera, and renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
camera.position.z = 22;

const scene = new THREE.Scene();

// Creating the cube
const geometryCube = new THREE.BoxGeometry(1, 10, 1);
const materialCube = [
    new THREE.MeshStandardMaterial({ color: 0xff0000 }), // right face
    new THREE.MeshStandardMaterial({ color: 0x00ff00 }), // left face
    new THREE.MeshStandardMaterial({ color: 0x0000ff }), // top face
    new THREE.MeshStandardMaterial({ color: 0xffff00 }), // bottom face
    new THREE.MeshStandardMaterial({ color: 0xff00ff }), // front face
    new THREE.MeshStandardMaterial({ color: 0x00ffff }), // back face
];

const cube = new THREE.Mesh(geometryCube, materialCube);
scene.add(cube);

// Creating the pyramid
const geometryPyramid = new THREE.ConeGeometry(0.72, 1, 4);
const materialPyramid = [
    new THREE.MeshStandardMaterial({ color: 0x0000ff }), // front face
    new THREE.MeshStandardMaterial({ color: 0x00ff00 }), // right face
    new THREE.MeshStandardMaterial({ color: 0x0000ff }), // back face
    new THREE.MeshStandardMaterial({ color: 0xffff00 }), // left face
];

const pyramid = new THREE.Mesh(geometryPyramid, materialPyramid);
pyramid.rotation.y = Math.PI / 4;
pyramid.position.set(0, 5.5, 0);
scene.add(pyramid);

// Create a group and add the cube and pyramid as children
const group = new THREE.Group();
group.add(cube);
group.add(pyramid);
scene.add(group);

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 1, 1);
scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);
    // group.rotation.x += 0.008;
    group.rotation.y += 0.008;
    // group.rotation.z += 0.008;
    renderer.render(scene, camera);
}

animate();
