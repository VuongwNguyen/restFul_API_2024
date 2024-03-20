const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    User_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
        product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    status: { type: String, required: true, enum: ['pending', 'completed', 'canceled'] },
    payment: { type: String, required: true, enum: ['cash', 'credit_card'] },
    created_at: { type: Date, default: Date.now },
    completed_at: { type: Date, default: null },
    canceled_at: { type: Date, default: null }
});

module.exports = mongoose.model('Orders', orderSchema);  // Export model để sử dụng ở các file khác