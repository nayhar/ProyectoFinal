let cantFifa2023 = cantAmongUs = cantNBA2K2023 = cantSuperMarioMaker = cantMarioOddisey = cantLuigis = cantGTA = cantRoketLeaegue = cantHogwarsLegacy = cantPubg = 0;
let totalFifa2023 = totalAmongUs = totalNBA2K2023 = totalSuperMarioMaker = totalMarioOddisey = totalLuigis = totalGTA = totalRoketLeague = totalHogwartsLegacy = totalPubg = 0;
let subtotalCompra;

const calcularPrecio = (cantidad, precio) => {
    return cantidad * precio;
}

const calcularIva = (subtotalCompra) => {
    return (subtotalCompra * 0.21);
}

const validarCantidad = (cantidad) => {
    if (Number.isNaN(parseInt(cantidad))) {
        return 0;
    } else {
        return parseInt(cantidad);
    }
}
do {
    switch (parseInt(prompt(`**Compra de juegos** 
Ingrese el numero de la opcion del JUEGO que desea agregar a su compra.
    1. Fifa 2023 ($ 12000)     
    2. Among Us ($ 500)
    3. NBA 2k 2023 ($ 8999)
    4. Super Mario Maker ($ 6999)
    5. Mario Oddisey ($ 7999)
    6. Luigis Mansion ($ 8000)
    7. GTA V ($ 5000)
    8. Roket League ($ 1500)
    9. Hogwarts Legacy ($ 10000) 
    10. Pubg ($ 2000)`))) {

        case 1:
            cantFifa2023 += (validarCantidad(prompt(`Ingrese la cantidad que desee comprar:`)));
            totalFifa2023 = calcularPrecio(cantFifa2023, 12000);
            break;

        case 2:
            cantAmongUs += (validarCantidad(prompt(`Ingrese la cantidad que desea comprar:`)));
            totalAmongUs = calcularPrecio(cantAmongUs, 500);
            break;

        case 3:
            cantNBA2K2023 += (validarCantidad(prompt(`Ingrese la cantidad que desea comprar:`)));
            totalNBA2K2023 = calcularPrecio(cantNBA2K2023, 8999);
            break;

        case 4:
            cantSuperMarioMaker += (validarCantidad(prompt(`Ingrese la cantidad que desea comprar:`)));
            totalSuperMarioMaker = calcularPrecio(cantSuperMarioMaker, 6999);
            break;

        case 5:
            cantMarioOddisey += (validarCantidad(prompt(`Ingrese la cantidad que desee comprar:`)));
            totalMarioOddisey = calcularPrecio(cantMarioOddisey, 7999);
            break;

        case 6:
            cantLuigis += (validarCantidad(prompt(`Ingrese la cantidad que desee comprar:`)));
            totalLuigis = calcularPrecio(cantLuigis, 8000);
            break;

        case 7:
            cantGTA += (validarCantidad(prompt(`Ingrese la cantidad que desee comprar:`)));
            totalGTA = calcularPrecio(cantGTA, 5000);
            break;

        case 8:
            cantRoketLeaegue += (validarCantidad(prompt(`Ingrese la cantidad que desee comprar:`)));
            totalRoketLeague = calcularPrecio(cantRoketLeaegue, 1500);
            break;

        case 9:
            cantHogwarsLegacy += (validarCantidad(prompt(`Ingrese la cantidad que desee comprar:`)));
            totalHogwartsLegacy = calcularPrecio(cantHogwarsLegacy, 10000);
            break;

        case 10:
            cantPubg += (validarCantidad(prompt(`Ingrese la cantidad que desee comprar:`)));
            totalPubg = calcularPrecio(cantPubg, 2000);
            break;

        default:
            alert('El dato ingresado no es valido o no corresponde a ningun articulo en la store');
            break;
    }

} while ((confirm(`Desea agregar un articulo mas a la compra?`)));

subtotalCompra = (totalFifa2023 + totalAmongUs + totalNBA2K2023 + totalSuperMarioMaker + totalMarioOddisey + totalLuigis + totalGTA + totalRoketLeague + totalHogwartsLegacy + totalPubg);
const crearMensaje = () => {
    let encabezado = (`** TOTAL DE la COMPRA **`);
    let mensaje = "";
    if (cantFifa2023 > 0) {
        mensaje += (
            `\nFifa 2023      ${cantFifa2023}         $ ${totalFifa2023}`);
    }
    if (cantAmongUs > 0) {
        mensaje += (
            `\nAmong Us            ${cantAmongUs}            $ ${totalAmongUs}`);
    }
    if (cantNBA2K2023 > 0) {
        mensaje += (
            `\nNBA 2K 2023            ${cantNBA2K2023}            $ ${totalNBA2K2023}`);
    }
    if (cantSuperMarioMaker > 0) {
        mensaje += (
            `\nSuper Mario Maker           ${cantSuperMarioMaker}           $ ${totalSuperMarioMaker}`);
    }
    if (cantLuigis > 0) {
        mensaje += (
            `\nLuigis Mansion           ${cantLuigis}            $ ${totalLuigis}`);
    }
    if (cantGTA > 0) {
        mensaje += (
            `\nGTA V            ${cantGTA}         $ ${totalGTA}`);
    }
    if (cantRoketLeaegue > 0) {
        mensaje += (
            `\nRoket League            ${cantRoketLeaegue}            $ ${totalRoketLeague}`);
    }
    if (cantHogwarsLegacy > 0) {
        mensaje += (
            `\nHogwarts Legacy         ${cantHogwarsLegacy}         $ ${totalHogwartsLegacy}`);
    }
    if (cantPubg > 0) {
        mensaje += (
            `\nPubg            ${cantPubg}            $ ${totalPubg}`);
    }
    if (cantFifa2023 > 0) {
        mensaje += (
            `\nFifa 2023         ${cantFifa2023}         $ ${totalFifa2023}`);
    }
    let iva = calcularIva(subtotalCompra);
    let totalCompra = iva + subtotalCompra;

    let final = (
        `IVA                         $ ${iva}
    TOTAL                       $ ${totalCompra.toFixed(2)}`);

    return (`
    ${encabezado} 
    ${mensaje}  
    ${final}`);
}
alert(crearMensaje())