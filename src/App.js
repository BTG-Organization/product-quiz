import "./App.css";
import horizontal from "./images/horiz.png";
import vertical from "./images/vert.png";
import roller from "./images/roller.png";
import motorized from "./images/motorized.png";

function App() {
  return (
    <div className="App">
      <h1>Product Quiz</h1>
      <p>Please select the type of blinds you arte interested in purchasing</p>
      <div className="icons">
        <img alt="horizontal blinds" src={horizontal} />
        <img alt="vertical blinds" src={vertical} />
        <img alt="roller shades" src={roller} />
        <img alt="motorized blinds" src={motorized} />
      </div>
    </div>
  );
}

export default App;
