import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Jersey from "./components/Jersey";
import Shorts from "./components/Shorts";
import Stockings from "./components/Stockings";
import Controls from "./components/Controls";

const App = () => {
  const [jerseyColor, setJerseyColor] = useState("#ff0000");
  const [shortsColor, setShortsColor] = useState("#000000");
  const [stockingsColor, setStockingsColor] = useState("#ffffff");
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      setWebGLSupported(false);
    }
  }, []);

  if (!webGLSupported) {
    return <h1>⚠️ WebGL is not supported on your browser or device. Please try another browser.</h1>;
  }

  return (
    <div className="container">
      <h1>3D Kit Builder</h1>
      <div className="builder">
        <div className="canvas-container">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <OrbitControls />
            <Jersey color={jerseyColor} />
            <Shorts color={shortsColor} />
            <Stockings color={stockingsColor} />
          </Canvas>
        </div>
        <Controls 
          setJerseyColor={setJerseyColor} 
          setShortsColor={setShortsColor} 
          setStockingsColor={setStockingsColor} 
        />
      </div>
    </div>
  );
};

export default App;
