const movieDetails = (movie) => {
  return `<!DOCTYPE html>
    <html>
    <head>
      <title>Movie Detail</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
     <header class="title"><img src="/images/movies.jpg"/>Movie Detail</header>
            <ul>
              <li>The movie overview: ${movie.overview}</li>
              <li>Movie Popularity: ${movie.popularity}</li>
              <li>${movie.vote_count}<li>
            <ul>
    </body>
  </html>`;
};

//we are exporting the object not the function
// module.export = { postDetails: postDetails }; //key:value

//this will import the function directly
module.exports = { movieDetails: movieDetails };
