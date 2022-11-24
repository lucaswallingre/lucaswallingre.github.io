const verCarrito = document.getElementById("verCarrito");
const modalConteiner = document.getElementById("modal-conteiner");
const shopContent = document.getElementById("shopContent");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productosStock.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card" ;
    content.innerHTML = `
    <img src="${product.img}">
    <h3 class="name">${product.nombre}</h3>
    <p class="price">${product.precio}</p>
    `;

    shopContent.append(content);


    let comprar = document.createElement("button")
    comprar.innerText = "Comprar";
    comprar.className ="comprar" ;
    content.append(comprar)

    comprar.addEventListener("click", ()=> {

    const repeat = carrito.some((repeatProduct)=> repeatProduct.id ===product.id);

    if (repeat===true){
        carrito.map((prod)=>{
            if(prod.id===product.id){
                prod.cantidad++
            }
        })
    }else{
        carrito.push({
            id : product.id,
            img : product.img,
            nombre :product.nombre,
            precio : product.precio,
            cantidad: product.cantidad,
        });
    }    // console.log(carrito)
        carritoCounter();
        saveLocal();
    });

});

const saveLocal =()=>{
localStorage.setItem("carrito",JSON.stringify (carrito));
};



