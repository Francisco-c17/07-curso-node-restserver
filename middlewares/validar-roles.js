const { request, response } = require("express");
const role = require("../models/role");

const esAdminRole = (req = request, res = response, next) => {
  if (!req.usuario) {
    return res.status(500).json({
      msg: "Se requiere verificar el role sin validar el token primero",
    });
  }

  //Validar rol
  const { rol, nombre } = req.usuario;
  if (rol !== "ADMIN_ROLE") {
    return res.status(401).json({
      msg: `${nombre} no es administrador - No puede hacer esto`,
    });
  }

  next();
};

const tieneRol = (...roles) => {
  return (req = request, res = response, next) => {
    if (!req.usuario) {
      return res.status(500).json({
        msg: "Se requiere verificar el role sin validar el token primero",
      });
    }
    if (!roles.includes(req.usuario.rol)) {
      return res.status(500).json({
        msg: `EL servicio requiere uno de estos roles ${roles}`,
      });
    }
    next();
  };
};

module.exports = { esAdminRole, tieneRol };
