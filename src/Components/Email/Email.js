import { useState } from "react";
import "./email.scss";
import Button from "../../ui/Button";
import useQuizContext from "../../hooks/use-quizContext";

function Email({data}) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);

    const qc = useQuizContext();

    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleChange = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const handleNextClick = (e) => {
        
        if(validateEmail(email)) {
            qc.setEmail(email);
            qc.setSlideIndex(qc.slideIndex + 1);
        } else {
            setError(true);
        }
    }
    
    return (
        <div 
            className="quiz-email"
            style={{ animation: "quiz-slide-fadeIn 1s" }}
        >
            <h1>{data.title}</h1>
            <p>{data.tagLine}</p>
            <div className="input">
                <input
                    onChange={handleChange}
                    type="text" 
                    name="email" 
                    placeholder={data.placeholder} 
                />
            </div>
            {error && <div className="error">{data.error}</div>}
            <Button onClick={handleNextClick}>
                {data.buttonLabel}
            </Button>
           
        </div>
    );
}


export default Email;