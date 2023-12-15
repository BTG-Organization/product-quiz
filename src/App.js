
import {useState} from "react";
import EnterName from "./Components/EnterName/EnterName";
import Question1 from "./Components/Question1/Question1";
import "./App.scss";
import quizbkg from "./images/quizbkg.png";

function App() {

  // State
  const [selectionList, setSelectionList] = useState([]);
  const [slideIndex, setSlideIndex] = useState(0);
  const [name, setName] = useState([]); // used for display

  const handleSubmitData = (data, type) => {
    if(type === "name") {
      setName(data);
    } else {
      setSelectionList([...selectionList, ...data]);
    }
  }
    
  // Quiz Intro
  /* 
    Questions?
    1. What is more important to you (Asthetic or Budget)
    2. How Many Window treatments do you need (one, a few, many)
    3. 
    last. Do you prefer to SHop Online or Have some one come to your home?
  */

  return (
    <div className="btg-quiz-intro" style={{background: `url(${quizbkg})`}}>
      {slideIndex === 0 && <EnterName onSubmit={handleSubmitData} updateSlideIndex={setSlideIndex} currentSlide={slideIndex} />}
      {slideIndex === 1 && <Question1 name={name} />}
    </div>
  );
}

export default App;
