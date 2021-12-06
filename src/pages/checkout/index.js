// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress } from "@material-ui/core";

import { QuizSystemContext } from "../../context/quiz-system";
import { QuizQuestionsContext } from "../../context/quiz-questions";
import HeaderTitle from "../../components/title";

import useStyles from "./styled";

import opentdb, { mapCategory } from "../../service/opentdb";

export default function Checkout() {
    const [quizSystem, setQuizSystem] = React.useContext(QuizSystemContext);
    const [_, setQuizQuestions] = React.useContext(QuizQuestionsContext);
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();
    const classes = useStyles();

    async function handleStart() {
        setLoading(true);
        opentdb
            .GetQuestions(quizSystem.amount, quizSystem.category)
            .then((q) => {
                setQuizQuestions({
                    start_at: new Date().getTime(),
                    score: 0,
                    current: 0,
                    questions: q,
                });
                setTimeout(() => navigate("/quiz"), 2100);
            });
    }

    function handleCancel() {
        setQuizSystem({ ...quizSystem, checkout: false });
        navigate("/");
    }
    return (
        <React.Fragment>
            <HeaderTitle text="Press start if you agree." />
            <Box className={classes.info}>
                <p>
                    Number of questions: <b>{quizSystem.amount}</b>
                </p>
                <p>
                    Selected category: <b>{mapCategory[quizSystem.category]}</b>
                </p>
            </Box>
            <Box className={classes.action}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleCancel()}
                >
                    CANCEL
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleStart()}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size="24px" /> : "START"}
                </Button>
            </Box>
        </React.Fragment>
    );
}
