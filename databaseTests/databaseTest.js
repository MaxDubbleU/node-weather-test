const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema');
const argv = require('yargs').argv;
//The schema is just the set up of the collection in the database, so we have a separate js to create the setup we want to use


console.log(argv)
//this is just to check that it's getting our information the user is passing in from the console
const connectToMongoDB = async () => {
  await mongo().then(async(mongoose) => {
    try {
      console.log('Connected to mongodb!')
//creates the database entry in the collection
      const test = {
        userId: argv._[0],
        firstName: argv._[1],
        lastName: argv._[2]
      }
//keeps the function from messing up in the event load times get whacky
      await new userSchema(test).save();

      console.log(test);

    } finally {
      mongoose.connection.close()
    }
  })
}

connectToMongoDB()