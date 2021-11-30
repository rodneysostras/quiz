// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import axios from "axios";

const api_opentdb = axios.create({
    baseURL: "https://opentdb.com/api.php",
});

export const mapCategory = {
    0: "Any Category",
    9: "General Knowledge",
    10: "Entertainment: Books",
    11: "Entertainment: Film",
    12: "Entertainment: Music",
    13: "Entertainment: Musicals &amp; Theatres",
    14: "Entertainment: Television",
    15: "Entertainment: Video Games",
    16: "Entertainment: Board Games",
    17: "Science &amp; Nature",
    18: "Science: Computers",
    19: "Science: Mathematics",
    20: "Mythology",
    21: "Sports",
    22: "Geography",
    23: "History",
    24: "Politics",
    25: "Art",
    26: "Celebrities",
    27: "Animals",
    28: "Vehicles",
    29: "Entertainment: Comics",
    30: "Science: Gadgets",
    31: "Entertainment: Japanese Anime &amp; Manga",
    32: "Entertainment: Cartoon &amp; Animations",
};

export const opentdb = {
    GetQuestions: async (amount, category = 0, difficulty = 0, type = 0) => {
        const options = {
            params: { amount, category, difficulty, type },
        };
        return new Promise((resolve, reject) => {
            api_opentdb
                .request(options)
                .then(({ data }) => {
                    if (data.response_code !== 0) {
                        return reject({ error: data.response_code });
                    }
                    const shuffle = (arr) =>
                        arr.sort(() => 0.5 - Math.random());

                    const questions = data.results.map((item) => ({
                        question: item.question,
                        options: shuffle([
                            ...item.incorrect_answers,
                            item.correct_answer,
                        ]),
                        answer: item.correct_answer,
                    }));

                    resolve(questions);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    },
};

export default opentdb;
