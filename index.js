class Usuario {
    
    constructor (nombre,apellido,libros,mascotas)
    {   this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }


    getFullName(){
        return `el nombre completo es: ${this.nombre} ${this.apellido}`
        
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);

    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre,autor){
        this.libros.push({nombre:nombre ,autor:autor})
    }

    getBookNames(){
        const nombresLibros = [];

       this.libros.forEach(libro => {
        nombresLibros.push(libro.nombre);
        });

        return nombresLibros
    }

}

let usuario = new Usuario ("Juan Cruz", "Dieguez", [], [])

//LLamo a nombre completo
console.log(usuario.getFullName());


//Agrego una mascota nueva
usuario.addMascota("gato")
usuario.addMascota("perro")
console.log("Mis mascotas nuevass son: ", usuario.mascotas);


//Retorna la cantidad de mascotas que tiene el usuario
usuario.countMascotas();
console.log("La cantidad de mascotas nuevas son:", usuario.countMascotas());

//Agrego un libro
usuario.addBook('El señor de las moscas', 'William Golding');
usuario.addBook('Fundacion', 'Isaac Asimov');
console.log("Los nombres de los libros son: ", usuario.getBookNames());