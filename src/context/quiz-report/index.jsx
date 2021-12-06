// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from "react";

export const QuizReportContext = React.createContext();

export function QuizReportContextProvider({ children }) {
    const quizReportStore =
        localStorage.getItem("quiz-report") ||
        '[]';

    const [quizReport, setQuizReport] = React.useState(
        JSON.parse(quizReportStore)
    );

    React.useMemo(() => {
        localStorage.setItem("quiz-report", JSON.stringify(quizReport));
    }, [quizReport]);

    return (
        <QuizReportContext.Provider value={[quizReport, setQuizReport]}>
            {children}
        </QuizReportContext.Provider>
    );
}

export default QuizReportContext;
