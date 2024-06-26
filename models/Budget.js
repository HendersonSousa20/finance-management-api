const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    totalAmount: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    period: {
        type: String,
        enum: ['monthly', 'yearly'],
        required: true,
    },
});

module.exports = mongoose.model('Budget', BudgetSchema);
