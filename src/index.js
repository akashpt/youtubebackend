import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on PORT: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO DB CONNECTION FAILED", err)
})








/*
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log('error',error);
            throw error
        })
        
        app.listen(process.env.PORT, () => {
            console.log(`app is listening on the port ${process.env.PORT}`);
        })


    } catch (error) {
        console.log("Error", error);
        throw error
    }
})()
    */