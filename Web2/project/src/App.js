import logo from './logo.svg';
import './App.css';

import Example1 from './example1';
import Example2 from './example2';

function App() {
  return (
    <div className="App">
      <Example2 />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Example1 />
    </div>
  );
}

export default App;
