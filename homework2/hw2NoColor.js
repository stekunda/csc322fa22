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
camera.position.z = 350;

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({
    color: 0x00ff00,
    depthTest: true,
});

const points = [
    new THREE.Vector3(-10, 0, -10),
    new THREE.Vector3(-10, 0, 10),
    new THREE.Vector3(10, 0, 10),
    new THREE.Vector3(10, 0, -10),
    new THREE.Vector3(-10, 0, -10),

    new THREE.Vector3(-5, 100, -5),
    new THREE.Vector3(-5, 100, 5),
    new THREE.Vector3(5, 100, 5),
    new THREE.Vector3(5, 100, -5),
    new THREE.Vector3(-5, 100, -5),

    new THREE.Vector3(-5, 100, 5),
    new THREE.Vector3(-10, 0, 10),

    new THREE.Vector3(10, 0, 10),
    new THREE.Vector3(5, 100, 5),

    new THREE.Vector3(5, 100, -5),
    new THREE.Vector3(10, 0, -10),
    new THREE.Vector3(5, 100, -5),

    // This builds the pyramid shape on top
    new THREE.Vector3(0, 110, 0), // this is the peak of the pyramid
    new THREE.Vector3(-5, 100, -5),
    new THREE.Vector3(0, 110, 0),
    new THREE.Vector3(-5, 100, 5),
    new THREE.Vector3(0, 110, 0),
    new THREE.Vector3(5, 100, 5),
];

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

scene.add(line);

function animate() {
    requestAnimationFrame(animate);
    line.rotation.x += 0.008;
    line.rotation.y += 0.008;
    line.rotation.z += 0.008;
    renderer.render(scene, camera);
}

animate();
