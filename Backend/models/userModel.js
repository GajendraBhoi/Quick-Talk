import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    confirmPassword: {
        type: String,
    },
}, { timestamps: true })

// timestamps : it store cratedAt and updatedAt info 

const user = mongoose.model("User", userSchema);
export default user;