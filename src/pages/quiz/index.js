// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Divider } from "@material-ui/core";

import QuizQuestionsContext from "../../context/quiz-questions";
import QuizReportContext from "../../context/quiz-report";

import QuestionTitle from "../../components/question-title";
import QuestionOption from "../../components/question-option";
import HeaderTitle from "../../components/title";

import useStyles from "./styled";

export default function Quiz() {
    const [quizQuestions, setQuizQuestions] =
        React.useContext(QuizQuestionsContext);
    const [quizReport, setQuizReport] = React.useContext(QuizReportContext);
    const [feedback, setFeedback] = React.useState(0);
    const [loading, setLoading] = React.useState(false);

    const navigate = useNavigate();
    const classes = useStyles();

    function checkAnswer(option) {
        return option.selected === option.answer;
    }

    function handleAnswer(value) {
        setLoading(true);
        setQuizQuestions((state) => {
            const current = parseInt(state.current);
            const answer = state.questions[current].answer;

            if (answer === value) {
                state.score++;
            }

            state.questions[current].selected = value;

            return state;
        });

        setTimeout(() => {
            const update_quizQuestions = { ...quizQuestions };
            update_quizQuestions.current++;

            if (
                update_quizQuestions.current === quizQuestions.questions.length
            ) {
                const update_quizReport = [...quizReport];

                update_quizReport.unshift({
                    questions: [...quizQuestions.questions],
                    score: quizQuestions.score,
                    percentage: parseInt(
                        (quizQuestions.score / quizQuestions.questions.length) *
                            100
                    ),
                    start_at: quizQuestions.start_at,
                    end_at: new Date().getTime(),
                });

                setQuizReport(update_quizReport);
            }

            setQuizQuestions(update_quizQuestions);
            setLoading(false);
        }, 1300);
    }

    return quizQuestions.questions[quizQuestions.current] ? (
        <React.Fragment>
            <QuestionTitle
                index={quizQuestions.current + 1}
                text={quizQuestions.questions[quizQuestions.current].question}
            />
            <QuestionOption
                effect={true}
                options={quizQuestions.questions[quizQuestions.current].options}
                answer={quizQuestions.questions[quizQuestions.current].answer}
                selected={
                    quizQuestions.questions[quizQuestions.current].selected
                }
                callback={handleAnswer}
            />
            <footer className={classes.footer}>
                <span>
                    <b>{quizQuestions.score}</b>/
                    {quizQuestions.questions.length} score
                </span>
                {loading && (
                    <b>
                        loading next question...
                        <span className={classes.loading}>⏳</span>
                    </b>
                )}
            </footer>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <Box className={classes.infoBox}>
                <span>{`${
                    quizReport[0].percentage < 50
                        ? "☹️"
                        : quizReport[0].percentage < 85
                        ? "😕"
                        : "🙂"
                }`}</span>
                <div>
                    <p>
                        {`${new Date(quizReport[0].end_at).toLocaleString(
                            "en"
                        )}`}
                    </p>
                    <p>
                        <b>Hits: </b>
                        {`${quizReport[0].score}/${quizReport[0].questions.length} (${quizReport[0].percentage}%)`}
                    </p>
                    <p>
                        <b>Testing time: </b>
                        {`${
                            new Date(
                                quizReport[0].end_at - quizReport[0].start_at
                            )
                                .toISOString()
                                .split("T")[1]
                                .split(".")[0]
                        }`}
                    </p>
                </div>
            </Box>
            <HeaderTitle text="Click on the question to verify" />
            <ul className={classes.listBox}>
                {quizReport[0].questions.map((item, idx) => (
                    <li
                        key={idx}
                        className={
                            checkAnswer(quizReport[0].questions[idx])
                                ? "correct"
                                : "wrong"
                        }
                        onClick={() => setFeedback(idx)}
                    >
                        {idx + 1}
                    </li>
                ))}
            </ul>
            <Divider className={classes.divider} />
            <QuestionTitle
                index={feedback + 1}
                text={quizReport[0].questions[feedback].question}
            />
            <QuestionOption
                options={quizReport[0].questions[feedback].options}
                answer={quizReport[0].questions[feedback].answer}
                selected={quizReport[0].questions[feedback].selected}
            />
            <Box className={classes.action}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/")}
                >
                    HOME
                </Button>
            </Box>
        </React.Fragment>
    );
}
