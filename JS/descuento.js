const calDescuento = (precio, porcentaje) => total = (precio / 100) * porcentaje;  
const precioTotal = (precio, porcentaje) => descuento = (precio / 100) * (100 - porcentaje);



function realizarDescuento() {
    const precio = document.getElementById("PRECIO-DEL-PRODUCTO").value;
    const porcentaje = document.getElementById("DESCUENTO").value;

    if(porcentaje == false && precio == false){
        swal('No ingresaste ningun dato', 'intentalo de nuevo :(', 'error')
    }
    else if(precio <= 1){
        if(porcentaje <= 1 || porcentaje > 100){
            swal('Ingresaste mal el precio y el descuento', 'intentalo de nuevo :(', 'error')
        }
        else{
            swal('Ingresaste mal el precio', 'intentalo de nuevo :(', 'error')
        }   
    }
    else if(porcentaje < 1 || porcentaje > 100){
        if(precio < 1){
            swal('Ingresaste mal el precio y el descuento', 'intentalo de nuevo :(', 'error')
        }
        else{
            swal('Ingresaste mal el descuento', 'intentalo de nuevo :(', 'error')
        }   
    }
    else{
        const descuento = calDescuento(precio, porcentaje)
        const total = precioTotal(precio, porcentaje)
    
        this.total = total.toFixed(2)
        this.descuento = descuento.toFixed(2)
    
        swal('Descuento de ' + this.descuento +'$', 'Precio Total de ' + this.total + '$ con un ' + porcentaje + '% el descuento ', 'success');    
    }

}