// Función para mostrar las películas de una categoría
function showCategory(category) {
    // Obtener todos los bloques de películas
    const movies = document.querySelectorAll('.movie');

    // Mostrar todas las películas cuando se selecciona 'all'
    if (category === 'all') {
        movies.forEach(movie => {
            movie.style.display = 'block';
        });
    } else {
        // Ocultar todas las películas
        movies.forEach(movie => {
            movie.style.display = 'none';
        });

        // Mostrar solo las películas de la categoría seleccionada
        const selectedMovies = document.querySelectorAll('.' + category);
        selectedMovies.forEach(movie => {
            movie.style.display = 'block';
        });
    }
}


document.querySelector('#comedia-btn').addEventListener('click', () => {
    showCategory('comedia');
    document.querySelector('#category').value = 'comedia';
});

document.querySelector('#drama-btn').addEventListener('click', () => {
    showCategory('drama');
    document.querySelector('#category').value = 'drama';
});

document.querySelector('#terror-btn').addEventListener('click', () => {
    showCategory('terror');
    document.querySelector('#category').value = 'terror';
});

document.querySelector('#all-btn').addEventListener('click', () => {
    showCategory('all');
    document.querySelector('#category').value = 'all';
});

document.querySelector('#category').addEventListener('change', () => {
    let categoryMovie = document.querySelector("#category").value; 
    showCategory(categoryMovie);
});
