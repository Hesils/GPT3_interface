import './App.css';
import { useState } from 'react';
import { GptLayer } from './components/gptLayer/gptLayer';
import { UserLayer } from './components/userLayer/userLayer';

function App() {
  const [messageListe, setMessageListe] = useState([])

  return (
    <div className="App">
      <GptLayer messageListe={messageListe}/>
      <UserLayer />
    </div>
  );
}

export default App;
