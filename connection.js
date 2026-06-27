const mongoose = require("mongoose")

mongoose.connect("mongodb://sreejith:sreejith@ac-ngahiew-shard-00-00.qywnh3l.mongodb.net:27017,ac-ngahiew-shard-00-01.qywnh3l.mongodb.net:27017,ac-ngahiew-shard-00-02.qywnh3l.mongodb.net:27017/?ssl=true&replicaSet=atlas-bfmgfv-shard-0&authSource=admin&appName=Cluster0&dbName=bloodbank2")
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err))
module.exports = mongoose