const express = require('express');
const app = express();
const request = require('request');

app.use(express.static(__dirname));
app.set('views', "views");
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));

// Route the user to the index file when / is visited
app.get('/', (req, res)=> { //makes the callback function an async function
    res.render('../index');    
});

//Start the server on port ...
app.listen(app.get('port'), ()=> {
    console.log("Node app is running at localhost:" + app.get('port'))
});