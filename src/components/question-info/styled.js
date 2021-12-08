// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    infoBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        margin: "0 auto",
        marginBottom: "1rem",
        "& > span": {
            fontSize: "3rem",
        },
        "& > div": {
            paddingLeft: "1rem",
            "& > p": {
                width: "100%",
                textAlign: "center",
                fontSize: "0.75rem",
            },
        },
    },
    action: {
        padding: "10px 15px",
        "& > button": {
            float: "right",
        },
    },
}));

export default useStyles;
