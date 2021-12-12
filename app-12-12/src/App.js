import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Hello React</h1>
          <p className='App-header'><Welcome/></p>
        </p>
      </header>
    </div>
  );
}

export default App;
