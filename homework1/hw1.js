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
camera.position.z = 50;

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({
    color: 0x00ff00,
    depthTest: true,
});

const points = [];

// Draws the base of the tetrahedron
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(-10, 0, 0));

// Adds another point and connects all of the points of the base to it
points.push(new THREE.Vector3(0, 0, 10));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
points.push(new THREE.Vector3(0, 0, 10));
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);

function animate() {
    requestAnimationFrame(animate);
    line.rotation.x += 0.003;
    line.rotation.y += 0.003;
    line.rotation.z += 0.003;
    renderer.render(scene, camera);
}

animate();
