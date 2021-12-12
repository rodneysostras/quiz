// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    footerBox: {
        fontSize: "0.75rem",
        "& > section": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 0",
            "& > ul": {
                listStyle: "none",
                lineHeight: "8px",
                "& > li": {
                    display: "inline-block",
                    margin: "0 0.625rem",
                },
            },
        },
    },
}));

export default useStyles;
