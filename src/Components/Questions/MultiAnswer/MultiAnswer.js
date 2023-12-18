import { useState } from "react";
import {Q1Data} from "../../../staticData/Q1Data.js";
import "./multianswer.scss";

// Multi Select Question w/ custom data
const MultiAnswer = ({name}) => {
    const [selections, setSelections] = useState([]);

    const handleClick = (e) => {
        const text = e.target?.innerText;
        if(selections.includes(text)) {
            setSelections(selections.filter(
                (selection) => selection !== text
            ));
        } else {
            setSelections([...selections, e.target.innerText]);
        }
    }

    console.log(selections);

    return (
        <>
            <div id="multi-answer">
                <h1>{Q1Data.title} {name[0].toUpperCase() + name.slice(1)}!</h1>
                <p>Which</p>
                <div className="multi-answer">
                    {Q1Data.questions?.map((question, i) => {
                        return (
                            <div
                                key={`${question} ${i}`}
                                style={{background: selections.includes(question.q) && 'red'}} 
                                onClick={(e) => handleClick(e)}>{question.q}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default MultiAnswer;