const express = require('express');
const morgan = require('morgan');
const app = express();


// app.use((req, res, next) => {
//   console.log('requested', req.method, req.path);
// });

app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('Home Page!');
})

app.get('/news', (req, res, next) => {
  res.send('Breaking News!');
})

app.listen(3000, () => {
  console.log('server started!')
})
