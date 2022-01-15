const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB || 'mongodb://localhost/pamperedpantry', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
