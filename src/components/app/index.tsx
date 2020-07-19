import React from 'react';
import './style.css';
import Box from '../box';
import Hobbies from '../hobbies';

function App() {
  return (
    <div className="App">
        <Box title="about me" ready={false} limit={220}/>
        <Box title="about you" ready={false} limit={220}/>
        <Hobbies />
        
        <Box title="search" ready={false} limit={20} limitUp={60}/>
    </div>
  );
}

export default App;
