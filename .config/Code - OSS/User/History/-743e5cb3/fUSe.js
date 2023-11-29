import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

let theta = 0;

/// scene setup

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 5;
controls.update();

/// lighting

const lightTarget = new THREE.Object3D;
lightTarget.position.set(1, 0, 1);

const light = new THREE.DirectionalLight(0xffffff, 0.5);

scene.add(lightTarget);
scene.add(light);

/// world

const worldGeometry = new THREE.SphereGeometry(1);
const worldMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const world = new THREE.Mesh(worldGeometry, worldMaterial);
scene.add(world);

light.target = world;
/// stars

const starGeometry = new THREE.SphereGeometry(0.5, 1, 1);
const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

/// sun

const sunGeometry = new THREE.SphereGeometry(2);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

for (let i = 0; i < 128; i++) {
	const star = new THREE.Mesh(starGeometry, starMaterial);
	const position = convertGlobeCoords(random(-90,90), random(-180, 180), 100)

	star.position.set(position[0], position[1], position[2]);
	scene.add(star);
}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	controls.update();

	theta += 1;
	sun.position.x += Math.sin(theta/100);
	sun.position.z += Math.cos(theta/100);

	light.position.set(sun.position);
}

function convertGlobeCoords(latitude, longitude, radius) {
	const phi = (90-latitude) * (Math.PI/180);
	const theta = (longitude+180) * (Math.PI/180);

	const x = -(radius * Math.sin(phi) * Math.cos(theta));
	const y = (radius * Math.cos(phi));
	const z = (radius * Math.sin(phi) * Math.sin(theta));

	return [x, y, z];
}

function random(min, max) {
	return Math.random() * (max - min) + min;
}

animate();