//Set up Express
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3001;
const app = express();
const compiler = webpack(config);

//Middleware
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// wenn auf rootdirectory zugegriffen wird. Wie soll reagiert werden(req(uest), res(ponse))
app.get('/', function(req, res) {
    //res.sendFile: ein File schicken ausgehend vom aktuellen Ordner alias __dirname + path ../src/index.html
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if(err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
