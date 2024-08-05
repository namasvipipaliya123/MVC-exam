
const { Router } = require("express")
const { getTask, createTask } = require("../controllers/task.js")
const taskRouter = Router()
taskRouter.get("/",getTask)
taskRouter.post("/",createTask)



module.exports=taskRouter
      