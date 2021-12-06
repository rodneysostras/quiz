//  ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
//  │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
//  │ This owner-supplied source code has no limitations on the condition imposed on the           │
//  │ maintenance of the copyright notice.                                                         │
//  │ For more information, read the LICENSE file at the root of the project.                      │
//  │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
//  └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { Typography } from "@material-ui/core";
import * as React from "react";
import useStyles from "./styled";

export default function QuestionTitle({ index, text }) {
    const classes = useStyles();
    return (
        <Typography variant="h6" className={classes.title}>
            <span>{index} - </span>
            <b dangerouslySetInnerHTML={{ __html: text }} />
        </Typography>
    );
}
