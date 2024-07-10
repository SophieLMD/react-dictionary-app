import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="Designer-logo img-fluid" />
        <h1>Dictionary Application</h1>
      </header>
    </div>
  );
}

export default App;
