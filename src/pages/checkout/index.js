// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography, CircularProgress } from "@material-ui/core";

import useStyles from "./styled";
import { QuizContext } from "../../context/quiz";
import opentdb, { mapCategory } from "../../service/opentdb";

export default function Checkout() {
    const [quiz, setQuiz] = React.useContext(QuizContext);
    const [loading, setLoading] = React.useState(false);
    let navigate = useNavigate();
    const classes = useStyles();

    async function handleStart() {
        setLoading(true);
        opentdb.GetQuestions(quiz.amount, quiz.category).then((q) => {
            setQuiz({ ...quiz, questions: q, current: 0 });
            setTimeout(() => setLoading(false), 2000);
            setTimeout(() => navigate("/quiz"), 2100);
        });
    }

    function handleCancel() {
        setQuiz({ ...quiz, checkout: false });
        navigate("/");
    }
    return (
        <Box>
            <Typography variant="h2" className={classes.title}>
                Press start if you agree.
            </Typography>
            <Box className={classes.info}>
                <p>
                    Number of questions: <b>{quiz.amount}</b>
                </p>
                <p>
                    Selected category: <b>{mapCategory[quiz.category]}</b>
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
        </Box>
    );
}
