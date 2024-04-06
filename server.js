const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.text()); // Parse text/plain request bodies

// Endpoint to handle POST requests
app.post('/', (req, res) => {
    console.log('Received POST request:', req.body);
    // Add code here to send push notifications or handle the request as needed
    res.send('Push notification sent successfully');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
