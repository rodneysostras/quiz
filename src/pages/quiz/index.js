// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from "react";
import { useFormik } from "formik";

import QuizContext from "../../context/quiz";
import CardQuestion from "../../components/card-question";

export default function Quiz() {
    const [quiz, setQuiz] = React.useContext(QuizContext);
    const formik = useFormik({});

    return (
        <CardQuestion
            index={quiz.current}
            question={quiz.questions[quiz.current]}
        />
    );
}
