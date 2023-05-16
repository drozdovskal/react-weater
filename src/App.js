import "./App.css";
import video from "./assets/backgroundVideo.mp4";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="Weather-app">
        <div className="container">
          <Weather defaultCity="Ulsan" />
          <footer>
            This project was created by Drozdovska and is{" "}
            <a
              href="https://github.com/drozdovskal"
              target="_blank"
              rel="noopener noreferrer"
            >
              open sourced
            </a>{" "}
            on GitHub
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
