// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from 'react';
import useStyles from "./styled";

export default function QuestionOption({options, answer, callback, selected = undefined, effect = false}) {
    const mapLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const [mapClassNames, setMapClassNames] = React.useState([]);
    const classes = useStyles();

    React.useMemo(() => {
        
        if (selected === undefined) {
            setMapClassNames(Array(options.length));
        } else {
            const answer_correct = options.indexOf(answer);
            const answer_selected = options.indexOf(selected);

            let update_mapClassNames = Array(options.length);

            update_mapClassNames[answer_selected] = 'selected';
            update_mapClassNames[answer_correct] = 'answer';

            setMapClassNames(update_mapClassNames);
        }
    }, [options, answer, selected]);

    function handlerSelect({currentTarget}) {
        if(selected !== undefined) return;
        
        const answer_select = currentTarget.dataset.id;

        callback(options[answer_select]);
    }

    return(
        <ul className={`${classes.boxList} ${selected !== undefined ? 'chosen' : ''}`}>
            {options.map((item, idx) => (
            <li key={idx} data-id={idx} onClick={handlerSelect} className={`${mapClassNames[idx]}${effect ? ' opacity-effect' : ''}`}>
                <b>{mapLetter[idx]} - </b>
                <span dangerouslySetInnerHTML={{ __html: item}} />
            </li>
            ))}
        </ul>
    );
}
