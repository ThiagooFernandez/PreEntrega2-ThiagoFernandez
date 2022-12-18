/*Catalogo de Juegos */
const juegos = [ 
    { nombre: "Fifa 23", precio: 10000},
    { nombre: "Pay day 2", precio: 1000},
    { nombre: "Sea of thieves", precio: 1500},
    { nombre: "F1 2022", precio: 15000},
    { nombre: "God of war ragnarok", precio: 14000},
    { nombre: "Dying light", precio: 950}
];


/*Esta funcion calcula el monto total*/
function validar(){
    const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
    alert(`El total a pagar por su compra es de: ${total}`) /* en este caso opte agregarlo en alert para que lo identifiquen mejor, solo por detalle*/
    console.log(`El total a pagar por su compra es de: ${total}`)
}

let carrito = []

let seleccion = prompt("Hola! Desea comprar algún tipo de juego? si/no")



if (seleccion == "si"){
    alert("A continuacion nuestra lista de juegos")
    let catalogojuegos = juegos.map(
        (juegos) => juegos.nombre + " " + juegos.precio + "$"
    );
    alert(catalogojuegos.join(" - \n"))
}   /*Usuario OUT*/
    else if (seleccion == "no"){
    alert("Gracias por utilizar la herramienta, hasta luego!")
}

while(seleccion != "no"){
    let juegos = prompt("Agrega un producto a tu carro (Por ejemplo: Fifa 23, Sea of Thieves, Pay day 2, f1 2022, God of war Ragnarok)")
    let precio = 0

    if(juegos == "Fifa 23" || juegos == "Pay Day 2" || juegos == "Sea of thieves" || juegos == "F1 2022" || juegos == "God of war ragnarok" || juegos == "Dying light"){
        switch(juegos) {
            case "Fifa 23":
                precio = 10000
                break;
            case "Pay Day 2":
                precio = 1000
                break;
            case "Sea of thieves":
                precio = 1500
                break;
            case "F1 2022":
                precio = 14000
                break;
            case "God Of war ragnarok":
                precio = 250
                break;
            case "Dying light":
                precio = 950
                break;
            default:
                break;
        }
        let unidades = parseInt(prompt("¿Cuantas juegos desearia llevar?"))

        /*Validacion sobre numero entero*/
        while(Number.isInteger(unidades) == false){
            alert("ingrese un numero entero por favor.");
            unidades = prompt("¿Cuantos juegos quiere llevar?")
        }

        carrito.push({juegos, unidades, precio})
        console.log(carrito)
    } else{
        alert("SIN STOCK")
    }

    let seleccion2 = prompt("¿Desea seguir comprando? si/no (en minuscula)")

    while(seleccion2 != "si" && seleccion2 != "no"){
        alert("Por favor ingresar si (si es que desea seguir comprando) o no (por si quiere retirarse).Gracias");
        seleccion2 = prompt("¿Desea seguir comprando?")
    }

    /* segunda validacion  para despedir al usuario, mostrando  la cantidad total de su compra*/
    while(seleccion2 === "no"){
        alert("Gracias por su compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`Juegos: ${carritoFinal.juegos}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        seleccion = seleccion2;
    break;
    }
}

validar();