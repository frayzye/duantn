const express = require("express");
const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose");
const routes = require("./routes");
const cors = require('cors');
const bodyParser = require("body-parser");
dotenv.config();
 
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json())

routes(app);

mongoose.connect('mongodb://127.0.0.1:27017/datn')
.then(() =>{
    console.log('connection DB Successfylly')
})
.catch((err) =>{
    console.log(err)
}
)

app.listen(port, () => {
    console.log('Server is running in on port' + port);
})
