const mongoose = require('mongoose')
const schema = mongoose.Schema;

const vetementSchema = new schema({
   image:String,
   name:  {type: String, required:true},
   description: {type: String, required:true},
   price: {type: String, required:true},
   longdesc:{type: String},
  });

const vetement= mongoose.model('vetement', vetementSchema);

module.exports = vetement;