// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from 'react';

import {Container, Divider} from '@material-ui/core';

import useStyles from './styled';

export default function Footer() {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" component="footer" className={classes.footerBox} >
            <Divider />
            <section>
                <p>Copyright © { new Date().getFullYear() } Rodney Sostras</p>
                <ul>
                    <li>
                        <a href="https://github.com/rodneysostras" target="_blank" rel="noopener noreferrer">
                            <img src="/static/img/github.svg" alt="Github Rodney Sostras" />
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/rodney-sostras" target="_blank" rel="noopener noreferrer">
                            <img src="/static/img/linkedin.svg" alt="Linkedin Rodney Sostras" />
                        </a>
                    </li>
                </ul>
            </section>
        </Container>
    )
}
