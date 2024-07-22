import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary Application</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="wine" />
        </main>
        <footer>
          <div className="social-links fst-italic">
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
      </div>
    </div>
  );
}

export default App;
