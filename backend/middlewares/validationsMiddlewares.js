const expressValidator = require("express-validator");

const validate = (req, res, next) => {
    const errors = expressValidator.validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({ errors: "Please send data in the good format xxxx@xxx.xx" })
    } else {
        next()
    }
}

const validationLogin = [
    expressValidator.body("email").exists().isEmail(),
    expressValidator.body("password").exists().isString(),
    validate
]

module.exports = { validationLogin }