import { GamepadWrapper } from 'gamepad-wrapper';

import { XRControllerModelFactory } from 'three/addons/webxr/XRControllerModelFactory.js';

export const handleInput = (renderer, player) => {
    const controllerModelFactory = new XRControllerModelFactory();
	const controllers = {
		left: null,
		right: null,
	};
	for (let i = 0; i < 2; i++) {
		const useHandSpace = true; // Set this to false if you don't want to use hand space
		let handSpace;
		if (useHandSpace) {
			handSpace = renderer.xr.getHand(i);
			player.add(handSpace);
			handSpace.addEventListener('connected', (e) => {
				const handedness = e.data.handedness;
				controllers[handedness] = {
					...controllers[handedness],
					handSpace,
				};
			});
			handSpace.addEventListener('disconnected', (e) => {
				const handedness = e.data.handedness;
				if (controllers[handedness]) {
					controllers[handedness].handSpace = null;
				}
			});
		}
		const raySpace = renderer.xr.getController(i);
		const gripSpace = renderer.xr.getControllerGrip(i);
		const mesh = controllerModelFactory.createControllerModel(gripSpace);
		gripSpace.add(mesh);
		player.add(raySpace, gripSpace);
		raySpace.visible = false;
		gripSpace.visible = false;
		gripSpace.addEventListener('connected', (e) => {
			raySpace.visible = true;
			gripSpace.visible = true;
			const handedness = e.data.handedness;
			controllers[handedness] = {
				raySpace,
				gripSpace,
				mesh,
				gamepad: new GamepadWrapper(e.data.gamepad),
			};
		});
		gripSpace.addEventListener('disconnected', (e) => {
			raySpace.visible = false;
			gripSpace.visible = false;
			const handedness = e.data.handedness;
			controllers[handedness] = null;
		});

    } 
    return controllers
}