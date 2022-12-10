const realizarCompra=document.querySelector("realizar-compra")


const pintarCompra = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
    });
    modalHeader.append(modalbutton);



    let finCompraContent= document.createElement("div");
    finCompraContent.className = "modal-content-compra";
    finCompraContent.innerHTML = `
        <h3 class="textoFincompra">Ultimos pasos para finalizar su compra</h3>
        <br></br>
        Nombre Completo<input id="nombrecompra" class="nombre-input" placeholder="Nombre Completo"> 
        Correo<input id="emailcompra" class="email-input" placeholder="Correo electronico">

        `;
    
        modalContainer.append(finCompraContent);



const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
const totalBuying = document.createElement("div");
totalBuying.className = "total-content-compra";
totalBuying.innerHTML = `Total a pagar: ${total} $`;
modalContainer.append(totalBuying);


let finalizarCompra = document.createElement("button")
finalizarCompra.className = "realizar-compra" ;
finalizarCompra.innerText = "Finalizar compra";
finalizarCompra.addEventListener("click", () => {
    const nombre = document.querySelector("#nombrecompra").value
    const email = document.querySelector("#emailcompra").value
    if(nombre==="" || email===""){
    Swal.fire({
        title: 'Error',
        text: 'Usted no completo su nombre o email',
        icon: 'error',
        confirmButtonText: ' Volver a completar '
    })
}else{
    let spinner = document.createElement("div")
    spinner.className="spinner"
    spinner.innerHTML=`
    <div class="d-flex">
    <div class="sk-chase">
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
  </div></div>
  `

  setTimeout(()=>{
    spinner.remove(spinner)

  },3000)
    modalContainer.append(spinner)
}setTimeout(()=>{
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Tu compra fue un exito ${nombre}, en 48 horas nos contactaremos a ${email}`,
        showConfirmButton: false,
        // timer: 1500
    })
},4000)
})

modalContainer.append(finalizarCompra)


}


