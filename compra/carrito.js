const pintarCarrito = () => {
verCarrito.addEventListener("click",()=>{
    // console.log("soy el carrito")
    modalConteiner.innerHTML ="";
    modalConteiner.style.display="flex";
    const modalHeader =document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML=`
    <h1 class="modal-header-titulo">Carrito</h1>

    `;
    modalConteiner.append(modalHeader);
    

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X"
    modalButton.className ="modal-header-button";

modalButton.addEventListener("click", () =>{
modalConteiner.style.display = "none";

});

    modalHeader.append(modalButton);


    carrito.forEach((product) =>{
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content"
    carritoContent.innerHTML =`
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio}</p>
            <span class="restar"> - </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="sumar"> + </span>
            <p> Total: ${product.cantidad*product.precio}</p>
            `;

    modalConteiner.append(carritoContent);
    console.log(carrito.length);

        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", ()=>{
            if(product.cantidad!==1){
            product.cantidad--}
            pintarCarrito()
            saveLocal()
        })
        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click", ()=>{
            product.cantidad++
            pintarCarrito()
            saveLocal()
        })


    let eliminar =document.createElement("span");
    eliminar.innerText ="❌";
    eliminar.className ="delete-product";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProductos)
    });

    const total = carrito.reduce((acc, el )=> acc + el.precio*el.cantidad, 0)
    const totalCompra= document.createElement("div");
    totalCompra.className ="total-content";
    totalCompra.innerHTML =`total a pagar: $${total}`;
    modalConteiner.append(totalCompra);
});
}

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProductos = () => {
    const foundId = carrito.find((element)=>element.id);
    carrito = carrito.filter((carritoId)=>{
        return carritoId !== foundId ;
    })
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter=() => {
    cantidadCarrito.style.display = "block"
    const carritoLenght=carrito.length;
    localStorage.setItem("carritoLenght", JSON.stringify(carritoLenght))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLenght"));
}
carritoCounter()