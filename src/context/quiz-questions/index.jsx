// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from "react";

export const QuizQuestionsContext = React.createContext();

export function QuizQuestionsContextProvider({ children }) {
    const quizQuestionsStore =
        localStorage.getItem("quiz-questions") ||
        '{"timestamp": 0, "current":0, "score": 0, "questions": []}';

    const [quizQuestions, setQuizQuestions] = React.useState(
        JSON.parse(quizQuestionsStore)
    );

    React.useMemo(() => {
        localStorage.setItem("quiz-questions", JSON.stringify(quizQuestions));
    }, [quizQuestions]);

    return (
        <QuizQuestionsContext.Provider value={[quizQuestions, setQuizQuestions]}>
            {children}
        </QuizQuestionsContext.Provider>
    );
}

export default QuizQuestionsContext;
