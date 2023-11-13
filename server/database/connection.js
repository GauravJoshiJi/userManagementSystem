const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongodb connection string
    const con = await mongoose.connect(
      "mongodb+srv://admin:admin123@cluster0.tyntoxj.mongodb.net/users?retryWrites=true&w=majority"
    );
    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;

// getting-started.js
// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://admin:admin123@cluster0.tyntoxj.mongodb.net/users?retryWrites=true&w=majority"
//     );
//     console.log("Database connected");
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports = connectDB;
