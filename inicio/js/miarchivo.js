// let inicio = true

// while(inicio == true){

//     let nombre= prompt("Ingrese su nombre");

//     let apellido= prompt("ingrese su apellido");

//     if (nombre=="" || apellido == ''){

//         alert('Complete todos los datos por favor')

//     }else{

//         let nombreC= (nombre + " " + apellido);

//             if (nombreC !=" "){

//                 alert ("Hola " + nombreC + " un gusto que nos visites.");

//                 inicio = false

//             }

//     }

// }



// let reloj1 = 0;
// let reloj2 = 0;
// let reloj3 = 0;
// let reloj4 = 0;
// let n;

// let opcion1 = Number(prompt("Bienvenido a la relojeria \n 1-Ingresar al carrito \n 9-salir"))
// while (opcion1 != 9){
//     opcion1 = Number(prompt("1- Agregar productos/Consultar total \n 9- Salir"))
//     if(opcion1 == 1){
//         n = Number(prompt("elige los productos que quieres agregar: \n n° 1- Reloj Minimalista $6000\n n° 2- Reloj Militar: $21000 \n n°3- Reloj Urbano: $10000 \n n°4- Reloj Lujoso: $50000 \n n° 7- Total" ));
//         if (n == 1){
//             let cant1 = Number(prompt("¿Cuántos relojes Minimalistas queres agregar"));
//                 reloj1 = 6000*cant1;
//         }
//         else if (n == 2){
//             let cant2 = Number(prompt("¿Cuántas relojes Militares queres agregar"));
//                 reloj2 = 21000*cant2 ;
//         }
//         else if (n == 3){
//             let cant3 = Number(prompt("¿Cuántas relojes Urbanos queres agregar"));
//                 reloj3 = 10000*cant3 ;
//         }
//         else if (n == 4){
//             let cant4 = Number(prompt("¿Cuántas relojes Lujosos quieres agregar"));
//                 reloj4 = 50000*cant4;
//         }
//         else if (n == 7){
//             alert ("su carrito es: " + (reloj1 + reloj2 + reloj3 + reloj4))
//         }
//     }  
// }


// let RelojElegido = prompt("Que reloj busca comprar: \n 1) Minimalista \n 2) Militar \n 3) Urbano \n 4) Lujoso");

// if (RelojElegido == 1) {
//     RelojElegido = "Minimalista";
// }
// else if (RelojElegido == 2) {
//     RelojElegido = "Militar";
// }
// else if (RelojElegido == 3) {
//     RelojElegido = "Urbano";
// }
// else if (RelojElegido == 4){
//     RelojElegido = "Lujoso";
// }


// do {
//     switch (RelojElegido) {
//         case "Minimalista":
//             let precioMinimalista = 6000
//             let minimalistaCantidad = ConsultarCantidad(RelojElegido);
//             console.log("Compraras " + minimalistaCantidad + " de " + RelojElegido );
//             let minimalistaPago = Pago();
//             let minimalistaTotal = CalcularMonto(precioMinimalista,minimalistaCantidad);
//             if (minimalistaPago == 1 || minimalistaPago == 2) {
//                 alert("Debes pagar : " + "$" + minimalistaTotal);
//                 console.log("Debes pagar: " + "$" + minimalistaTotal);
//                 RelojElegido = false;
//         }
//             break;

//         case "Militar":
//             let precioMilitar = 21000
//             let MilitarCantidad = ConsultarCantidad(RelojElegido);
//             console.log("Compraras " + MilitarCantidad + " de " + RelojElegido );
//             let MilitarPago = Pago();
//             let MilitarTotal = CalcularMonto(precioMilitar,MilitarCantidad);
//             if (MilitarPago == 1 || MilitarPago == 2) {
//                 alert("Debes pagar: " + "$" + MilitarTotal);   
//                 console.log("Debes pagar: " + "$" + MilitarTotal);
//                 RelojElegido = false;
//             }
//                 break; 
    
//         case "Urbano":
//             let precioUrbano = 10000
//             let UrbanoCantidad = ConsultarCantidad(RelojElegido);
//             console.log("Compraras " + UrbanoCantidad + " de " + RelojElegido );
//             let UrbanoPago = Pago();
//             let UrbanoTotal = CalcularMonto(precioUrbano,UrbanoCantidad);
//             if (UrbanoPago == 1 || UrbanoPago == 2) {
//                 alert("Debes pagar: " + "$" + UrbanoTotal);   
//                 console.log("Debes pagar: " + "$" + UrbanoTotal);
//                 RelojElegido = false;
//         }
//             break; 
//         case "Lujoso":
//             let precioLusojo= 50000
//             let LujosoCantidad = ConsultarCantidad(RelojElegido);
//             console.log("Compraras " + LujosoCantidad + " de " + RelojElegido );
//             let LujosoPago = Pago();
//             let LujosoTotal = CalcularMonto(precioLusojo,LujosoCantidad);
//             if (LujosoPago == 1 || LujosoPago == 2) {
//                 alert("Debes pagar: " + "$" + LujosoTotal);   
//                 console.log("Debes pagar: " + "$" + LujosoTotal);
//                 alert("Hasta luego, lo esperamos proto");
//                 RelojElegido = false;
//             }
//                 break; 
    

//         default:
    
//             break;

//     }
    
// } while (RelojElegido === "Minimalista" || RelojElegido == "Militar" || RelojElegido == "Urbano"|| RelojElegido == "Lujoso")



// function ConsultarCantidad (articulo) {
//     let cant = parseInt(prompt("Cuantos relojes " + articulo + " deseas comprar:"));
//     return cant;
// }

// function Pago () {
//     let forma = prompt("Ingrese su metodo de pago: \n 1) Efectivo \n 2) Debito ");
//     if (forma == 1) {
//         alert("El metodo de pago elegido es efectivo");
//     }
//     else if (forma == 2){
//         alert("El metodo de pago elegido es Debito");1
//     }
//     else {
//         alert("No ingreso una forma de pago valida");
//         Pago();
//     }
//     return forma;
// }

// function CalcularMonto (precio,cantidad) {
//     let montofinal = precio * cantidad;
//     return montofinal;
// }

// let envioElegido= prompt("Como deseas recibir su comprar \n 1-Retiro personal \n 2-Envio a domicilio");

// while (envioElegido == 1){
//     alert ("Puede pasar a retirar su compra en avenida siempre viva 742 a partir de las 08:00 a 19:00 hs" )
// }if (envioElegido == 2){
//     let ubicacion =prompt("Ingrese la direccion de destino")
//     alert ("su producto llegara antes de las 21:00hs en " + ubicacion )
// }
