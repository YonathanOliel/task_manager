const mongoose = require('mongoose')
const { type } = require('os')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'most provide name'],
        trim: true,
        maxlength: [20, 'name can not be more then 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)