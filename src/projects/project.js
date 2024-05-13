import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    course:{
        type :String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    state: {
        type: Boolean,
        default: true
    }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
