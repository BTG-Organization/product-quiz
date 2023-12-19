import { createContext, useState /* useEffect */ } from "react";

const QuizContext = createContext();

function QuizProvider({children}) {
    const [name, setName] = useState("");
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <QuizContext.Provider value={{
            name,
            setName,
            slideIndex, 
            setSlideIndex
        }}>
            {children}
        </QuizContext.Provider>
    );
}

export { QuizProvider };
export default QuizContext;
