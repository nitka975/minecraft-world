import React, { useState} from 'react';
import './App.css';
import { Canvas } from "@react-three/fiber";
import Scene from "./Components/Scene";

function App() {
  const [blocks, setBlocks] = useState([]);
  const [selectedBlock, setSelectedBlocks] = useState([null]);

  const handleRemoveBlock = (position) => {
    setBlocks((prev) => 
    prev.filter((p) => !(p[0] === position[0] &&
                          p[1] === position[1] &&
                          p[2] === position[2] 
    ))    
  );
  }


  return (
    <div className="App">
      <h1>Minecraft-World</h1>

      <div
        onContextMenu={(e) =>{
          e.preventDefault();
          if (selectedBlock) {
            handleRemoveBlock(selectedBlock);
          }
        }}
      >
        <Canvas
          shadows
          camera={{position:[5, 10, 10], fov: 50 }}
          style={{widht: '100vw', height: '100vh', background: '#B3E5FC'}}
        >
          <Scene
            blocks={blocks}
            setBlocks={setBlocks}
            setSeletedBlock={setSelectedBlocks}
          />
        </Canvas>
      </div>

    </div>
  );
}

export default App;
