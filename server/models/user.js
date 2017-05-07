import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be minimum of 5 characters']
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be minimum of 8 characters']
    }
});

//Write some encryption for Password

const User = mongoose.model('User', userSchema);

export default User;
