const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const data = require('./movies.js');
const moviesList = require('./views/moviesList');
const movieDetails = require('./views/movieDetails');
console.log(movieDetails);

//to serve static files from public folder:
const path = require('path');
const staticMiddleware = express.static(path.join(__dirname, 'public'));
app.use(staticMiddleware);
//this is the main url of the application, it will render the movies.
app.get('/', (req, res) => {
  const movies = data.moviesList();
  res.send(moviesList.moviesList(movies));
});

//dynamic route for each movie in the list:
app.get('/movie/:id', (req, res) => {
  const id = req.params.id;
  const movie = data.find(id);
  res.send(movieDetails.movieDetails(movie));
});

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
