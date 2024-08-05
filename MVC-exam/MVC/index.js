const express = require("express")
const dbConnect = require("./config/db")
const userRouter = require("./routes/user.route")
const routes=require("./routes/task.route")

const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send("working ")
})
app.use("/user",userRouter)
app.use("/task",taskRouter)
app.listen(8090, () => {
    console.log("listening port 8090");
   dbConnect()
})