
const getQuestionDataByIndex = (qc) => {
    if(qc.slideIndex === 1) {
        return qc.q1
    }
    if(qc.slideIndex === 2) {
        return qc.q2
    }
    if(qc.slideIndex === 3) {
        return qc.q3
    }
    if(qc.slideIndex === 4) {
        return qc.q1
    }
    if(qc.slideIndex === 5) {
        return qc.q2
    }
    if(qc.slideIndex === 6) {
        return qc.q3
    }
    return;
}

export default getQuestionDataByIndex;
