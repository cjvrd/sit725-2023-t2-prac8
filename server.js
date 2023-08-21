let express = require('express');
let app = express();
let port = process.env.port || 3000;
let router = require('./routers/router');
require('./DBconnection');

app.use(express.static(__dirname + '/'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use('/api/cats', router);

app.listen(port, () => {
    console.log('server started');
});
