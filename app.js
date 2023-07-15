require('./database/auth.database');

const express = require('express');
const app = express();

//import routes 
const authRoutes = require('./routes/auth.routes');

//middleware
app.use(express.json());

//Routes
app.use('/', authRoutes);



app.listen(3000, () => {
    console.log(`server is running on 3000`);
})