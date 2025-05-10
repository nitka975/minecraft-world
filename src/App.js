import React from 'react';
import './App.css';
import { Canvas } from "@react-three/fiber";
import Scene from "./Components/Scene";

function App() {
  return (
    <div className="App">
      <h1>Minecraft-World</h1>
      <Canvas
        shadows
        camera={{position:[5, 10, 10], fov: 50 }}
        style={{widht: '100vw', height: '100vh', background: '#B3E5FC'}}
      >
        <Scene/>
      </Canvas>
      
    </div>
  );
}

export default App;
