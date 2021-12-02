// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from "react";

export const QuizSystemContext = React.createContext();

export function QuizSystemContextProvider({ children }) {
    const quizSystemStore =
        localStorage.getItem("quiz-system") ||
        '{"amount":3, "category": 0, "checkout":false}';

    const [quizSystem, setQuizSystem] = React.useState(
        JSON.parse(quizSystemStore)
    );

    React.useMemo(() => {
        localStorage.setItem("quiz", JSON.stringify(quizSystem));
    }, [quizSystem]);

    return (
        <QuizSystemContext.Provider value={[quizSystem, setQuizSystem]}>
            {children}
        </QuizSystemContext.Provider>
    );
}

export default QuizSystemContext;
