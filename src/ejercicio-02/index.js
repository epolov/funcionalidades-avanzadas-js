// Escribe tu código aquí: EJERCICIO 02

const persona = {
    name: 'Eva',
    greet: function () {
        console.log(`Hola soy, ${this.name}`)
    }
}

persona.greet()

const persona2 = {
    name: 'Manuel',
    greet: () => {
        console.log(`Hola soy ${this.name}`)
    }
}

persona2.greet()