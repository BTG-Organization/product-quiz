import { createContext, useState /* useEffect */ } from "react";

const QuizContext = createContext();

function QuizProvider({children}) {

    const [testVal, setTestVal] = useState(1);
    // useEffect(() => {}, []);
    
    const testFunc = () => {
        console.log("success");
        setTestVal(testVal + 1);
    }

    return (
        <QuizContext.Provider value={{testFunc, testVal}}>
            {children}
        </QuizContext.Provider>
    );
}

export { QuizProvider };
export default QuizContext;
