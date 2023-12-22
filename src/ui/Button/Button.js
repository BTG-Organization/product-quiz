import "./button.scss";

const Button = ({children, onClick}) => {
    return (
        <button className="quiz-button" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;