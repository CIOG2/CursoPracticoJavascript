function extraerLista() {
    const lista = document.getElementById("CALCULAR-LISTA").value;
    const datosLista = [];
    const listaNumeros = [];
        
    datosLista[length] = lista.split(",") 

    for (let i = 0; i < datosLista[0].length; i++) {
        if(isNaN(datosLista[0][i]) || datosLista[0][i] == ""){
            return 0;
        }
            else if(datosLista[0][i] >= 0){
                listaNumeros[i] = parseInt(datosLista[0][i]);
            }
                else{
                    return 0;
                }
    };

    return listaNumeros;

}




function calcularPromedio() {

    const lista = extraerLista();

    if (lista === 0) {
        swal('Ingresaste mal un dato', 'intentalo de nuevo :(', 'error');
    }
    else{
        const sumarLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );
        let promedio = sumarLista /lista.length;
        let promedio2 = promedio.toFixed(2)    
        swal('Promedio', 'El promedio es de: '+ promedio2, 'success')    
    }
}



function calcularMedia() {

    const lista = extraerLista();


    if(lista === 0){
        swal('Ingresaste mal un dato', 'intentalo de nuevo :(', 'error');
    }
    else{
        
        const listaOrdenada = lista.sort( function (a, b) {
            return a - b;
        }); 
    
        let mitad = parseInt(listaOrdenada.length / 2);
    
        if ((listaOrdenada.length % 2) === 0) {
            let mitad2 = mitad - 1;
            let mediana = (listaOrdenada[mitad] + listaOrdenada[mitad2]) / 2;
            
            swal('Media', 'La media es: '+ mediana, 'success');
        }
        else{        
            swal('Media', 'La media es: '+ listaOrdenada[mitad], 'success');
        }
    }
}




function calcularModa() {

    const lista = extraerLista();

    if(lista === 0){
        swal('Ingresaste mal un dato', 'intentalo de nuevo :(', 'error');
    }
    else{

        const listaContador = {};
        lista.map(
            function(elemento) {
                if (listaContador[elemento]) listaContador[elemento] += 1;
                else listaContador[elemento] = 1;
            }
        );
        const listArray = Object.entries(listaContador).sort( function (a, b) {
            return a[1] - b[1];
        }); 
        const moda = parseInt(listArray[listArray.length - 1]);
  
        swal('Moda', 'La moda es: '+ moda, 'success');
    }
}   
