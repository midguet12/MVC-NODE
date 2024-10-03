import express from "express";

import test from "./View/TestView.js"

const app = express();

app.use(test);

export default app;