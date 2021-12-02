// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    switch: {
        display: "flex",
        justifyContent: "Center",
        flexWrap: "nowrap",
        width: "320px",
        margin: "25px auto",
        border: "1px solid #0000003b",
        borderRadius: "15px",
        overflow: "hidden",
    },
    buttonSwitch: {
        fontSize: "1.125rem",
        color: "#fff",
        borderRadius: 0,
        border: 0,
    },
    buttonNegative: {
        backgroundColor: "#ff574d",
        "&:hover": {
            color: "#ff574d",
        },
    },
    buttonPositive: {
        backgroundColor: "#89c16e",
        "&:hover": {
            color: "#89c16e",
        },
    },
    inputSwitch: {
        textAlign: "center",
        width: "64px",
        fontSize: "24px",
    },
    cssFocused: {},
    notchedOutline: {
        borderWidth: "0",
    },
    cssOutlinedInput: {
        "&$cssFocused $notchedOutline": {
            borderWidth: "0",
        },
    },
}));

export default useStyles;
