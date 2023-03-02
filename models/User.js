const {model, Schema} = require('mongoose');

// name email password is_active roleid

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        is_active: {
            type: Boolean,
            default: true
        },
        // role_id: {
        //     type: ObjectId,
        //     required: true
        // }
    });

const User = model('User', userSchema);

module.exports = User;