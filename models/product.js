//Models directory- where all the Mongoose models are stored
//Mongoose uses schemas to define the data. Schemas are like blueprints for each new entry made into the database
//Schemas don't interact w/ the data itself, (defined) models do

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//pass JS object that defines/describes that schema
var schema = new Schema({
  imagePath: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true}
});

model.exports = mongoose.model('Product', schema);
