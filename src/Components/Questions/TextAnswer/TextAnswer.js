import { useState, useEffect } from "react";
import "./textanswer.scss";
import useQuizContext from "../../../hooks/use-quizContext";
import Button from "../../../ui/Button/Button";
import getQuestionDataByIndex from "../../../util/getQuestionDataByIndex";

// Multi Select Question w/ custom data through the data prop
// This component can be a multi answer or single answer through the type prop.
// Pass type="multi" or (type="single" or nothing) for single

const TextAnswer = ({data}) => {
    const [selections, setSelections] = useState([]);
    const [error, setError] = useState(false);

    const qc = useQuizContext();//useContext(QuizContext);

    const handleClick = (e) => {
        const text = data.type === "icon" ? e.target?.alt : e.target?.innerText;
        if(selections.includes(text)) {
            setSelections(selections.filter(
                (selection) => selection !== text
            ));
        } else {
            if(data.type === "multi" || data.type === "multi-icon") {
                setSelections([...selections, text]);
            } else {
                setSelections([text]);
            }
        }
        setError(false);
    }

    const handleBackClick = () => {
        qc.setSlideIndex(qc.slideIndex - 1);
    }

    //
    useEffect(() => {
        setSelections(getQuestionDataByIndex(qc));
        setError(false);
    }, [qc]);

    const handleNextClick = (e) => { 
        if(selections.length) {
            qc.setAnswers(qc.slideIndex, selections);
            setSelections([]);
            qc.setSlideIndex(qc.slideIndex + 1);
        } else {
            setError(true);
        }
    }

    const renderQuestion = (data) => {  
        return data.questions?.map((question, i) => {
            if(data.type === "icon") {
                return (
                    <div
                        className="icon-answer"
                        key={`${question} ${i}`}
                        style={{
                            backgroundImage: `url${question.desc}`,
                            //backgroundColor: selections.includes(question.desc) && 'red'
                            border: selections.includes(question.desc) ? "1px solid red" : "1px solid transparent"
                        }} 
                        onClick={(e) => handleClick(e)}
                    >
                        <img height="100" src={question.icon} alt={question.desc} />
                    </div>
                )
            } else {
                return (
                    <div
                        className="text-answer"
                        key={`${question} ${i}`}
                        style={{background: selections.includes(question.q) && 'red'}} 
                        onClick={(e) => handleClick(e)}
                    >
                        {question.q}
                    </div>
                )
            }
        })
        
    }

    return (
        <>
            <div style={{ animation: "quiz-slide-fadeIn 1s" }} id="quiz-text-answer quiz-slide-wrapper">
                <h1>{data.title} {qc.name[0].toUpperCase() + qc.name.slice(1)}!</h1>
                <p>{data.tagLine}</p>
                <div className="quiz-text-answer">
                    {renderQuestion(data)}
                </div>
                {error && <div className="error">{data.error}</div>}
                <Button onClick={handleBackClick}>
                    Back
                </Button>
                <Button onClick={handleNextClick}>
                    Next
                </Button>
            </div>
        </>
    );
}

export default TextAnswer;