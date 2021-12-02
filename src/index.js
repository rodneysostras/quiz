// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QuizQuestionsContextProvider } from "./context/quiz-question";

import { QuizSystemContextProvider } from "./context/quiz-system";

import "./theme/globalstyle.css";

ReactDOM.render(
    <React.StrictMode>
        <QuizSystemContextProvider>
            <QuizQuestionsContextProvider>
                <App />
            </QuizQuestionsContextProvider>
        </QuizSystemContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
