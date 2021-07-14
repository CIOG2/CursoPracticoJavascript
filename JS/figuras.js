//``
const PI = Math.PI;

const PerimetroCuadrado = (lado) => perimetro = lado * 4;
const AreaCuadrado = (lado) => area = lado * lado;


const PerimetroTriangulo = (lado1, lado2, base) => perimetro = lado1 + lado2 + base * 1;
const AreaTriangulo = (base, altura) => area = (base * altura) / 2;


const PerimetroCirculo = (radio) => perimetro = (radio * 2) * PI; 
const AreaCirculo = (radio) => area = (radio * radio) * PI;



function calcularCuadrado() {
    const lado = document.getElementById("CALCULAR-CUADRADO").value;
    
    if(lado){
        const area = AreaCuadrado(lado);
        const perimetro = PerimetroCuadrado(lado);
        const area2 = area.toFixed(2)
        const perimetro2 = perimetro.toFixed(2)

        swal('Perimetro: ' + perimetro2 + ' m.', 'area: '+ area2 + " Metros cuadrados", 'success')    
    }
    else{
        swal('Ingresaste mal un dato', 'intentalo de nuevo :(', 'error')
    }
}

function calcularTriangulo() {
    const lado1 = document.getElementById("CALCULAR-LADO1").value;
    const lado2 = document.getElementById("CALCULAR-LADO2").value;
    const base = document.getElementById("CALCULAR-BASE").value;
    const altura = document.getElementById("CALCULAR-ALTURA").value;
    
    const perimetro = PerimetroTriangulo(parseInt(lado1), parseInt(lado2), parseInt(base));

    if(lado1 && lado2 && base && altura){
        const area = AreaTriangulo(base, altura);
    
        swal('Perimetro: ' + perimetro + ' m.', 'area: '+ area + " Metros cuadrados", 'success');
    }
    else if(lado1 && lado2 && base){
    
        swal('Perimetro: ' + perimetro + ' m.', 'Si quiere saber el area ingrese la altura', 'success');
    }
    else{
        swal('Ingresaste mal un dato', 'intentalo de nuevo :(', 'error')
    }

}

function calcularCirculo() {
    const radio = document.getElementById("CALCULAR-CIRCULO").value;


    if(radio){
        const area = AreaCirculo(radio);
        const perimetro = PerimetroCirculo(radio);
        const area2 = area.toFixed(2)
        const perimetro2 = perimetro.toFixed(2)


        swal('Perimetro: ' + perimetro2 + ' m.', 'area: '+ area2 + " Metros cuadrados", 'success')    
    }
    else{
        swal('Ingresaste mal un dato', 'intentalo de nuevo :(', 'error')
    }
}