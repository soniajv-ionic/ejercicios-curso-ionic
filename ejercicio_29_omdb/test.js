const API_KEY = 'ce56ccb0';
const COMMON_REQUEST = `http://www.omdbapi.com/?apikey=${API_KEY}&`;


// Ejercicio1
// doRequest(COMMON_REQUEST + 't=Batman')
// Mostrar por pantalla el titulo, director y los actores (por separado, hay que usar split)

// Ejercicio2
// doRequest(COMMON_REQUEST + 's=Batman')
// Mostrar el titulo y el año de las peliculas estrenasa en el año 2000 y sucesivos


// function processData(data){
//     console.log(data.Title);
//     console.log(data.Director);
//     console.log(data.Actors.split());
// }

function processData(data) {
    console.log(data.Search.forEach(element => {
       if (element.Year >= 2000) {
        console.log(`El titulo es ${element.Title} y el año ${element.Year}`);
        }       
    }));
}

function doRequest(url) {
    fetch(url)
        .then((response) => {
            //if (!response.ok) {
            if (response.status != 200) { // 200 es OK
                throw new Error("Network response was not ok");
            }
            // return response.text(); // Si se esta obteniendo texto
            return response.json(); // Si se esta obteniendo json
        })
        .then((data) => {
            
            processData(data);
        })
        .catch((error) => console.error("Fetch error:", error)); // In case of an error, it
}

//doRequest(URL);

//doRequest(COMMON_REQUEST + 't=Batman')

doRequest(COMMON_REQUEST + 's=Star Wars')
