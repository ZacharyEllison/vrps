import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { XRHandModelFactory } from 'three/examples/jsm/webxr/XRHandModelFactory.js';

export function setupHandTracking(renderer, scene) {
	const loader = new GLTFLoader();
	const handModels = {};

	// Load custom hand model
	loader.load('/src/assets/hand_model.glb', (gltf) => {
		const handModel = gltf.scene;
		handModel.scale.set(0.1, 0.1, 0.1); // Adjust size if needed

		// Clone for left and right hands
		handModels.left = handModel.clone();
		handModels.right = handModel.clone();
	});

	// Create WebXR hand tracking
	const hands = {
		left: renderer.xr.getHand(0),
		right: renderer.xr.getHand(1),
	};

	// Attach the hand models to WebXR-tracked hands
	renderer.xr.addEventListener('sessionstart', () => {
		const session = renderer.xr.getSession();
		if (!session) return;

		for (const source of session.inputSources) {
			if (source.hand) {
				const handSide = source.handedness; // "left" or "right"
				const handController = renderer.xr.getControllerGrip(
					handSide === 'left' ? 0 : 1,
				);

				if (handModels[handSide]) {
					handController.add(handModels[handSide]); // Attach custom hand model
					scene.add(handController);
				}
			}
		}
	});

	return hands; // Return hands for gesture detection
}
