import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import PersonCard from './components/PersonCard';
import NewComponent from './components/PutTogether';
import NewPersonCard from './components/BigInversion';

function App() {
  return (
    <div className="App">
      <NewPersonCard lastName="Smith" firstName="Alec" age={30}  hairColor={"Black"} />
      <NewPersonCard lastName="Doe" firstName="Jane" age={45}  hairColor="Black" />
      <NewPersonCard lastName="Barbara" firstName="Mya" age={19}  hairColor="Blond" />
    </div>
  );
}

export default App;
