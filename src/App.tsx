import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Environment, OrbitControls } from "@react-three/drei";
import BasicScene from "./scene/BasicScene";
import { Html } from "@react-three/drei";
import { useState } from "react";

function App() {
  const [isSpinning, setIsSpinning] = useState(true);

  const handleStopSpinning = () => {
    setIsSpinning(() => !isSpinning);
    console.log("button clicked: ", isSpinning);
  };

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", background: "#0e1116" }}>
        <Canvas
          camera={{ position: [0, 1, 4], fov: 60 }}
          dpr={[1, 2]} // clamp device pixel ratio for perf on 4K/retina
          shadows // enables shadow map (not used yet, but handy)
        >
          {/* Lighting / environment helpers */}
          <ambientLight intensity={0.4} />
          {/* DirectionalLight: like the sun */}
          <directionalLight position={[3, 2, 5]} intensity={1.2} />

          {/* Optional: a physically-based environment map */}
          <Environment preset="sunset" />

          {/* Our scene objects */}
          <BasicScene stopthespin={isSpinning} />

          {/* Mouse/touch camera controls */}
          <OrbitControls enableDamping />
          <Html fullscreen>
            <div style={{ position: "absolute", top: "55%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <button onClick={() => handleStopSpinning()}>Pause</button>
            </div>
          </Html>
        </Canvas>
        <button
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            padding: "8px 12px",
            borderRadius: 8,
            zIndex: 20,
          }}
          onClick={() => alert("HUD button clicked")}
        >
          HUD Button
        </button>
      </div>
    </>
  );
}

export default App;
