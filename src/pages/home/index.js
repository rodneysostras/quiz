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
    Select,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./styled";
import QuizSystemContext from "../../context/quiz-system";
import { mapCategory } from "../../service/opentdb";

import HeaderTitle from "../../components/title";
import NumberSwitch from "../../components/number-switch";

export default function Home() {
    const [quizSystem, setQuizSystem] = React.useContext(QuizSystemContext);
    const [advance, setAdvance] = React.useState(false);
    const navigate = useNavigate();
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            amount: quizSystem.amount,
            category: quizSystem.category,
        },
        validate: (values) => {
            if (values.amount === "") {
                return { amount: "Enter the amount." };
            }

            const amount = parseInt(values.amount);

            if (amount < 1) {
                return { amount: "less than 1, very small amount." };
            }

            if (amount > 50)
                return { amount: "greater than 50, very large amount." };
        },
        onSubmit: (values) => {
            setQuizSystem({
                amount: values.amount,
                category: values.category,
                checkout: true,
            });
            navigate("/checkout");
        },
    });

    function handleAmountChange(value) {
        formik.setFieldValue("amount", value);
    }

    function handleCategoryChange(value) {
        formik.setFieldValue("category", value);
    }

    return (
        <React.Fragment>
            <HeaderTitle title="Choose number of questions." />
            <form onSubmit={formik.handleSubmit}>
                <NumberSwitch
                    id="amount"
                    name="amount"
                    min={0}
                    max={99}
                    start={quizSystem.amount}
                    handle={handleAmountChange}
                    valueOf={[1, 5]}
                />
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
        </React.Fragment>
    );
}
