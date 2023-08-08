// 1
npx create-react-app vr-adventure
cd vr-adventure

// 2 
npm install aframe react react-dom


// 3
import React from 'react';
import 'aframe';

const VrScene = () => {
  return (
    <a-scene>
      {/* Your VR adventure unfolds here */}
      <a-sky src="your-360-image-url.jpg"></a-sky>
    </a-scene>
  );
};

export default VrScene;

// 4

// src/VrScene.js
import React from 'react';
import 'aframe';

const VrScene = () => {
  return (
    <a-scene>
      <a-entity camera look-controls></a-entity>
      <a-sky src="your-360-image-url.jpg"></a-sky>
    </a-scene>
  );
};

export default VrScene;


// 5

// src/App.js
import React from 'react';
import VrScene from './VrScene';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Your VR Adventure!</h1>
      <VrScene />
    </div>
  );
}

export default App;


// 6

npm start


