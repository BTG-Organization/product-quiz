
import {useState} from "react";
import EnterName from "./Components/EnterName/EnterName";
import "./App.scss";
//import horizontal from "./images/horiz.png";
//import vertical from "./images/vert.png";
//import roller from "./images/roller.png";
//import motorized from "./images/motorized.png";
import quizbkg from "./images/quizbkg.png";

function App() {

  // State
  const [selectionList, setSelectionList] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  // const [currentSelections, setCurrentSelections] = useState([]);
  // const [currentSlide, setCurrentSlide] = useState([]);

  const updateSelectionList = (selections) => {
    setSelectionList();
  }
  console.log("Slide Index: ", slideIndex);
  
  
  // Quiz Intro

  /* 
  
    Questions?
    1. What is more important to you (Asthetic or Budget)
    2. How Many Window treatments do you need (one, a few, many)
    3. 

    last. Do you prefer to SHop Online or Have some one come to your home?

  */

  return (
    <div className="intro" style={{background: `url(${quizbkg})`}}>
      {slideIndex === 0 && <EnterName updateSlideIndex={setSlideIndex} currentSlide={slideIndex} />}
      {slideIndex === 1 && "next slide"}
    </div>
  );
}

export default App;
