import { SpinningBox } from "../components/SpinningBox";
import * as THREE from "three";

export default function BasicScene({stopthespin}) {
  return (
    <>
      {/* Grid helper from Three.js */}
      <primitive object={new THREE.GridHelper(10, 10)} />

      {/* Axes helper from Three.js */}
      <primitive object={new THREE.AxesHelper(2)} />

      {/* Our spinning cube */}
      <SpinningBox stopthespin={stopthespin} position={[0, 0.5, 0]} />
    </>
  );
}
