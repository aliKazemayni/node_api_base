import mongoose from "mongoose";

export let connection = () => {
    mongoose
        .connect(process.env.DATABASE_URI ,{})
        .then(() => console.log('database connected'))
        .catch(error => console.log(error))
}