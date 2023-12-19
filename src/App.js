
import {useState} from "react";
import EnterName from "./Components/EnterName/EnterName";
import TextAnswer from "./Components/Questions/TextAnswer/TextAnswer";
import "./App.scss";
import quizbkg from "./images/quizbkg.png";
import { 
  EnterNameData,
  Q1Data,
  Q2Data
} from "./staticData/data";

// load data here and pass it into each component below
// useContext for actions

function App() {
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
      {slideIndex === 0 && <EnterName data={EnterNameData} onSubmit={handleSubmitData} updateSlideIndex={setSlideIndex} currentSlide={slideIndex} />}
      {slideIndex === 1 && <TextAnswer type={"multi"} name={name} data={Q1Data} />}
      {slideIndex === 1 && <TextAnswer type={"single"} name={name} data={Q2Data} />}
    </div>
  );
}

export default App;
