
import {useState} from "react";
import EnterName from "./Components/EnterName/EnterName";
import MultiAnswer from "./Components/Questions/MultiAnswer/MultiAnswer";
import "./App.scss";
import quizbkg from "./images/quizbkg.png";

// load data here and pass it into each component below
// useContext for actions

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

  return (
    <div className="btg-quiz-intro" style={{background: `url(${quizbkg})`}}>
      {slideIndex === 0 && <EnterName onSubmit={handleSubmitData} updateSlideIndex={setSlideIndex} currentSlide={slideIndex} />}
      {slideIndex === 1 && <MultiAnswer name={name} />}
    </div>
  );
}

export default App;
