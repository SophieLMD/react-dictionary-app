import "bootstrap/dist/css/bootstrap.css";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="Designer-logo img-fluid" />
        <h1>Dictionary Application</h1>
        <footer>
          <div className="social-links">
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/sophie-davies-52910b72"
              target="_blank"
              rel="noreferrer"
            >
              Sophie Davies
            </a>
            , opensourced on{" "}
            <a
              href="https://github.com/SophieLMD/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://react-dictionary-app-slmd.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify.
            </a>
          </div>
        </footer>
      </header>
    </div>
  );
}

export default App;
