const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

const app = express(); 

const port = process.env.PORT || 3000; 

app.use(express.json());

app.use("api/v1/code-review", require('./routes/codeReview')); 
app.use("api/v1/reviews/:id", require('./routes/reviews')); 

app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});

