import { createContext, useState /* useEffect */ } from "react";

const QuizContext = createContext();

function QuizProvider({children}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [slideIndex, setSlideIndex] = useState(0);
    const [q1, setQ1] = useState([]);
    const [q2, setQ2] = useState([]);
    const [q3, setQ3] = useState([]);
    const [q4, setQ4] = useState([]);
    const [q5, setQ5] = useState([]);
    const [q6, setQ6] = useState([]);
    //const [allProducts, setAllProducts] = useState([]);

    const setAnswers = (id, answers) => {
        console.log("Answers: ", id, answers);
        // slideIndex 0 is name
        switch(id) {
            case 1:
                setQ1(answers);
                break;
            case 2:
                setQ2(answers);
                break;
            case 3:
                setQ3(answers);
                break;
            case 4:
                setQ4(answers);
                break;
            case 5:
                setQ5(answers);
                break;
            case 6:
                setQ6(answers);
                break;
            default:
                console.log("Error: id does not exist");
                break;  
        }
    }

    return (
        <QuizContext.Provider value={{
            name,
            setName,
            email ,
            setEmail,
            slideIndex, 
            setSlideIndex,
            setAnswers,
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
        }}>
            {children}
        </QuizContext.Provider>
    );
}

export { QuizProvider };
export default QuizContext;
