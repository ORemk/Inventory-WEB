let currentIndex = null;

function showModal(index) {
    currentIndex = index;
    let registros = JSON.parse(localStorage.getItem("inventario"));
    let registro = registros[index];
    document.getElementById("modal-nombre").value = registro.nombre;
    document.getElementById("modal-cantidad").value = registro.cantidad;
    document.getElementById("modal-precio").value = registro.precio;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    currentIndex = null;
}

document.getElementById("modal-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let registros = JSON.parse(localStorage.getItem("inventario"));
    let registro = registros[currentIndex];
    let nuevoNombre = document.getElementById("modal-nombre").value;
    let nuevaCantidad = document.getElementById("modal-cantidad").value;
    let nuevoPrecio = document.getElementById("modal-precio").value;

    if (nuevoNombre && nuevaCantidad && nuevoPrecio) {
        registros[currentIndex] = { ...registro, nombre: nuevoNombre, cantidad: nuevaCantidad, precio: nuevoPrecio };
        localStorage.setItem("inventario", JSON.stringify(registros));
        cargarRegistros();
        closeModal();
    } else {
        alert("Todos los campos deben ser completados para modificar el producto.");
    }
});
