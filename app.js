const express = require('express');
const { PORT = 3000 } = process.env;

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();


app.use(express.static(__dirname + '/public'));
app.use('/', usersRouter);
app.use('/', cardsRouter);
app.get('*', (req, res) => {
  res.status(404);
  res.send( { message: "Запрашиваемый ресурс не найден" } );
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});