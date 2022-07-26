const mongoose = require('mongoose')
const schema = mongoose.Schema;

const accessoireSchema = new schema({
   image:String,
   name:  {type: String, required:true},
   description: {type: String, required:true},
   price: {type: String, required:true},
   longdesc:{type: String},
  });

const accessoire= mongoose.model('accessoire', accessoireSchema);

module.exports = accessoire;