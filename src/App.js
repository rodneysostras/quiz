// ┌──────────────────────────────────────────────────────────────────────────────────────────────┐
// │ Copyright (c) 2021 by the author of the Quiz project. All rights reserved.                   │
// │ This owner-supplied source code has no limitations on the condition imposed on the           │
// │ maintenance of the copyright notice.                                                         │
// │ For more information, read the LICENSE file at the root of the project.                      │
// │ Written by author Rodney Sostras <rodney.sostras@gmail.com>.                                 │
// └──────────────────────────────────────────────────────────────────────────────────────────────┘

import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { Box, Container, Divider, Typography } from "@material-ui/core";

import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Checkout from "./pages/checkout";
import Report from "./pages/report";

export default function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
                <Typography
                    variant="h1"
                    align="center"
                    style={{
                        width: "100%",
                        fontFamily: "'Fascinate Inline', cursive",
                        fontSize: "64px",
                    }}
                >
                    QUIZ
                </Typography>
                <Divider />
                <Box padding="10px">
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/quiz" element={<Quiz />} />
                            <Route path="/report/:id" element={<Report />} />
                        </Routes>
                    </BrowserRouter>
                </Box>
            </Container>
        </React.Fragment>
    );
}
