import React from 'react';
import OddsConverter from './OddsConverter'; // Importing the component
import './App.css'; // If you have a global CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OddsConverter /> {/* Using the component */}
      </header>
    </div>
  );
}

export default App;