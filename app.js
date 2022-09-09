const express = require('express');
const pug = require('pug');
const port = 80;
const app = express();
const path = require('path');
const { stringify } = require('querystring');
app.use('/static', express.static('static'));
app.use(express.urlencoded())
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
    let params = {
        name : 'Jane Appleseed',
        number : '0000 0000 0000 0000',
        month : '00',
        year : '00',
        cvv : '001'
    }
    res.status(200).render('index.pug',params);
})
app.post('/', (req, res) => {
    console.log(req.body);
    let params = {
        name : req.body.name,
        number : req.body.number,
        month : req.body.month < 10 ? "0" + req.body.month.toString() : req.body.month,
        year : req.body.year < 10 ? "0" + req.body.year.toString() : req.body.year,
        cvv : req.body.cvv
    }
    console.log(params);
    res.status(200).render('thankyou.pug', params);
})



app.listen(port, () => {
    console.log("The server is start on port " + port);
})