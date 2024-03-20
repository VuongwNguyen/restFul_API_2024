const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    parrent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },
    status: { type: String, default: 'active', enum: ['active', 'inactive', 'deleted'] },
    created_at: { type: Date, default: Date.now },
    deleted_at: { type: Date, default: null }
});


module.exports = mongoose.model('Categories', categorySchema);