const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();

app.use(cors());
app.use(fileUpload());

app.post('/message', function(req, res) {
  for(let i = 0; i < 1000000000; i++){}; //Slow backend simulator
  var result = Promise.resolve();
  if (typeof req.headers.origin === 'string') {
    res.set('Access-Control-Allow-Origin', req.headers.origin);
  }
  if (req.files != null) {
    if (Object.keys(req.files.files).length == 0) {
      return res.send('{"status":"ok"}');
    }
    for(let i = 0; i < Object.keys(req.files.files).length; i++) {
      let sampleFile = req.files.files[i];
      console.log(sampleFile);
      console.log(sampleFile.mimetype, sampleFile.md5());
	  result = new Promise((resolve, reject) => {
        sampleFile.mv(sampleFile.name, function (err) {
          if (err) reject(err);
		  else resolve();
	    });
      });
      result
        .then(() => {})
        .catch((err) => res.status(500).send(err));
    }
  }
  result
    .then(() => res.send('{"status":"ok"}'))
    .catch((err) => res.status(500).send(err));

});

app.post('/ping', function(req, res) {
    let result = Promise.resolve()
    
    if (typeof req.headers.origin === 'string') {
        res.set('Access-Control-Allow-Origin', req.headers.origin);
    }

    result
    .then(() => res.send('pong'))
    .catch((err) => res.status(500).send(err));
});

const token_simulator = 'eflgremhoiniundfgdiohsiorphnstiop'

app.post('/auth', function(req, res) {
    let result = Promise.resolve()
    
    if (typeof req.headers.origin === 'string') {
        res.set('Access-Control-Allow-Origin', req.headers.origin);
    }

    console.log(req.body)

    if((req.body.password === 'qwerty') && (req.body.login === 'fromidorka')) {
        result
        .then(() => res.send(token_simulator))
        .catch((err) => res.status(500).send(err));
    } else {
        result
        .then(() => res.status(400).send('Wrong login or password'))
        .catch((err) => res.status(500).send(err));
    }
});

app.post('/loadChats', function(req, res) {
    let result = Promise.resolve()
    
    if (typeof req.headers.origin === 'string') {
        res.set('Access-Control-Allow-Origin', req.headers.origin);
    }
    
    if(req.body.token !== token_simulator) {
        res.status(400).send('Wrong login or password')
    }    

    res.send('OK');
});

app.listen('8081');


