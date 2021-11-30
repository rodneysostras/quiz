// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { Box, Typography } from "@material-ui/core";
import * as React from "react";

import useStyles from "./styled";

export default function CardQuestion({
    index = 0,
    question = { question: "", options: [], answer: "" },
    onClick,
}) {
    const classes = useStyles();
    const mapLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    function convertHtmlToText(html) {
        const txt = document.createElement("div");
        txt.innerHTML = html;
        return txt.innerText;
    }

    return (
        <Box>
            <Typography variant="h6" className={classes.question}>
                {index + 1}. <b>{convertHtmlToText(question.question)}</b>
            </Typography>
            {question.options.map((item, i) => (
                <Box className={classes.options} onClick={onClick}>
                    <b>{mapLetter[i]}</b> - {convertHtmlToText(item)}
                </Box>
            ))}
        </Box>
    );
}
