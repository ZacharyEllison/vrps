import * as THREE from 'three';
import { init } from './init';

const floorGeometry = new THREE.PlaneGeometry(10,10)
const floorMaterial = new THREE.MeshBasicMaterial({color: 'pink'})

const floor = new THREE.Mesh(floorGeometry, floorMaterial);

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshStandardMaterial({ color: 'orange' });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);


function setupScene ({scene}) {
    floor.rotateX(-Math.PI / 2);
    cube.position.set(-1, 1, -1.5)
    scene.add(cube)
    scene.add(floor);
}

init(setupScene);