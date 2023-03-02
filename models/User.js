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
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        is_active: {
            type: Boolean,
            Boolean: 1
        },
        role_id: {
            type: String
        }
    });

const User = model('User', userSchema);

module.exports = User;