const product = require('../models/task');

const getTask = async (req, res) => {
    let data = await task.find()
    res.send(data)
}

const createTask = async (req, res) => {
    let data = await task.create(req.body)
    res.status(201).send(data)
}
const updateTask = async (req, res) => {
    let {id} = req.params;
    let data = await task.findByIdAndUpdate(id, req.body);
    res.send(data);
}
const deleteTask = async (req, res) => {
    let {id} = req.params;
     let data = await tas.findByIdAndDelete(id);
    res.send(data);
}


module.exports = { getTask,createTask ,updateTask , deleteTask }
