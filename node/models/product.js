// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
// var BookSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   category: String
// });
var BookSchema = new mongoose.Schema({
  nome: String,
  time: String,
  escudo: String,
  ultimaPontuacao: Number,
  totalMes: Number,
  pagou: Boolean
});

// Return model
module.exports = restful.model('Usuarios', BookSchema);