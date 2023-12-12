const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const dbConn = await mongoose.connect(process.env.DB_CONNECTION);
    console.log(
      `db connected as ${dbConn.connection.name}/${dbConn.connection.host}...`
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection();
