/**
 * /!\ This file is auto-generated.
 *
 * This is the entry point of your standalone application.
 *
 * There are multiple tags used by the editor to inject code automatically:
 *     - `wle:auto-imports:start` and `wle:auto-imports:end`: The list of import statements
 *     - `wle:auto-register:start` and `wle:auto-register:end`: The list of component to register
 */

import { WonderlandEngine } from '@wonderlandengine/api';

/* wle:auto-imports:start */
import {Cursor} from '@wonderlandengine/components';
import {ImageTexture} from '@wonderlandengine/components';
import {MouseLookComponent} from '@wonderlandengine/components';
import {ConsoleVRToolComponent} from 'wle-pp';
import {EasyTuneToolComponent} from 'wle-pp';
import {FingerCursorComponent} from 'wle-pp';
import {GamepadMeshAnimatorComponent} from 'wle-pp';
import {GrabbableComponent} from 'wle-pp';
import {GrabberHandComponent} from 'wle-pp';
import {MuteEverythingComponent} from 'wle-pp';
import {PPGatewayComponent} from 'wle-pp';
import {PlayerLocomotionComponent} from 'wle-pp';
import {ResetLocalTransformComponent} from 'wle-pp';
import {SetHandLocalTransformComponent} from 'wle-pp';
import {SetHeadLocalTransformComponent} from 'wle-pp';
import {SpatialAudioListenerComponent} from 'wle-pp';
import {SwitchHandObjectComponent} from 'wle-pp';
import {ToolCursorComponent} from 'wle-pp';
import {TrackedHandDrawAllJointsComponent} from 'wle-pp';
import {VirtualGamepadComponent} from 'wle-pp';
import {FadeViewComponent} from './playground/components/fade_view_component.js';
import {LoadAudioComponent} from './playground/components/load_audio_component.js';
import {ParticlesSpawnerComponent} from './playground/components/particles_spawner_component.js';
import {PlayMusicComponent} from './playground/components/play_music_component.js';
import {PlaygroundGatewayComponent} from './playground/components/playground_gateway_component.js';
import {SFXOnGrabThrowComponent} from './playground/components/sfx_on_grab_throw_component.js';
/* wle:auto-imports:end */

export default function (engine: Readonly<WonderlandEngine>): void {
/* wle:auto-register:start */
engine.registerComponent(Cursor);
engine.registerComponent(ImageTexture);
engine.registerComponent(MouseLookComponent);
engine.registerComponent(ConsoleVRToolComponent);
engine.registerComponent(EasyTuneToolComponent);
engine.registerComponent(FingerCursorComponent);
engine.registerComponent(GamepadMeshAnimatorComponent);
engine.registerComponent(GrabbableComponent);
engine.registerComponent(GrabberHandComponent);
engine.registerComponent(MuteEverythingComponent);
engine.registerComponent(PPGatewayComponent);
engine.registerComponent(PlayerLocomotionComponent);
engine.registerComponent(ResetLocalTransformComponent);
engine.registerComponent(SetHandLocalTransformComponent);
engine.registerComponent(SetHeadLocalTransformComponent);
engine.registerComponent(SpatialAudioListenerComponent);
engine.registerComponent(SwitchHandObjectComponent);
engine.registerComponent(ToolCursorComponent);
engine.registerComponent(TrackedHandDrawAllJointsComponent);
engine.registerComponent(VirtualGamepadComponent);
engine.registerComponent(FadeViewComponent);
engine.registerComponent(LoadAudioComponent);
engine.registerComponent(ParticlesSpawnerComponent);
engine.registerComponent(PlayMusicComponent);
engine.registerComponent(PlaygroundGatewayComponent);
engine.registerComponent(SFXOnGrabThrowComponent);
/* wle:auto-register:end */
}