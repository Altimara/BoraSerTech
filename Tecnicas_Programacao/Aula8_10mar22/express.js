const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/'), (req,res) =>{
    res.send('I go it!)
}); 

app.use(bodyParser.json());
app.post('/', (req,res) => {
    const body = req.body;
    res.json({
        received_at: newDate().toISOString(),
        'message-from-body': body.message,
   
    })
});

app.listen(8080, () => {
    console.log(`escutando em http://localhost:8080`);
  });
