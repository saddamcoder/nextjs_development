import mongoose, { Schema } from "mongoose";

const TopicSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description cannot be more than 500 characters'],
    },
}, {
    timestamps: true,
});

const Topic = mongoose.models.Topic || mongoose.model("Topic", TopicSchema);

export default Topic;