import { useState, useContext } from "react";
import "./textanswer.scss";
import QuizContext from "../../../Context/quizContext";
import Button from "../../../ui/Button";

// Multi Select Question w/ custom data through the data prop
// This component can be a multi answer or single answer through the type prop.
// Pass type="multi" or (type="single" or nothing) for single

const TextAnswer = ({type, data}) => {
    const [selections, setSelections] = useState([]);
    const [error, setError] = useState("");

    const qc = useContext(QuizContext);

    const handleClick = (e) => {
        const text = e.target?.innerText;
        if(selections.includes(text)) {
            setSelections(selections.filter(
                (selection) => selection !== text
            ));
        } else {
            if(type === "multi") {
                setSelections([...selections, e.target.innerText]);
            } else {
                setSelections([e.target.innerText]);
            }
        }
    }

    const handleNextClick = (e) => {
        
        if(selections.length) {
            // send off selections to the context function
            qc.setSlideIndex(qc.slideIndex + 1);
        } else {
            setError("Name field can not be blank");
        }
    }
    

    //need handle nextClick func. Should it be here or in context??? Context!

    //console.log(selections);
    console.log("Context: ", qc);

    return (
        <>
            <div id="quiz-text-answer">
                <h1>{data.title} {qc.name[0].toUpperCase() + qc.name.slice(1)}!</h1>
                <p>{data.tagline}</p>
                <div className="quiz-text-answer">
                    {data.questions?.map((question, i) => {
                        return (
                            <div
                                key={`${question} ${i}`}
                                style={{background: selections.includes(question.q) && 'red'}} 
                                onClick={(e) => handleClick(e)}>{question.q}
                            </div>
                        )
                    })}
                </div>
                <div className="error">{error}</div>
                <Button onClick={handleNextClick}>
                    Next Question
                </Button>
            </div>
        </>
    );
}

export default TextAnswer;