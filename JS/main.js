(function () {

    class Persona {
        nombre
        apellido
        fecha_nac
        cedula
        edad
        constructor(nombre, apellido, fecha_nac, cedula) {
            this.nombre = nombre
            this.apellido = apellido
            this.fecha_nac = fecha_nac
            this.cedula = cedula
            this.edad = this.obtenerEdad()
        }

        obtenerEdad() {
            const fechaActual = new Date();
            const fechaNacimiento = new Date(this.fecha_nac)
            const diferencia = fechaActual - fechaNacimiento;
            const edad = Math.floor(diferencia / 1000 / 60 / 60 / 24 / 365);
            //se obtiene la cantidad de milésimas que hay en un año
            return edad
        }

        verificarCumpleanos() {
            const diaHoy = new Date().getDate()
            const mesHoy = new Date().getMonth() + 1
            const diaNac = new Date(this.fecha_nac).getDate() + 1
            const mesNac = new Date(this.fecha_nac).getMonth() + 1
            if (diaHoy == diaNac && mesHoy == mesNac) {
                return 'si'
            } else {
                return 'no'
            }
        }

        mostrarPersona() {
            const item__persona = document.createElement('div')
            item__persona.classList.add('item__persona')
            const item__nombre = document.createElement('div')
            item__nombre.textContent = `${this.nombre} ${this.apellido}`
            const item__cumpleanos = document.createElement('div')
            item__cumpleanos.textContent = this.verificarCumpleanos()
            item__persona.append(item__nombre, item__cumpleanos)
            return item__persona
        }
    }

    const personas = []
    registro.addEventListener('click', (event) => {
        event.preventDefault()
        if (event.target.id == 'registrar') {
            if (nombre.value == '' || apellido.value == '' || fecha.value == '' || cedula.value == '') {
                alert('no deben haber campos vacios')
            } else {
                const persona = new Persona(nombre.value, apellido.value, fecha.value, cedula.value)
                personas.push(persona)
                listado.append(persona.mostrarPersona())
                nombre.value = '', apellido.value = '', fecha.value = '', cedula.value = ''
            }
        }
    })
    buscarCC.addEventListener('click', () => {
        const personaBuscada = personas.filter(persona =>
            persona.cedula == cc_buscada.value) //se busca la persona que tiene la cédula indicada
        console.log(personaBuscada)
        if (personaBuscada.length > 0) { //si el filter devolvió algo, el arreglo tiene una longitud mayor que 0
            localStorage.setItem('datos', JSON.stringify(personaBuscada))
            setTimeout(() => { location.assign('../HTML/tarjetaUsuario.html') }, 1000)
            //cambié location.href por location.assign
        } else {
            alert('No existe')
        }
    })
})()


