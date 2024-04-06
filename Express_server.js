const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.text()); // Parse text/plain request bodies

// Endpoint to handle POST requests
app.post('/', (req, res) => {
    console.log('Received POST request:', req.body);

    // Render the response HTML with the received POST data
    res.render('response', { postData: req.body });
});

// Set up the view engine and directory for HTML templates
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
