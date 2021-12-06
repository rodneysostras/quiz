// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        padding: "10px 0",
        margin: "0 auto",
        fontSize: "0.75rem",
    },
    loading: {
        position: "relative",
        display: "inline-block",
        animation: `$spin 1000ms infinite linear`,
    },
    "@keyframes spin": {
        "0%": {
            transform: "rotate(0deg)",
        },
        "100%": {
            transform: "rotate(360deg)",
        },
    },
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
    divider: {
        width: "70%",
        margin: "0 auto",
        marginBottom: "1rem",
    },
    listBox: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        margin: "1rem 0",
        listStyle: "none",
        "& > li": {
            height: "19px",
            width: "25px",
            padding: "2px 0",
            margin: "5px",
            fontSize: "0.625rem",
            textAlign: "center",
            cursor: "pointer",
            "&.correct": {
                backgroundColor: "#89c16e",
                border: "1px solid green",
            },
            "&.wrong": {
                backgroundColor: "#ff574d",
                border: "1px solid red",
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
