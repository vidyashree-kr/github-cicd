import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Successfully deployed</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Its React
        </a>
        <p>Hello, This is Vidya from IKEA! </p>
        <p>Welcome to Google cloud automatic build and deployment using git hub actions.</p> 
      </header>
    </div>
  );
}

export default App;
