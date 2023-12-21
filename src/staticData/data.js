import horiz from "../images/horiz.png";
import motorized from "../images/motorized.png";
import roller from "../images/roller.png";
import vert from "../images/vert.png";

// Enter Name (Intro Screen Data)
export const EnterNameData = {
    title: "Take The BTG Quiz",
    tagLine: "We're here to help you find your perfect window treatments",
    inputHeading: "Let's start with your name?",
    placeHolder: "ie: John Smith",
    buttonLabel: "Begin Quiz"
}

// Dynamic Question Data
//Try Creating Components Dynamically with this data
// Types are "multi", "single", "multi-icon", "icon"
export const QuestionData = [
    {
        id: 1,
        title: "Welcome to BTG",
        tagLine: "What problems are you trying to solve? (This is a multi select, 1 selection minimmum is required to move on)",
        type: "multi",
        error: "You must make at least 1 selection",
        questions: [
            {q: "Blackout"},
            {q: "Privacy"},
            {q: "Cordless"},
            {q: "Energy Efficient"},
            {q: "Easy to Clean"},
            {q: "Design to Modern Look"},
        ],
        buttonLabel: "Next Question" 
    },
    {
        id: 2,
        title: "Ok, Tell us a bit about what's important to you",
        tagLine: "Which of the following describes your budget? (This is a single select, only 1 selection allowed and is required to move on)",
        type: "single",
        error: "You must select one answer to continue",
        questions: [
            {q: "I'm on a Budget"},
            {q: "I'm willing to splerg a little"},
            {q: "I'm on the fence"},
            {q: "Money is no object"},
        ],
        buttonLabel: "Next Question"
    },
    {
        id: 3,
        title: "Tell Us About Your Home",
        tagLine: "What rooms do you need are you looking to style. Select all thaat apply.",
        type: "icon",
        error: "You must select at least one answer to continue",
        questions: [
            {icon: horiz, desc: "Blinds"},
            {icon: motorized, desc: "Roman"},
            {icon: roller, desc: "Shade"},
            {icon: vert, desc: "Verticals"},
        ],
        buttonLabel: "Next Question"
    }
]

// Email Data
export const EmailData = {
    title: "Let's Be Friends",
    tagLine: "Enter your email to stay in touch",
    placeholder: "example@email.com",
    error: "You must enter a valid email",
    buttonLabel: "Get Results"
}

// Results Data
export const ResultsData = {
    title: "Your Quiz Results",
    tagLine: "Here are our reccomendations based on your answers",
    buttonLabel: "Retake The Quiz"
}
