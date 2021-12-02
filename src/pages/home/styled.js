// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    error: {
        height: "20px",
        fontWeight: 500,
        color: "red",
        textTransform: "uppercase",
    },
    iconExpand: {
        transform: "rotate(0deg)",
        transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    advance: {
        fontSize: "0.625rem",
        fontWeight: "400",
        color: "#424242",
        '&[aria-expanded="true"] $iconExpand': {
            transform: "rotate(180deg)",
        },
    },
    formControl: {
        minWidth: 120,
    },
    buttonNext: {
        width: "150px",
        margin: "15px auto",
    },
}));

export default useStyles;
