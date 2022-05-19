"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    coutn: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов', 'Сумерки'),
      b = prompt('На сколько оцените его?', '-100500'),
      c = prompt('Один из последних просмотренных фильмов', 'Сумерки'),
      d = prompt('На сколько оцените его?', '-100500');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;



console.log(personalMovieDB);




