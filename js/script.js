"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// for (let i = 0; i < numberOfFilms; i++) {
//     const a = prompt('Один из последних просмотренных фильмов', 'Сумерки'),
//           b = prompt('На сколько оцените его?', '-100500');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('Done');
//         } else {
//             console.log('Error');
//             i--;
//         }          
// }


// let i = 0;
// while (i < numberOfFilms) {
//     const a = prompt('Один из последних просмотренных фильмов', 'Сумерки'),
//           b = prompt('На сколько оцените его?', '-100500');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++;
//         console.log('Done');
//     } else {
//         console.log('Error');
//     }      
// }




if (personalMovieDB.count < 10) {
    alert("Просмотрено давольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30){
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);

