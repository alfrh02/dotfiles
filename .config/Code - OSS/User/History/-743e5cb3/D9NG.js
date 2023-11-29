import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

var scene = require("./initialise.js");

scene.initialise();

/// scene setup

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);

// camera.position.z = 5;
// controls.update();

// /// lighting

// const ambientLight = new THREE.AmbientLight(0xffffff, 0.01);

// const sunLightTarget = new THREE.Object3D;
// sunLightTarget.position.set(1, 0, 1);

// const sunLight = new THREE.DirectionalLight(0xffffff, 0.5);
// sunLight.target = sunLightTarget;

// scene.add(ambientLight);
// scene.add(sunLightTarget);
// scene.add(sunLight);

// /// world

// const worldTexture = new THREE.TextureLoader().load("debug-texture.png");
// worldTexture.wrapS = THREE.RepeatWrapping;
// worldTexture.wrapT = THREE.RepeatWrapping;
// worldTexture.minFilter = THREE.NearestFilter;
// worldTexture.magFilter = THREE.NearestFilter;

// const world = new THREE.Mesh(
// 	new THREE.SphereGeometry(1, 32, 32),
// 	new THREE.MeshStandardMaterial({ map: worldTexture })
// );

// scene.add(world);

// /// stars

// for (let i = 0; i < 128; i++) {
// 	const star = new THREE.Mesh(
// 		new THREE.SphereGeometry(0.5, 1, 1),
// 		new THREE.MeshBasicMaterial({ color: 0xffffff })
// 	);

// 	const position = convertGlobeCoords(random(-90,90), random(-180, 180), 512)
// 	star.position.set(position[0], position[1], position[2]);

// 	scene.add(star);
// }

// const sun = new THREE.Mesh(
// 	new THREE.SphereGeometry(1), 
// 	new THREE.MeshBasicMaterial({ color: 0xffff00 })
// );
// sun.position.set(-50, 50, -50);

// scene.add(sun);

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	controls.update();

	world.rotation.y += 0.0001;
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