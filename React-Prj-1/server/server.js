let express = require('express');
let cors = require('cors');

let fs = require('fs');

let app = express();
app.use(cors());


let data = {};
fs.readFile('./data.json', function (err, rd) {
    data = rd + '';
});
app.get('/data', function (req, res) {
    //res.sendFile(__dirname+'/data.json');
    res.send(data)
})
app.listen(5050, function (err) {
    err ? console.log(err) : console.log('server listening on port 5050');
})