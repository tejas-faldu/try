const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

//current time data

app.get('/', (req, res) => {
  res.send('helloo');
});



app.listen(3333, () => console.log("server start"));