// Var
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Selecciona el elemento h1 con la clase "titulo"
const titulo = document.querySelector("h1.titulo");

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un object con la busqueda
const dataSearch = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''

}


// Events
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los automoviles al cargar
    // LLena los opciones del year
    llenarSelect();

})


marca.addEventListener('change', e => {
    dataSearch.marca = e.target.value;

    filtrarAuto();
})

year.addEventListener('change', e => {
    dataSearch.year = parseInt(e.target.value);

    filtrarAuto();
})
minimo.addEventListener('change', e => {
    dataSearch.minimo = parseInt(e.target.value);
 
    filtrarAuto();
})
maximo.addEventListener('change', e => {
    dataSearch.maximo = parseInt(e.target.value);
    filtrarAuto();
})
puertas.addEventListener('change', e => {
    dataSearch.puertas = parseInt(e.target.value);
    filtrarAuto();
})
transmision.addEventListener('change', e => {
    dataSearch.transmision = e.target.value;
    filtrarAuto();
})
color.addEventListener('change', e => {
    dataSearch.color = e.target.value;
    filtrarAuto();
})



// Functions
function mostrarAutos(autos) {
    limpiarHTML(); // vaciar el HTML previo

    autos.forEach( auto => {

        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p')
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Trasmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHTML);
    })

}

function limpiarHTML(){
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Genera los years del select
function llenarSelect() {
    for(let i = max; i > min; i--){
        const option = document.createElement('option'); // Crea la etiqueta <option>
        option.value = i; // Su valor real
        option.textContent = i; // El contenido del option
        year.appendChild(option); // Agrega cada año de forma descedente en la etiqueta <select>
    }
}

function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMin ).filter( filtrarMax ).filter( filtrarPue ).filter( filtrarTrasm ).filter( filtrarColor );

    console.log(resultado);
    // mostrarAutos(resultado);

    if( resultado.length ){
        mostrarAutos(resultado);
        const nuevoTitulo = document.createElement('h1');
        nuevoTitulo.classList.add('titulo')
        nuevoTitulo.textContent = 'TITULO';
        document.body.dispatchEvent.appendChild(nuevoTitulo);
    }else{
        noResultado();
        titulo.remove();
    }


}

function noResultado(){

    limpiarHTML()
    const noResultado = document.createElement('div');
    noResultado.textContent = 'No hay resultado, filtra otras opciones';
    noResultado.classList.add('alerta', 'error');

    // Inyectar el mesanje sin resultados
    resultado.appendChild(noResultado);
}

// function limpiarHMTL (){
//     // Forma lenta
//     // contenerdorCarrito.innerHTML = '';
//     // titulo.removeChild(titulo.firstChild);

//     while(resultado.firstChild) {
//     resultado.removeChild(resultado.firstChild)
//     }
// }

function filtrarMarca(auto){
    const { marca } = dataSearch;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const { year } = dataSearch;
    if(year){
        return auto.year === year;
    }
    return auto;
}

function filtrarMin(auto) {
    const { minimo } = dataSearch;

    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMax(auto) {
    const { maximo } = dataSearch;

    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPue(auto){
    const { puertas } = dataSearch;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTrasm(auto){
    const { transmision } = dataSearch;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const { color } = dataSearch;
    if(color){
        return auto.color === color;
    }
    return auto;
}