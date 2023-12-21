
import EnterName from "./Components/EnterName/EnterName";
import TextAnswer from "./Components/Questions/TextAnswer/TextAnswer";
import Email from "./Components/Email/Email";
import Results from "./Components/Results/ResultsPage";
import "./App.scss";
import quizbkg from "./images/quizbkg.png";
import { 
  EnterNameData,
  QuestionData,
  EmailData,
  ResultsData,
} from "./staticData/data";
import useQuizContext from "./hooks/use-quizContext";

function App() {
  const quizContext = useQuizContext();
  const lastQuestionId = QuestionData.slice(-1)[0].id;

  const renderQuestions = (qd, context) => {
    return qd.map(q => {
      return quizContext.slideIndex === q.id && <TextAnswer key={q} data={q} />
    });
  }

  return (
    <div 
      className="btg-quiz-intro"
      style={{
        background: `url(${quizbkg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {quizContext.slideIndex === 0 && <EnterName data={EnterNameData} />}
      {renderQuestions(QuestionData)}
      {quizContext.slideIndex === (lastQuestionId + 1) && <Email data={EmailData} />}
      {quizContext.slideIndex === (lastQuestionId + 2)  && <Results data={ResultsData} />}
    </div>
  );
}

export default App;
