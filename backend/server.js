require('dotenv').config();

const express = require('express');
const dbConnect=require('./utility/mongo');



const jobRoute = require('./routes/jobs');
const clientRoute = require('./routes/clients');
const noteRoute = require('./routes/notes');

// express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
    next();
});

//routes
app.use('/api/jobs', jobRoute);
app.use('/api/clients', clientRoute);
app.use('/api/notes', noteRoute);


dbConnect().then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port 4000!!!');
    })
})
.catch((error) => {
    console.log(error);
});