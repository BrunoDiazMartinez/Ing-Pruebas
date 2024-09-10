//Listener de pagina proncipal
document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: 'pantalon beige', price: 549, image: 'img/img1.avif', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'pantalon mezclilla', price: 679, image: 'img/img2.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'pantalon mezclilla', price: 489, image: 'img/img3.webp', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'pantalon formal', price: 699, image: 'img/img4.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'pantalon mezclilla', price: 479, image: 'img/img5.png', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'pantalon mezclilla', price: 389, image: 'img/img6.jpg', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'pantalon formal', price: 729, image: 'img/img7.avif', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'pantalon mezclilla', price: 579, image: 'img/img8.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'pantalon jogger', price: 899, image: 'img/img9.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'pantalon jogger', price: 699, image: 'img/img10.webp', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'pantalon jogger', price: 699, image: 'img/img11.webp', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'pantalon mezclilla', price: 659, image: 'img/img12.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'pantalon mezclilla', price: 769, image: 'img/img13.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'pantalon formal', price: 749, image: 'img/img14.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'pantalon mezclilla', price: 449, image: 'img/img15.jfif', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'pantalon mezclilla', price: 489, image: 'img/img16.webp', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'pantalon rojo', price: 499, image: 'img/img17.avif', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'pantalon mezclilla', price: 489, image: 'img/img18.webp', link: 'productos.html', type: 'pantalon', category: 'niño' },
        { name: 'pantalon mezclilla', price: 469, image: 'img/img19.webp', link: 'productos.html', type: 'pantalon', category: 'niño' },
        { name: 'pantalon jogger', price: 449, image: 'img/img20.png', link: 'productos.html', type: 'pantalon', category: 'niño' },
        { name: 'pantalon formal', price: 389, image: 'img/img21.webp', link: 'productos.html', type: 'pantalon', category: 'niño' },
        { name: 'pantalon mezclilla', price: 589, image: 'img/img22.webp', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'pantalon jogger', price: 629, image: 'img/img23.avif', link: 'productos.html', type: 'pantalon', category: 'niño' },
        { name: 'pantalon mezclilla', price: 559, image: 'img/img24.jpg', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'pantalon mezclilla', price: 699, image: 'img/img25.jpg', link: 'productos.html', type: 'pantalon', category: 'niño' },
        { name: 'pantalon jogger', price: 499, image: 'img/img26.jpg', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'pantalon jogger', price: 579, image: 'img/img27.webp', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'pantalon mezclilla', price: 499, image: 'img/img28.jpg', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'pantalon jogger', price: 579, image: 'img/img29.avif', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'pantalon jogger', price: 799, image: 'img/img30.jpg', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'pantalon licra', price: 599, image: 'img/img31.webp', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'Playera Blanca', price: 359, image: 'img/img32.jfif', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Playera Negra Puma', price: 239, image: 'img/img33.jpg', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Playera Camuflaje GAP', price: 289, image: 'img/img34.avif', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Playera Blanca LOVE', price: 229, image: 'img/img35.webp', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Playera Negra', price: 239, image: 'img/img36.webp', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Playera Beige', price: 219, image: 'img/img37.avif', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Playera Azul', price: 259, image: 'img/img38.webp', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Playera Negra Nike', price: 229, image: 'img/img39.jpg', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Playera Negra', price: 209, image: 'img/img40.jfif', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Playera Negra Levis', price: 229, image: 'img/img41.avif', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Playera Rosa', price: 209, image: 'img/img42.webp', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Playera Negra', price: 259, image: 'img/img43.jpeg', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Playera Gris/Negra', price: 189, image: 'img/img44.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Blanca', price: 209, image: 'img/img45.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Blanca', price: 189, image: 'img/img46.jfif', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Azul Marino', price: 199, image: 'img/img47.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Gris', price: 179, image: 'img/img48.avif', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Blanca Estampada', price: 179, image: 'img/img49.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Negra', price: 169, image: 'img/img50.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Negra/Gris/Blanca', price: 189, image: 'img/img51.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Negra Estampada', price: 199, image: 'img/img52.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Blanca', price: 259, image: 'img/img53.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Rosa', price: 209, image: 'img/img54.jfif', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Negra', price: 199, image: 'img/img55.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Blanca', price: 159, image: 'img/img56.png', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Negra', price: 129, image: 'img/img57.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Blanca', price: 199, image: 'img/img58.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Negra Estampada', price: 209, image: 'img/img59.jfif', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Blanca Estampada', price: 259, image: 'img/img60.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Negra Estampada', price: 289, image: 'img/img61.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Negra Estampada', price: 209, image: 'img/img62.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Blanca Estampada', price: 259, image: 'img/img63.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Negra Estampada', price: 219, image: 'img/img64.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Blanca Estampada', price: 259, image: 'img/img65.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Negra Estampada', price: 299, image: 'img/img66.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Negra Estampada', price: 299, image: 'img/img67.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Playera Negra/Azul', price: 209, image: 'img/img68.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
    ];

    const productGrid = document.getElementById('product-grid');
    const filtroNombre = document.getElementById('filtro-nombre');
    const filtroPrecio = document.getElementById('filtro-precio');
    const filtroTipo = document.getElementById('filtro-tipo');
    const filtroCategoria = document.getElementById('filtro-categoria');
    const botonFiltrar = document.getElementById('aplicar-filtros');
    const botonLimpiar = document.getElementById('limpiar-filtros');

    function mostrarProductos(productos) {
        productGrid.innerHTML = '';

        productos.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('producto');

            const productLink = document.createElement('a');
            productLink.href = `productos.html?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}`;

            const productImage = document.createElement('img');
            productImage.classList.add('producto__imagen');
            productImage.src = product.image;
            productImage.alt = `imagen ${product.name}`;

            const productInfo = document.createElement('div');
            productInfo.classList.add('producto__informacion');

            const productName = document.createElement('p');
            productName.classList.add('producto__nombre');
            productName.textContent = product.name;

            const productPrice = document.createElement('p');
            productPrice.classList.add('producto__precio');
            productPrice.textContent = `$${product.price} MXN`;

            productInfo.appendChild(productName);
            productInfo.appendChild(productPrice);
            productLink.appendChild(productImage);
            productDiv.appendChild(productLink);
            productDiv.appendChild(productInfo);

            productGrid.appendChild(productDiv);
        });
    }

    mostrarProductos(products);

    function coincideConRangoPrecio(producto, rangoPrecio) {
        const precio = producto.price;
        switch (rangoPrecio) {
            case 'menos-20':
                return precio < 20;
            case '20-50':
                return precio >= 20 && precio <= 50;
            case 'mas-50':
                return precio > 50;
            default:
                return true;
        }
    }

    botonFiltrar.addEventListener('click', function () {
        const nombreFiltro = filtroNombre.value.toLowerCase();
        const precioFiltro = filtroPrecio.value;
        const tipoFiltro = filtroTipo.value;
        const categoriaFiltro = filtroCategoria.value;
        const productosFiltrados = products.filter(product => {
            const coincideNombre = product.name.toLowerCase().includes(nombreFiltro);
            const coincidePrecio = coincideConRangoPrecio(product, precioFiltro);
            const coincideTipo = tipoFiltro === 'todos' || product.type === tipoFiltro;
            const coincideCategoria = categoriaFiltro === 'todos' || product.category === categoriaFiltro;
            return coincideNombre && coincidePrecio && coincideTipo && coincideCategoria;
        });

        if (productosFiltrados.length === 0) {
            window.alert('No se encontraron productos que coincidan con los filtros.');
        } else {
            mostrarProductos(productosFiltrados);
        }
    });

    const botonCarrito = document.getElementById('boton-carrito');

    botonCarrito.addEventListener('click', function () {
        window.location.href = 'carrito.html';
    });

    botonLimpiar.addEventListener('click', function () {
        filtroNombre.value = '';
        filtroPrecio.value = 'todos';
        filtroTipo.value = 'todos';
        filtroCategoria.value = 'todos';
        mostrarProductos(products);
    });
});

//Listener de producto individual
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const nombreProducto = params.get('name');
    const precioProducto = params.get('price');
    const imagenProducto = params.get('image');
    const tituloProducto = document.querySelector('h1');
    const imagen = document.querySelector('.articulo__imagen');
    const descripcionProducto = document.querySelector('.articulo__contenido p');

    tituloProducto.textContent = nombreProducto;
    imagen.src = imagenProducto;
    imagen.alt = nombreProducto;
    descripcionProducto.textContent = `Precio: $${precioProducto} MXM`;
    const formulario = document.getElementById('form-producto');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        const tallaSeleccionada = document.getElementById('talla').value;
        const cantidad = parseInt(document.getElementById('cantidad').value, 10);
        if (isNaN(cantidad) || cantidad <= 0) {
            window.alert('Por favor, selecciona al menos un artículo.');
        }

        const producto = {
            nombre: nombreProducto,
            precio: precioProducto,
            imagen: imagenProducto,
            talla: tallaSeleccionada,
            cantidad: cantidad
        };

        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        window.location.href = 'carrito.html';
    });
});

//Listener de carrito
document.addEventListener('DOMContentLoaded', function () {
    const carritoContenido = document.getElementById('carrito-contenido');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        carritoContenido.innerHTML = '<p>Tu carrito está vacío.</p>';
    } else {
        carrito.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto-carrito');

            const productoInfo = `
                <img src="${producto.imagen}" alt="${producto.nombre}" width="100">
                <p>${producto.nombre}</p>
                <p>Talla: ${producto.talla}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Precio: $${producto.precio}</p>
            `;

            productoDiv.innerHTML = productoInfo;
            carritoContenido.appendChild(productoDiv);
        });
    }

    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    vaciarCarritoBtn.addEventListener('click', function () {
        localStorage.removeItem('carrito');
        carritoContenido.innerHTML = '<p>Tu carrito está vacío.</p>';
    });
});
