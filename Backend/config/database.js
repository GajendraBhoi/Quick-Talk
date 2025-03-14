import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = () => {
    const DB_URL = process.env.DB_URL;

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Connected to DB");
        })
        .catch((error) => {
            console.error("Error connecting to DB:", error);
        });
};

export default dbConnect;
