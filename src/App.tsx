import React from 'react';
import './App.css';
import Mainroute from './routes';
import Provider from './context';

function App() {
  return (
    <Provider>
      <div className="bg-primary text-white">
        <Mainroute />
      </div>
    </Provider>
  );
}

export default App;
