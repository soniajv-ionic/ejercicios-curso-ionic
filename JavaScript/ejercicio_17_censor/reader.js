import fs from 'node:fs';//Require package.json

try {
    const data = fs.readFileSync('./quijote.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}
