import mongoose from 'mongoose';

// This is the user Schema defined for mongodb using mongoose
// We need to define the fields and their types also if unique and mandatory

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
    timestamps: true,  // This is the timestamp which will store the creation date and update date of the record
});

const User = mongoose.model('User', userSchema);
export default User;  // Export this schema so that it can be used anywhere