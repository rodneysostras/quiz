// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
    Box,
    Button,
    Collapse,
    FormControl,
    InputLabel,
    TextField,
    Typography,
    Select,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./styled";
import QuizContext from "../../context/quiz";
import { mapCategory } from "../../service/opentdb";

export default function Home() {
    const [quiz, setQuiz] = React.useContext(QuizContext);
    const [advance, setAdvance] = React.useState(false);
    const navigate = useNavigate();
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            amount: quiz.amount,
            category: quiz.category,
        },
        validate: (values) => {
            if (values.amount === "") {
                return { amount: "Enter the amount." };
            }

            const amount = parseInt(values.amount);

            if (amount <= 0) {
                return { amount: "invalid negative value." };
            }

            if (amount >= 50) return { amount: "very large amount." };
        },
        onSubmit: (values) => {
            setQuiz({
                amount: values.amount,
                category: values.category,
                checkout: true,
            });
            navigate("/checkout");
        },
    });

    function handleAmountChange(value) {
        const amount = parseInt(formik.values.amount) + value;

        formik.setFieldValue("amount", amount >= 0 ? amount : 1);
    }

    function handleCategoryChange(value) {
        formik.setFieldValue("category", value);
    }

    return (
        <Box>
            <Typography variant="h2" className={classes.title}>
                Choose number of questions.
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Box className={classes.amountGroup}>
                    <Button
                        className={classes.buttonNegative}
                        onClick={(e) => handleAmountChange(-5)}
                    >
                        -5
                    </Button>
                    <Button
                        className={classes.buttonNegative}
                        onClick={(e) => handleAmountChange(-1)}
                    >
                        -1
                    </Button>
                    <TextField
                        id="amount"
                        name="amount"
                        type="number"
                        value={formik.values.amount}
                        onChange={formik.handleAmountChange}
                        variant="outlined"
                        inputProps={{
                            style: {
                                textAlign: "center",
                                padding: "18.5px 4px",
                            },
                        }}
                        InputProps={{
                            inputMode: "numeric",
                            classes: {
                                root: classes.cssOutlinedInput,
                                focused: classes.cssFocused,
                                notchedOutline: classes.notchedOutline,
                            },
                        }}
                    />
                    <Button
                        className={classes.buttonPositive}
                        onClick={(e) => handleAmountChange(1)}
                    >
                        +1
                    </Button>
                    <Button
                        className={classes.buttonPositive}
                        onClick={(e) => handleAmountChange(5)}
                    >
                        +5
                    </Button>
                </Box>
                <Box>
                    <Button
                        className={classes.advance}
                        onClick={() => setAdvance(!advance)}
                        aria-expanded={advance}
                    >
                        <ExpandMoreIcon className={classes.iconExpand} />
                        ADVANCE
                    </Button>
                    <Collapse
                        in={advance}
                        unmountOnExit
                        style={{ padding: "10px" }}
                    >
                        <FormControl
                            variant="filled"
                            className={classes.formControl}
                        >
                            <InputLabel htmlFor="labelCategory">
                                Select Category
                            </InputLabel>
                            <Select
                                native
                                id="labelCategory"
                                value={formik.values.category}
                                onChange={(e) =>
                                    handleCategoryChange(e.target.value)
                                }
                            >
                                {Object.keys(mapCategory).map((key) => (
                                    <option value={key}>
                                        {mapCategory[key]}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </Collapse>
                </Box>
                <Box textAlign="center">
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.buttonNext}
                    >
                        Next
                    </Button>
                </Box>
                <Box align="center" className={classes.error}>
                    {formik.errors.amount ? (
                        <span>{formik.errors.amount}</span>
                    ) : null}
                </Box>
            </form>
        </Box>
    );
}
