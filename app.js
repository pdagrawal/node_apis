const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
    res.send('running node api');
});
//serving the application the port 3000
app.listen(3000, console.log('server started on port 3000'));
