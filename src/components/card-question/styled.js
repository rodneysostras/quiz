// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    question: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1,
    },
    options: {
        margin: "5px",
        padding: "5px",
        border: "1px solid #3e3e3e",
        backgroundColor: "#0000001f",
        "&:hover": {
            backgroundColor: "#00000030",
            cursor: "pointer",
        },
    },
}));

export default useStyles;
