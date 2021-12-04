const { Autores } = require("../models/autores.models");

module.exports.findAll = (request, response) => {
  Autores.find({})
    .then((allAutores) => response.json({ autores: allAutores }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};
module.exports.getById = (request, response) => {
  Autores.findOne({ _id: request.params.id })
    .then((autores) => response.json(autores))
    .catch((err) => response.json(err));
};
module.exports.create = (request, response) => {
  const { name } = request.body;
  Autores.create({
    name
  })
    .then((autores) => response.json(autores))
    .catch((err) => response.status(400).json(err));
};
module.exports.updateById = (request, response) => {
  Autores.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
    .then((udpdateAutores) => response.json(udpdateAutores))
    .catch((err) => response.status(400).json(err));
}
module.exports.deleteById = (request, response) => {
  Autores.deleteOne({ _id: request.params.id })
    .then((deletedAutores) => response.json(deletedAutores))
    .catch((err) => response.json(err));
}
