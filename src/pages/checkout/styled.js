// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    title: {
        width: "100%",
        fontSize: "24px",
        fontWeight: 400,
        textAlign: "center",
    },
    action: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        margin: "0 auto",
    },

    info: {
        width: "70%",
        margin: "25px auto",
    },
}));

export default useStyles;
