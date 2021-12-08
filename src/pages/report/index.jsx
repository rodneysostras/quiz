// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from 'react';
import {  useNavigate, useParams } from "react-router-dom";

import { Divider } from '@material-ui/core';

import QuizReportContext from "../../context/quiz-report";

import QuestionTitle from '../../components/question-title';
import QuestionOption from '../../components/question-option';
import QuestionInfo from '../../components/question-info';

import NotFound from '../../pages/notfound';

import useStyles from './styled';

export default function Report() {
    const {id} = useParams();
    const [quizReport] = React.useContext(QuizReportContext);
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <React.Fragment>
            { quizReport[id] ? (
            <React.Fragment>
                <QuestionInfo
                    date={quizReport[id].end_at}
                    cost={new Date(quizReport[id].end_at - quizReport[id].start_at).toISOString()
                        .split("T")[1]
                        .split(".")[0]}
                    score={quizReport[id].score}
                    total={quizReport[id].questions.length}
                    percentage={parseInt((quizReport[id].score / quizReport[id].questions.length) * 100)}
               
                 />
                 <Divider className={classes.divider}/>
                {quizReport[id].questions.map((item, idx) => (
                    <React.Fragment>
                        <QuestionTitle
                        index={idx + 1}
                        text={item.question}
                        />
                    <QuestionOption
                        options={item.options}
                        answer={item.answer}
                        selected={
                            item.selected
                        }
                    />
                    <Divider className={classes.divider}/>
                 </React.Fragment>
                ))}
            </React.Fragment>
            ) : (
              <NotFound />
            )}
        </React.Fragment>
    );
}
