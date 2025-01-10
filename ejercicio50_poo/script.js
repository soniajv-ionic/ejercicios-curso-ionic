
class Punto {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }
}
        // Clase Rectángulo
        class Rectangulo {
            constructor(p1, p2, p3, p4) {
                this.p1 = p1; // Primer punto (x1, y1)
                this.p2 = p2; // Segundo punto (x2, y2)
                this.p3 = p3; // Tercer punto (x3, y3)
                this.p4 = p4; // Cuarto punto (x4, y4)
            }

            // Método para dibujar el rectángulo
            dibujar(ctx) {
                // Se asume que los puntos están dados en orden para formar un rectángulo
                ctx.beginPath();
                ctx.moveTo(this.p1.x, this.p1.y); // Inicia en el primer punto
                ctx.lineTo(this.p2.x, this.p2.y); // Dibuja la línea hacia el segundo punto
                ctx.lineTo(this.p3.x, this.p3.y); // Dibuja la línea hacia el tercer punto
                ctx.lineTo(this.p4.x, this.p4.y); // Dibuja la línea hacia el cuarto punto
                ctx.closePath(); // Cierra el camino para formar el rectángulo
                ctx.stroke(); // Dibuja el contorno del rectángulo
            }

            calcularArea() {
                return Math.abs((this.p1.x - this.p2.x) * (this.p1.y - this.p4.y));
            }
        }

        // Crear el canvas y el contexto
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");

        // Definir los puntos (cada punto tiene propiedades x, y)
        const punto1 = new Punto(100, 100); // Esquina superior izquierda
        const punto2 = new Punto(500, 100); // Esquina superior derecha
        const punto3 = new Punto(500, 300); // Esquina inferior derecha
        const punto4 = new Punto(100, 300); // Esquina inferior izquierda

        // Crear el objeto rectángulo con los puntos definidos
        const miRectangulo = new Rectangulo(punto1, punto2, punto3, punto4);

        // Dibujar el rectángulo en el canvas
        miRectangulo.dibujar(ctx);


        const divInfo = document.querySelector(".info");
        const area = miRectangulo.calcularArea();
        divInfo.textContent = `Área del rectángulo: ${area}`;