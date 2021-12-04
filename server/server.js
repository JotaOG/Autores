const express = require ('express');
const cors = require ('cors');
const app = express();
require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/autores.routes')(app);
app.listen(9000, () => { console.log('listening at Port 9000')})
