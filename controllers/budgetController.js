const Budget = require('../models/Budget');

exports.createBudget = async (req, res) => {
    try {
        const budget = new Budget({
            ...req.body,
            user: req.user.id,
        });
        await budget.save();
        res.status(201).json(budget);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find({ user: req.user.id });
        res.status(200).json(budgets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateBudget = async (req, res) => {
    const { id } = req.params;
    const { totalAmount, category, period } = req.body;

    try {
        let budget = await Budget.findById(id);

        if (!budget) {
            return res.status(404).json({ msg: 'Budget not found' });
        }

        if (budget.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        budget.totalAmount = totalAmount || budget.totalAmount;
        budget.category = category || budget.category;
        budget.period = period || budget.period;

        await budget.save();
        res.json(budget);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteBudget = async (req, res) => {
    const { id } = req.params;

    try {
        let budget = await Budget.findById(id);

        if (!budget) {
            return res.status(404).json({ msg: 'Budget not found' });
        }

        if (budget.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await budget.remove();
        res.json({ msg: 'Budget removed' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
