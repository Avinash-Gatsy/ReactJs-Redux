let express = require('express'); //return the function
let app = express(); //invoke the function -> object

//middleware
app.use(express.static(__dirname)); //to access the static files

app.get('/',function(req, res){
    //res.send('Working');
    res.sendFile(__dirname+"/hands-on-modules.html");
})

app.listen(3030);
console.log('server is now live on localhost:3030');
