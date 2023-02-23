import Header from './Header';
import Home from './Home'
import { useState } from 'react';

function App() {
  const [savedInput, setSavedInput] = useState({operator:"",gameType:"",slateName:""});

  return (
    <div className="App">
      <Header setSavedInput={setSavedInput} savedInput={savedInput}/>
      <Home savedInput={savedInput}/>
    </div>
  );
}

export default App;
