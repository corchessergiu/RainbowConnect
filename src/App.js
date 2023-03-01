import logo from './logo.svg';
import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Only for test
        </p>
        <ConnectButton/>
      </header>
    </div>
  );
}

export default App;
