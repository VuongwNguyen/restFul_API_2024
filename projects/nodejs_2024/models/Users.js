const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    status: { type: String, required: true, default: 'active', enum: ['active', 'inactive','deleted']},
    deleted_at: { type: Date, default: null },
    created_at: { type: Date, default: Date.now }
});



module.exports = mongoose.model('Users', userSchema);
