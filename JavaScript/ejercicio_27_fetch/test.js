const URL = 'https://fpaniaguaangular.github.io/gamecovers/assets/gamecovers/gamecovers.json';

function processData(data){
//    console.log(data);
//    data.forEach(element => {
//        console.log(element.name);
//    });
    // const consolasVerticales = data.filter((consola)=> {
    //     return consola.orientation === 'portrait'
    // });
    // consolasVerticales.forEach(consola => {
    //     console.log(consola.name);
    // });

    const consolasPlayStation = data.filter(element => {
        return element.name.includes('PlayStation') || element.name.includes('PS');
    });
    consolasPlayStation.forEach(consola => {
             console.log(consola.name);
     });

     const consolas = data.map(consola => {
        return `delete ${consola.name}`;
     }

     );
     console.log(consolas);

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

doRequest(URL);