const AutoresController = require("../controllers/autores.controllers");
module.exports = function (app) {
  app.get("/api/autores", AutoresController.findAll);
  app.get("/api/autores/:id", AutoresController.getById);
  app.put("/api/autores/:id", AutoresController.updateById);
  app.post("/api/autores", AutoresController.create);
  app.delete("/api/autores/:id", AutoresController.deleteById);
};
