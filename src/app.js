import express from "express";
import cors from "cors";
const app = express();

// app.use -> middleware
// basic configurations
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true,limit: "16kb"}));
app.use(express.static("public"));


// cors configurations
app.use(
    cors({
    origin: process.env.CORS_ORIGIN?.split(",")|| "http://localhost:5173",
    credentials: true,
    methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type","Authorization"],
}),
);


// app.get("/", (req,res)=> {
//     res.send("Welcome to NestProjs");
// })

// app.get("/instagram",(req,res) =>{
//     res.send("Welcome to Instagram");
// });

export default app;