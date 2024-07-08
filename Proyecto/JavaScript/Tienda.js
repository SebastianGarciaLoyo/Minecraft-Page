const tienda = {
    productos: [],

    mostrarFactura: function() {
        const factura = document.getElementById('factura');
        factura.style.display = 'block';

        const listaProductos = document.getElementById('listaProductos');
        listaProductos.innerHTML = ''; // Limpiar la lista

        let total = 0;

        this.productos.forEach(producto => {
            const item = document.createElement('li');
            item.classList.add('producto');
            item.innerHTML = `${producto.nombre}: $${producto.precio} <button class="botonEliminar" onclick="tienda.eliminarProducto('${producto.nombre}', ${producto.precio})">Eliminar</button>`;
            listaProductos.appendChild(item);

            total += producto.precio;
        });

        const totalElement = document.getElementById('total');
        totalElement.textContent = `Total: $${total}`;
    },

    agregarProducto: function(nombre, precio) {
        const nuevoProducto = { nombre, precio };
        this.productos.push(nuevoProducto);

        this.mostrarFactura();
    },

    eliminarProducto: function(nombre, precio) {
        const indice = this.productos.findIndex(producto => producto.nombre === nombre && producto.precio === precio);

        if (indice !== -1) {
            this.productos.splice(indice, 1);
            this.mostrarFactura();
        }
    }
};

// Agrega evento de clic al botón de compra
document.querySelector('.boton2').addEventListener('click', function () {
    if (tienda.productos.length === 0) {
        // Si no hay productos en la factura, mostrar mensaje
        alert('¡Añade al menos un producto a la factura antes de comprar!');
    } else {
        // Mostrar alerta de compra exitosa
        alert('¡Compra exitosa!');

        // Limpiar la factura
        tienda.productos = [];
        tienda.mostrarFactura();
    }
});

