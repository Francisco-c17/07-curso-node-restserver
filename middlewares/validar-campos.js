const { validationResult } = require("express-validator");

const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};

const validarJSON = (err, req, res, next) => {
  if (
    err instanceof SyntaxError &&
    err.status === 400 &&
    "body" in err &&
    err.type === "entity.parse.failed"
  ) {
    res.status(400);
    res.set("Content-Type", "application/json");
    res.json({
      message: "JSON malformed",
    });
  } else {
    next();
  }
};

module.exports = {
  validarCampos,
  validarJSON,
};
