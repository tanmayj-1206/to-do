const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));
app.use(express.static('assets'));
app.use('/', require('./routes/home'));

app.listen(port, function(err) {
    if(err)
    {
        console.log(err);
    }
    console.log('server started');
})