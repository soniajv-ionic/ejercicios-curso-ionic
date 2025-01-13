class Vehiculo {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }
    arrancar() {
        console.log(`El vehículo ${this.nombre} esta arrancando`);
    }
}

class Automovil extends Vehiculo {
    constructor(nombre, color, marca, modelo) {
        super(nombre, color);
        this.marca = marca;
        this.modelo = modelo;
    }
    arrancar() {
        console.log(`Soy un automovil de nombre ${this.nombre} y estoy arrancando`);
    }
}

class Barco extends Vehiculo {
    constructor(nombre, color, eslora, manga) { // eslora: longitud de un barco, manga: ancho de un barco
          super(nombre, color);
        this.eslora = eslora;
        this.manga = manga;
    }
    arrancar() {
        super.arrancar();
        console.log(`Soy un barco de nombre ${this.nombre} y estoy arrancando`);
    }
}

let auto1 = new Automovil("Auto1", "Rojo", "Toyota", "Corolla");
let barco1 = new Barco("Barco1", "Azul", 100, 20);

console.log(auto1 instanceof Vehiculo); // true
console.log(auto1 instanceof Automovil); // true
console.log(barco1 instanceof Vehiculo); // true
console.log(barco1 instanceof Barco); // true

auto1.arrancar(); // Soy un automovil de nombre Auto1 y estoy arrancando
barco1.arrancar(); // Soy un barco de nombre Barco1 y estoy arrancando
