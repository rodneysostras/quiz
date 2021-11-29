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
    any: "Any Category",
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
        return new Promise((resolve, reject) => {
            api_opentdb
                .request({ amount, category, difficulty, type })
                .then(({ data }) => {
                    resolve({});
                })
                .catch(({ response }) => {
                    reject({});
                });
        });
    },
};

export default opentdb;
