import { useState } from "react";
import "./textanswer.scss";
import { useContext } from "react";
import QuizContext from "../../../Context/quizContext";

// Multi Select Question w/ custom data through the data prop
// This component can be a multi answer or single answer through the type prop.
// Pass type="multi" or (type="single" or nothing) for single

const TextAnswer = ({name, type, data}) => {
    const [selections, setSelections] = useState([]);

    const quizContext = useContext(QuizContext);

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

    //console.log(selections);

    const handleContextClick = () => {
        quizContext.testFunc();
    }

    //Testing the context func return value
    console.log("From Context: ", quizContext.testVal);

    return (
        <>
            <div id="multi-text-answer">
                <h1>{data.title} {name[0].toUpperCase() + name.slice(1)}!</h1>
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
                <button onClick={handleContextClick}>Next Question</button>
            </div>
        </>
    );
}

export default TextAnswer;