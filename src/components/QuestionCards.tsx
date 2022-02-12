import React from 'react';

type questionProps = {
    question: string;
    answers: string[];
    userAnswer: any;
    questionNumber: number;
    questionTotal: number;
    mCallback: any;
}

// make this as a function component e.g <QuestionCard />
//then passing a params if you want

/**
 * dangerouslySetInnerHTML = because response of API would be a HTMl, 
 * so this method gonna sanitize a HTMl tag 
 */
//

const QuestionCard: React.FC<questionProps> = ({
    question
    , answers
    , mCallback
    , userAnswer
    , questionNumber
    , questionTotal
}) => (
    <div>
        <p className="number">
            Question: {questionNumber} / {questionTotal}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }}>
        </p>
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={mCallback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default QuestionCard;