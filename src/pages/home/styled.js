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
    reportBox: {
        "& > ul": {
            listStyle: "none",
            borderRadius: "15px",
            overflow: "hidden",
            "& > li": {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 15px",
                backgroundColor: "#fff",
                fontSize: "0.75rem",
                "&:nth-child(2n-1)": {
                    backgroundColor: "#0000001f",
                },
                "&:hover": {
                    backgroundColor: "#00000030",
                    cursor: "pointer",
                },
            },
        },
    },
    reportBoxIcon: {
        fontSize: "1.25rem",
        marginLeft: "10px",
    },
    paginationBox: {
        display: "flex",
        justifyContent: "center",
        padding: "10px",
    },
}));

export default useStyles;
