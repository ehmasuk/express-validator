const express = require("express");

const { validateRegister, validationErrorsHandler } = require("./validators/validator");


const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home page
app.get("/", (req, res, next) => {
    res.send("Welcome!");
});

// form
app.post("/", validateRegister, validationErrorsHandler, (req, res, next) => {
    res.send("DONE!");
});

// error handler
app.use((req, res, next) => {
    res.send("Route not found");
});

module.exports = app;
