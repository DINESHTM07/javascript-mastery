const movies = [
  { title: "Inception", rating: 8.8, year: 2010 },
  { title: "Interstellar", rating: 8.6, year: 2014 },
  { title: "Tenet", rating: 7.4, year: 2020 },
  { title: "The Dark Knight", rating: 9.0, year: 2008 },
  { title: "Dunkrick", rating: 7.9, year: 2017 },
];

function listTitles() {
  movies.forEach((movie) => {
    console.log(movie.title);
  });
}

function listRatings() {
  const ratings = movies.map((movie) => movie.rating);
  console.log("Ratings:", ratings);
}

function goodMovies() {
  const niceMovies = movies.filter((movie) => movie.rating >= 8);
  console.log(niceMovies);
}

function averageRating() {
  const avg =
    movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
  console.log("Average Rating:", avg.toFixed(2));
}

function allGood() {
  const allgood = movies.every((movie) => movie.rating >= 7);
  console.log("All movies rating > 7", allgood);
}

function from2020() {
  const has2020 = movies.some((movie) => movie.year === 2020);
  console.log("Movies from 2020:", has2020);
}

listTitles();
listRatings();
goodMovies();
averageRating();
allGood();
from2020();