const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let applications = [];

app.get('/', (req, res) => {
    res.send('Elite Face India API is running...');
});

app.post('/api/apply', (req, res) => {

    const { name, age, category, city } = req.body;

    if (!name || !age) {
        return res.status(400).json({
            message: "Please provide name and age."
        });
    }

    const newApplication = {
        id: applications.length + 1,
        name,
        age,
        category,
        city,
        date: new Date()
    };

    applications.push(newApplication);

    console.log("New Applicant:", newApplication);

    res.status(201).json({
        message: "Application submitted successfully!",
        data: newApplication
    });

});

app.get('/api/applicants', (req, res) => {
    res.json(applications);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});