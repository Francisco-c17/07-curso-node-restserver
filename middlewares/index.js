// const { validarCampos } = require("../middlewares/validar-campos");
// const { validarJWT } = require("../middlewares/validar-jwt");
// const { esAdminRole, tieneRol } = require("../middlewares/validar-roles");

const validaCampos = require("../middlewares/validar-campos");
const validaJWT = require("../middlewares/validar-jwt");
const validaRoles = require("../middlewares/validar-roles");

module.exports = {
  ...validaCampos,
  ...validaJWT,
  ...validaRoles,
};
