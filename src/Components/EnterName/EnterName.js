import { useState, useContext, useEffect } from "react";
//import {EnterNameData} from "../../staticData/data.js";
import "./entername.scss";
import Button from "../../ui/Button";
import QuizContext from "../../Context/quizContext";

const EnterName = ({data}) => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const d = data;
    const qc = useContext(QuizContext);

    
    useEffect(() => {
        setTimeout(function(){ window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           }); }, 2000);
    },[]);

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
    
    return (
        <div className="quiz-enter-name" style={{ animation: "quiz-slide-fadeIn 1s" }}>
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
            <Button 
                onClick={handleNextClick} 
            >
                {data.buttonLabel}
            </Button>
        </div>
    );
}

export default EnterName;