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