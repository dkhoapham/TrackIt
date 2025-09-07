const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    res.json({ fruits: ["Apples", "Oranges", "Pearls"] });
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});