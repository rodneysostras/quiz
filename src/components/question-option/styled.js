// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    boxList: {
        listStyle: "none",
        "&.chosen > li": {
            transition: "opacity 0.6s ease-in-out",
            opacity: 0.6,
            "&:hover": {
                backgroundColor: "#0000001f",
                cursor: "default !important",
            },
        },
        "& > li": {
            margin: "5px",
            padding: "5px",
            border: "1px solid #3e3e3e",
            backgroundColor: "#0000001f",
            "&:hover": {
                backgroundColor: "#00000030",
                cursor: "pointer",
            },
            "&.selected": {
                backgroundColor: "#ff574d !important",
                border: "1px solid red",
                opacity: 1,
            },
            "&.answer": {
                backgroundColor: "#89c16e !important",
                border: "1px solid green",
                opacity: 1,
            },
            "&.opacity-effect": {
                transition: "background 0.6s ease-in-out",
            },
        },
    },
}));

export default useStyles;
