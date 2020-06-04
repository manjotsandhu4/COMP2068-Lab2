const express = require('express');
const https = require('https');
const app = express();
 
app.get('/', (req, res) =>{
  
  https.get('https://insult.mattbas.org/api/insult', resp=>{

    resp.on('data', chunk => {
        res.send(`
        <http>
            <head><title>Oh Shit</title></head>
            <body>
                <p style="font-size: 24px; color: red">
                    ${chunk.toString()}
                </p>
            </body>
        </http>
    `);
    });
  });
});
 
app.listen(3000);