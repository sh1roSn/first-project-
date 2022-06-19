"use strict"

const numberOfFilms = +prompt('How many movies did you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const title = prompt('One of your last watched movies?', ''),
      review = prompt('How would you rate it?', ''),
      title2 = prompt('One of your last watched movies?', ''),
      review2 = prompt('How would you rate it?', '');

personalMovieDB.movies[title] = review;
personalMovieDB.movies[title2] = review2;

console.log(personalMovieDB);
