const mongoose = require("mongoose");
require("dotenv").config({
    path : "env.env"
})

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Connected");
    } catch (error) {
        console.log("Connect error");
        process.exit(1);
    }
}

module.exports = connectDB;