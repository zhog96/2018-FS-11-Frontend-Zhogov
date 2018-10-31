const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

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

app.listen('8081');

/*if (Object.keys(req.files).length == 0) {
      return res.send('{"status":"ok"}');
    }
    var files = JSON.parse(JSON.stringify(req.files)).files;
    
    let sampleFile = files[0];
    console.log(sampleFile.mimetype, sampleFile.data);
	result = new Promise((resolve, reject) => {
      fs.appendFile(sampleFile.name, sampleFile.data, function (err) {
        if (err) reject(err);
        else resolve();
      });
    });*/
