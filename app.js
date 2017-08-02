const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express();


// app.use((req, res, next) => {
//   console.log('requested', req.method, req.path);
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.get('/news', (req, res, next) => {
  res.send('Breaking News!');
})

app.listen(3000, () => {
  console.log('server started!')
})
