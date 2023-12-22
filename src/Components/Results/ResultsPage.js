import useQuizContext from "../../hooks/use-quizContext";
import "./results.scss";
import Button from "../../ui/Button/Button";

function Results({data}) {
    const qc = useQuizContext();

    const handleNextClick = (e) => {
        window.location.reload();
    }

    // Combine all results into 1 arraay
    const allResults = [
        ...qc.q1, 
        ...qc.q2, 
        ...qc.q3, 
        ...qc.q4,
        ...qc.q5,
        ...qc.q6,
    ];
    
    return (
        <div 
            className="quiz-results"
            style={{ animation: "quiz-slide-fadeIn 1s" }}
        >
            <h1>{data.title}</h1>
            <p>{data.tagline}</p>
            <h2>Your Info</h2>
            <hr />
            <p><strong>Name: </strong>{qc.name}</p>
            <p><strong>Email: </strong>{qc.email}</p>
            <hr />
            <h3>Problems You Are Looking To Solve:</h3>
            <hr />
            {allResults.map((result, i) => {
                return <h3 key={`${result}-${i}`}>- {result}</h3>
            })}
            <hr />
            <Button onClick={handleNextClick}>
                {data.buttonLabel}
            </Button>
        </div>
    );
}


export default Results;