class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
    despedirse() {
        console.log(`Adiós, soy ${this.nombre}`);
    }
}

class Enemigo extends Persona {
    constructor(nombre, edad, tipo, ataque) {
        super(nombre, edad);
        this.tipo = tipo;
        this.ataque = ataque;
    }
    atacar() {
        console.log(`El enemigo ${this.nombre} te ataca`);
    }
}

let enemigo1 = new Enemigo("Paco", 30, "Jefe", 100);
enemigo1.atacar(); // El enemigo Paco te ataca