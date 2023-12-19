import { useState } from "react";
//import {EnterNameData} from "../../staticData/data.js";
import "./entername.scss";
import Button from "../../ui/Button";

const EnterName = ({onSubmit, updateSlideIndex, currentSlide, data}) => {
    const [name, setName] = useState("");
    const [error, setError] = useState(""); //set if string === "" || arr === []

    const e = data;

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
            <Button 
                onClick={handleNextChange} 
            >
                NEXT!
            </Button>
        </div>
    );
}

export default EnterName;