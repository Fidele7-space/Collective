const express = require('express');
const router = express.Router();

// Mock database for storing opinions
let opinions = [];

// Route for submitting an opinion
router.post('/submit', (req, res) => {
    const { opinion } = req.body;
    if (!opinion) {
        return res.status(400).json({ message: 'Opinion is required.' });
    }
    opinions.push(opinion);
    return res.status(201).json({ message: 'Opinion submitted successfully.', opinion });
});

// Route for clustering opinions (mock implementation)
router.get('/clustering', (req, res) => {
    // Here, you would implement your clustering logic, for now, we'll just return all opinions.
    return res.json({ message: 'Clustering opinions', opinions });
});

module.exports = router;