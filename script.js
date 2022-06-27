 'use strict';

 let numberOfFilms;

 function start() {
   numberOfFilms = +prompt('How many movies did you watched?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
     numberOfFilms = +prompt('How many movies did you watched?', '');
   }
 }
 start();

 const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
 };

 function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const title = prompt('One of your last watched movies?', ''),
      review = prompt('How would you rate it?', '');
    if (title != null && review != null && title != '' && review != '' && title.length < 50) {
      personalMovieDB.movies[title] = review;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}
  rememberMyFilms();

  function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log('you watched not enough movies');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('you are an average movie fan');
    } else if (personalMovieDB.count >= 30) {
      console.log('you are a real fan');
    } else {
      console.log('error!!!');
    }
  }
    detectPersonalLevel();

    function showMyDB(hidden) {
      if (!hidden) {
        console.log(personalMovieDB);
      }

    }

    function writeYourGenres() {
      for (let i = 0; i < 3; i++) {
        const favouriteGenre = prompt(`You ${i} favourite genre?`, '');
        if (favouriteGenre !== null && favouriteGenre !== ''){
          personalMovieDB.genres[i - 1] = favouriteGenre;
          console.log('done');
        } else {
          console.log('error');
          i--;
        }
      }
    }

    writeYourGenres();

    showMyDB(personalMovieDB.privat);