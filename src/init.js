import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { VRButton } from 'three/addons/webxr/VRButton.js';
import { handleInput } from './controllers';
import { iwerSetup } from './iwer';
import { setupHandTracking } from './handTracking';

export async function init(setupScene = () => {}, onFrame = () => {}) {
	await iwerSetup();

	const container = document.createElement('div');
	document.body.appendChild(container);

	const scene = new THREE.Scene();
	scene.background = new THREE.Color(0x808080);

	const camera = new THREE.PerspectiveCamera(
		50,
		window.innerWidth / window.innerHeight,
		0.1,
		100,
	);
	camera.position.set(0, 1.6, 3);

	const controls = new OrbitControls(camera, container);
	controls.target.set(0, 1.6, 0);
	controls.update();

	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.xr.enabled = true;
	container.appendChild(renderer.domElement);

	const environment = new RoomEnvironment(renderer);
	const pmremGenerator = new THREE.PMREMGenerator(renderer);
	scene.environment = pmremGenerator.fromScene(environment).texture;

	const player = new THREE.Group();
	scene.add(player);
	player.add(camera);

	const controllers = handleInput(renderer, player);
	// const hands = setupHandTracking(renderer, scene);

	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	window.addEventListener('resize', onWindowResize);

	const globals = {
		scene,
		camera,
		renderer,
		player,
		controllers,
	};

	setupScene(globals);

	const clock = new THREE.Clock();
	function animate() {
		const delta = clock.getDelta();
		const time = clock.getElapsedTime();
		Object.values(controllers).forEach((controller) => {
			if (controller?.gamepad) {
				controller.gamepad.update();
			}
		});
		onFrame(delta, time, globals);
		renderer.render(scene, camera);
	}

	renderer.setAnimationLoop(animate);

	document.body.appendChild(VRButton.createButton(renderer));
}
