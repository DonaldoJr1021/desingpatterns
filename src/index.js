const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const http = require('http');
const app = express();

// Middelwares Config
app.use(cors());
app.use(function(req, res, next){
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended: false}));

// parse application/json
app.use(bodyparser.json());


// Configure port of server with .env or 4000 by default
app.set('port', process.env.PORT || 4000);

app.use(require('./routes/index.user.routes'));
app.use(require('./routes/index.product.routes'));


// Create server
server = http.createServer(app);

// Run and listen server
server.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});
