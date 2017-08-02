const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const app = express();


// app.use((req, res, next) => {
//   console.log('requested', req.method, req.path);
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.use(morgan('dev'));

app.use('/', routes);

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('server started!')
})
