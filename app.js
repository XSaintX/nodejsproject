const express=require('express');
const http=require('http');
const helmet=require('helmet');
var compression=require('compression');
require('dotenv').config();
const {v4: uuidv4}=require('uuid');

const app=express();
app.use(helmet());
app.use(compression());

const serverHttp=http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
//console.log(process.env.HTTP_PORT)

app.use(express.static('./public'));

app.get('/api/get-uuid', (req,res) => {
    const newUuid = uuidv4();
    res.send(`Generated UUID: ${newUuid}`);
    // const newUuid = uuidv4(); // Generate a new UUID
    // res.json({ uuid: newUuid }); // Send the UUID as a JSON response
    //res.send(uuidv4());
    //res.send("Hola mundo");
});