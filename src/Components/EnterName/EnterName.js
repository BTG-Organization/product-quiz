import {EnterNameData} from "../../staticData/EnterNameData.js";

const EnterName = ({updateSlideIndex, currentSlide}) => {
    // Add State for component date to send an update final when next button is clicked
    const e = EnterNameData;
    console.log("Data: ", e);
    return (
        <>
            <h1>{e.title}</h1>
            <p>{e.tagLine}</p>
            <p>{e.inputHeading}</p>
            <div className="input">
            <input placeholder={e.placeHolder}/>
            </div>
            <button onClick={() => updateSlideIndex(currentSlide++)}>NEXT</button>

            <div className="icons">
                {/*  <img alt="horizontal blinds" src={horizontal} />
                <img alt="vertical blinds" src={vertical} />
                <img alt="roller shades" src={roller} /> 
                <img alt="motorized blinds" src={motorized} />*/}
            </div>
        </>
    );
}

export default EnterName;