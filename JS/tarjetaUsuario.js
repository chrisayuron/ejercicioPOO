(function(){
const datos=JSON.parse(localStorage.getItem('datos'))
console.log(datos)
document.querySelector('.container__datos__nombre').textContent=datos[0].nombre
document.querySelector('.container__datos__cumpleanos').textContent=datos[0].fecha_nac
document.querySelector('.container__datos__informe').textContent=verificarCumpleaños()

function verificarCumpleaños(){
            const diaHoy=new Date().getDate()
            const mesHoy=new Date().getMonth()+1
            const diaNac=new Date(datos[0].fecha_nac).getDate()+1
            const mesNac=new Date(datos[0].fecha_nac).getMonth()+1
            const anoNac=new Date(datos[0].fecha_nac).getFullYear()
            if(diaHoy==diaNac && mesHoy==mesNac){
                return 'Feliz Cumpleaños'
            } else{
                    const anoActual=new Date().getFullYear()
                    const cumple = new Date(anoActual, mesNac-1, diaNac);
                    const hoy = new Date();
                    let falta = Math.ceil((cumple.getTime() - hoy.getTime()) / 86400000);

                    if (falta < 0) {
                    falta += 365;
                    }
                return `falta ${falta} días para tu cumple`
            }
        }

        document.querySelector('.btn__volver').addEventListener('click',()=>{
            location.assign('../index.html')
        })
})()
