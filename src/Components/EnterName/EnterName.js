import { useState, useContext } from "react";
//import {EnterNameData} from "../../staticData/data.js";
import "./entername.scss";
import Button from "../../ui/Button";
import QuizContext from "../../Context/quizContext";

const EnterName = ({data}) => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const d = data;
    const qc = useContext(QuizContext);

    const handleChange = (e) => {
        setError("");
        setName(e.target.value);
    }

    const handleNextClick = (e) => {
        if(name !== "") {
            qc.setName(name);
            qc.setSlideIndex(qc.slideIndex + 1);          
        } else {
            setError("Name field can not be blank");
        }
    }
    
    console.log("Context(EnterName): ", qc);
    
    return (
        <div className="quiz-enter-name">
            <h1>{d.title}</h1>
            <p>{d.tagLine}</p>
            <p>{d.inputHeading}</p>
            <div className="input">
            <input 
                placeholder={d.placeHolder}
                onChange={(e) => handleChange(e)}
            />
            <div className="error">{error}</div>
            </div>
            {/* Create a button Component */}
            <Button 
                onClick={handleNextClick} 
            >
                NEXT!
            </Button>
        </div>
    );
}

export default EnterName;