import {useContext } from "react";
import QuizContext from "../Context/quizContext";

const useQuizContext = () => {
    return useContext(QuizContext);
}

export default useQuizContext;