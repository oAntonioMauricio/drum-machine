import './App.css';

import DrumMachine from "./Components/DrumMachine.js"
import Switcher from "./Components/Switcher";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switcher />
        <DrumMachine />
      </header>
    </div>
  );
}

export default App;
