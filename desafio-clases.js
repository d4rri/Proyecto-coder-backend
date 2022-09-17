class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
       console.log (`mi nombre completo es:${this.nombre} ${this.apellido}`)
    } 
    
    addMascota(nombreMascota) {
        const newMascota = nombreMascota;
        this.mascotas.push(newMascota);
        console.log(this.mascotas)
    }
    
    countMascotas() {          
        console.log(`La cantidad de mascotas que tengo son: ${this.mascotas.length}`)
    }

    addBook(nombre, autor) {
        const newBook = {nombre: nombre, autor: autor};
        console.log(newBook);
        this.libros.push(newBook);
    }
    
    getBookNames () {
        this.libros.map(function(element){
        console.log(`${element.nombre}`);
       })
    }
}

const usuario1 = new Usuario("Ricky", "Fort", [{nombre:"Rayuela", autor:"Cortazar"}], ["melon","bambi"]);
usuario1.getFullName();
usuario1.addMascota("orozco");
usuario1.countMascotas();
usuario1.addBook("Las venas abiertas", "galeano");
usuario1.getBookNames();