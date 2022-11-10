import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import User from './components/User'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Button/>
        <User/>
      </header>
    </div>
  );
}

export default App;
