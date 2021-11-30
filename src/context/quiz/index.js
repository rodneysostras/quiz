// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from "react";

export const QuizContext = React.createContext();

export function QuizContextProvider({ children }) {
    const quizStore =
        localStorage.getItem("quiz") ||
        '{"amount":3, "category": 0, "checkout":false}';

    const [quiz, setQuiz] = React.useState(JSON.parse(quizStore));

    React.useMemo(() => {
        localStorage.setItem("quiz", JSON.stringify(quiz));
    }, [quiz]);

    return (
        <QuizContext.Provider value={[quiz, setQuiz]}>
            {children}
        </QuizContext.Provider>
    );
}

export default QuizContext;
