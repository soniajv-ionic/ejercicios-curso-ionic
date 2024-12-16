const movie1 = {
    title : 'Hatari!',
    year : 1962,
    movieLength : 157
}

const movie2 = {
    title : 'Deadpool & Wolverine',
    year : 2024,
    movieLength : 128
}

const movie3 = {
    title : 'Wicked: Part I',
    year : 2024,
    movieLength : 160
}

const movie4 = {
    title : 'Back to the Future',
    year : 1985,
    movieLength : 116
}

let movies = [movie1, movie2, movie3, movie4];


console.log('-------- YEAR --------');
// Order by year
movies.sort((m1, m2) =>{
    return m1.year - m2.year;
}).forEach(movie => {
    console.log(movie.title, movie.year, movie.movieLength);
});

console.log('-------- MOVIE LENGTH --------');
// order by movie length
movies.sort((m1, m2) =>{
    return m1.movieLength - m2.movieLength;
}).forEach(movie => {
    console.log(movie.title, movie.year, movie.movieLength);
});

console.log('-------- MOVIE LENGTH AND YEAR --------');
movies.sort((m1, m2) =>{
    if(movie1.year == movie2.year) {
        return movie1.year - movie2.year;
    }
    return m1.movieLength - m2.movieLength;
}).forEach(movie => {

    console.log(movie.title, movie.year, movie.movieLength);
});