import { useState } from "react";
import {EnterNameData} from "../../staticData/EnterNameData.js";
import "./entername.scss";

const EnterName = ({onSubmit, updateSlideIndex, currentSlide}) => {
    const [name, setName] = useState("");
    const [error, setError] = useState(""); //set if string === "" || arr === []
    const e = EnterNameData;

    const handleChange = (e) => {
        setError("");
        setName(e.target.value);
    }

    const handleNextChange = () => {
        if(name !== "") {
            updateSlideIndex(currentSlide + 1);
            onSubmit(name, "name");
        } else {
            setError("Name field can not be blank");
        }
    }

    //console.log(name, useId());
    console.log(error);
    
    return (
        <div className="quiz-enter-name">
            <h1>{e.title}</h1>
            <p>{e.tagLine}</p>
            <p>{e.inputHeading}</p>
            <div className="input">
            <input 
                placeholder={e.placeHolder}
                onChange={(e) => handleChange(e)}
            />
            <div className="error">{error}</div>
            </div>
            {/* Create a button Component */}
            <button 
                onClick={handleNextChange} 
            >
                    NEXT
            </button>
        </div>
    );
}

export default EnterName;