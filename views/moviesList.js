function moviesList(movies) {
  const allMovies = movies
    .map(
      (movie) =>
        `<div>
          <ul class="unorder-list">
           <li><a href='/movie/${movie.id}'>The title of the movie: ${movie.title}</a></li>
            <li>The id of the movie: ${movie.id}</li>
            <li>The original language of the movie: ${movie.original_language}</li>
            <li>The release date of the movie: ${movie.release_date}</li>
          </ul>
      </div>`
    )
    .join('');

  return `<!DOCTYPE html>
    <html>
    <head>
      <title>Movies</title>  
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
        <header class="title"><img src="/images/movies.jpg"/>Movies List</header>
        ${allMovies}
    </body>
  </html>`;
}

module.exports = { moviesList: moviesList };
