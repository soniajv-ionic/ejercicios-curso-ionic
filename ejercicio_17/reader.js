import fs from 'node:fs';//Require package.json

/*
1. Leer un fichero
2. Reemplazar una palabra por otra
3. Mostrar el resultado
*/

function readFile(nameFile){
    const data = fs.readFileSync(nameFile, 'utf8');
    return data;
}

function replaceWords(searchWord, replaceWord, originalText) {
/*    const regexp = new RegExp('\\b${searchword}\\b','gi');
    const data = originalText.replaceAll(regexp, replaceWord);
    return data; */
    return originalText.replaceAll(new RegExp(`\\b${searchWord}\\b`, 'gi'), replaceWord);
}


try {
    // const data = fs.readFileSync('./post.txt', 'utf8');
    //const data_censured = data.replaceAll('gilipollas', '**********');
    //const data_censured = data.replaceAll(/\bgilipollas\b/gi, '**********');
    const data = readFile('./post.txt');
    const data_censured = replaceWords('gilipollas', '**********', data);
    console.log(data_censured);
} catch (err) {
    console.error(err);
}
