const mongoose = require('mongoose');
//const { mongoPass } = require('./config.json');
const mongoPath = 'mongodb+srv://ASCIInoUser:Geovani1@default.fmve2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

module.exports = async () => {
    await mongoose.connect(mongoPath, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  
    return mongoose
  }

  // config.json wasn't cooperating so I decided to remove that connection since it wasn't vital to the program. Here we are just setting our path to the database and setting basic instructions