// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from "react";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    title: {
        width: "100%",
        fontSize: "24px",
        fontWeight: 400,
        textAlign: "center",
    },
}));

export default function Title({ text }) {
    const classes = useStyles();
    return (
        <header>
            <Typography
                variant="h2"
                className={classes.title}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </header>
    );
}
