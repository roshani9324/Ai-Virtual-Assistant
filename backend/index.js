import express from "express";
import dotenv from "dotenv"
dotenv.config();

import connectdb from "./config/connectdb.js";
import dns from "dns";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
import gemini from "./gemini.js";
dns.setServers(["8.8.8.8"]);





const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter)




const port=process.env.PORT||5000;
app.get("/", async (req, res) => {
  try {
    let prompt = req.query.prompt;
    let data = await gemini(prompt);
    res.json(data);
  } catch (err) {
    res.status(err.response?.status || 500).json({
      message: err.response?.data?.error?.message || "Something went wrong",
    });
  }
});
// app.get("/" ,(req,res)=>{
//     res.send("Hello World")
// })

app.listen(port,()=>{
    connectdb();
    console.log(`Server is running on port ${port}`)
})


//ObRPXpi91TZBQEaB