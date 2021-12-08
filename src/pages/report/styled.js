// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    divider: {
        width: "70%",
        margin: "1.563rem auto",
    },
    error: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "3rem",
        marginBottom: "1rem",
        "& > p": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
    },
    action: {
        width: "60%",
        margin: "0 auto",
        marginBottom: "1rem",
        "& > button": {
            marginLeft: "100%",
        },
    },
}));

export default useStyles;
