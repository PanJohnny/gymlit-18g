import mongoose from "mongoose";

// { Schema, model, connect, connection, models }
if (mongoose.connection.readyState != 1) {
    const login = import.meta.env.DB_URL;

    mongoose.connect(login);
}


const PageStat = new mongoose.Schema({
    page: String,
    visits: Number,
    visitors: [

    ]
});

export const PageStatModel = mongoose.models.PageStat || mongoose.model("PageStat", PageStat);