const mongoose = require('mongoose');

require('dotenv').config()
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/forumhhmacademy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  reconnectTries: 30,
  reconnectInterval: 500
});
mongoose.connection.on('error', err => {
  console.log(err);
});
