// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from 'react';
import { useNavigate } from 'react-router';

import { Box, Button } from '@material-ui/core';

import useStyles from './styled';

export default function NotFound() {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Box className={classes.error}><p><span>😓</span>Not Found</p></Box>
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
