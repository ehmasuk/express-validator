const { check, validationResult } = require("express-validator");

const validateRegister = [
    check("name").trim().notEmpty().withMessage("Name is required"),
    check("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Please enter a valid email address"),
];

const validationErrorsHandler = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send(result);
    } else {
        next();
    }
};

module.exports = { validateRegister, validationErrorsHandler };
