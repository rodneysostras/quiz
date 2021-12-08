// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from 'react';

import {Box} from '@material-ui/core';

import useStyles from './styled';

export default function QuestionInfo({date, cost, score, total, percentage}){
    const classes = useStyles();

    return(
        <Box className={classes.infoBox}>
                <span>{`${
                    percentage < 30
                        ? "☹️"
                        : percentage < 60
                        ? "😕"
                        : percentage < 90
                        ? "🙂"
                        : "🤩"
                }`}</span>
                <div>
                    <p>
                        {`${new Date(date).toLocaleString(
                            "en"
                        )}`}
                    </p>
                    <p>
                        <b>Hits: </b>
                        {`${score}/${total} (${percentage}%)`}
                    </p>
                    <p>
                        <b>Testing time: </b>
                        {cost}
                    </p>
                </div>
            </Box>
    );
}
