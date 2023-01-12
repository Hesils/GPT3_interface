import './App.css';
import { useState } from 'react';
import { GptLayer } from './components/gptLayer/gptLayer';
import { UserLayer } from './components/userLayer/userLayer';

function App() {
  const [messageListe, setMessageListe] = useState([])
  const saveMessage = function (value) {
    setMessageListe(messageListe.concat(value))
  }

  return (
    <div className="App">
      <GptLayer messageListe={messageListe}/>
      <UserLayer saveMessage={saveMessage}/>
    </div>
  );
}

export default App;
