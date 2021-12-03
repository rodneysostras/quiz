// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from 'react';

import {Box, Button, TextField} from "@material-ui/core";

import useStyles from "./styled";

export default function NumberSwitch({valueOf, max, min, handle, start = 0, ...props}) {
    const [count, setCount] = React.useState(parseInt(start));
    const classes = useStyles();

    max = parseInt(max);
    min = parseInt(min);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useMemo(()=> handle(count), [count]);

    function handleInput(value) {
        if(value !== "") {
            parseInt(value)
        }

        if(value < min) {
            setCount(min);
        } else if(value > max) {
            setCount(max);
        } else {
            setCount(parseInt(value));
        }
        
    }
    
    function Increment({value}) {
        return (<Button className={`${classes.buttonSwitch} ${classes.buttonPositive}`} onClick={() => handleInput(count + value)}> +{value}</Button>);
    }

    function Decrement({value}) {
        return (<Button className={`${classes.buttonSwitch} ${classes.buttonNegative}`} onClick={() => handleInput(count - value)}>-{value}</Button>);
    }

    return (
    <Box className={classes.switch}>
        { valueOf.sort((a, b) => b - a).map((item, index) => (<Decrement value={item} key={index}/>)) }
        <TextField
            {...props}
            value={count}
            onChange={({target}) => handleInput(target.value)}
            type="number"
            className={classes.inputSwitch}
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
        { valueOf.sort((a, b) => a - b).map((item, index) => (<Increment value={item} key={index}/>)) }
    </Box>
    );
};
