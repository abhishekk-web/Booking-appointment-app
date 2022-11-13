const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const insertRoutes = require('./routes/insert');

const cors = require('cors');

const app = express();

app.use(cors());

// app.set('view engine', 'html');


app.use(bodyParser.json({extended: false}));
// app.use(express.static(path.join(__dirname, 'views')));


app.use(insertRoutes);

sequelize
// .sync({force:true})
.sync()
.then(result=>{
    console.log(result);
    app.listen(4000);

})
.catch(err=>{
    console.log(err);
})

