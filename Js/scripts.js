//Listener de pagina proncipal
document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: 'VuelJS', price: 25, image: 'img/img1.avif', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'Angular', price: 25, image: 'img/img2.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'React', price: 25, image: 'img/img3.webp', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'Redux', price: 25, image: 'img/img4.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'Node', price: 25, image: 'img/img5.png', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'Sass', price: 25, image: 'img/img6.jpg', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'HTML 5', price: 25, image: 'img/img7.avif', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'GitHub', price: 25, image: 'img/img8.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'Bulma', price: 25, image: 'img/img9.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'TypeScript', price: 25, image: 'img/img10.webp', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'Drupal', price: 25, image: 'img/img11.webp', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'JS', price: 25, image: 'img/img12.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'GrapgQL', price: 25, image: 'img/img13.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'WordPress', price: 25, image: 'img/img14.webp', link: 'productos.html', type: 'pantalon', category: 'mujer' },
        { name: 'WordPress', price: 25, image: 'img/img15.jfif', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'React', price: 25, image: 'img/img16.webp', link: 'productos.html', type: 'pantalon', category: 'hombre' },
        { name: 'Redux', price: 25, image: 'img/img17.avif', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'Node', price: 25, image: 'img/img18.webp', link: 'productos.html', type: 'pantalon', category: 'niño' },
        { name: 'Sass', price: 25, image: 'img/img19.webp', link: 'productos.html', type: 'pantalon', category: 'niño' },
        { name: 'HTML 5', price: 25, image: 'img/img20.png', link: 'productos.html', type: 'pantalon', category: 'niño' },
        { name: 'GitHub', price: 25, image: 'img/img21.webp', link: 'productos.html', type: 'pantalon', category: 'niño' },
        { name: 'Bulma', price: 25, image: 'img/img22.webp', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'TypeScript', price: 25, image: 'img/img23.avif', link: 'productos.html', type: 'pantalon', category: 'niño' },
        { name: 'Drupal', price: 25, image: 'img/img24.jpg', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'JS', price: 25, image: 'img/img25.jpg', link: 'productos.html', type: 'pantalon', category: 'niño' },
        { name: 'GrapgQL', price: 25, image: 'img/img26.jpg', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'WordPress', price: 25, image: 'img/img27.webp', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'WordPress', price: 25, image: 'img/img28.jpg', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'React', price: 25, image: 'img/img29.avif', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'Redux', price: 25, image: 'img/img30.jpg', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'Node', price: 25, image: 'img/img31.webp', link: 'productos.html', type: 'pantalon', category: 'niña' },
        { name: 'Sass', price: 25, image: 'img/img32.jfif', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'HTML 5', price: 25, image: 'img/img33.jpg', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'GitHub', price: 25, image: 'img/img34.avif', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Bulma', price: 25, image: 'img/img35.webp', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'TypeScript', price: 25, image: 'img/img36.webp', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Drupal', price: 25, image: 'img/img37.avif', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'JS', price: 25, image: 'img/img38.webp', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'GrapgQL', price: 25, image: 'img/img39.jpg', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'WordPress', price: 25, image: 'img/img40.jfif', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'WordPress', price: 25, image: 'img/img41.avif', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Node', price: 25, image: 'img/img42.webp', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'Sass', price: 25, image: 'img/img43.jpeg', link: 'productos.html', type: 'playera', category: 'mujer' },
        { name: 'HTML 5', price: 25, image: 'img/img44.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'GitHub', price: 25, image: 'img/img45.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Bulma', price: 25, image: 'img/img46.jfif', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'TypeScript', price: 25, image: 'img/img47.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Drupal', price: 25, image: 'img/img48.avif', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'JS', price: 25, image: 'img/img49.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'GrapgQL', price: 25, image: 'img/img50.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'WordPress', price: 25, image: 'img/img51.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'WordPress', price: 25, image: 'img/img52.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Node', price: 25, image: 'img/img53.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Sass', price: 25, image: 'img/img54.jfif', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'HTML 5', price: 25, image: 'img/img55.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'GitHub', price: 25, image: 'img/img56.png', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Bulma', price: 25, image: 'img/img57.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'TypeScript', price: 25, image: 'img/img58.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Drupal', price: 25, image: 'img/img59.jfif', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'JS', price: 25, image: 'img/img60.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'GrapgQL', price: 25, image: 'img/img61.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'WordPress', price: 25, image: 'img/img62.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'WordPress', price: 25, image: 'img/img63.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'TypeScript', price: 25, image: 'img/img64.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'Drupal', price: 25, image: 'img/img65.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'JS', price: 25, image: 'img/img66.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'GrapgQL', price: 25, image: 'img/img67.webp', link: 'productos.html', type: 'playera', category: 'hombre' },
        { name: 'WordPress', price: 25, image: 'img/img68.jpg', link: 'productos.html', type: 'playera', category: 'hombre' },
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
            productPrice.textContent = `$${product.price}`;

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
    const imagen = document.querySelector('.camisa__imagen');
    const descripcionProducto = document.querySelector('.camisa__contenido p');

    tituloProducto.textContent = nombreProducto;
    imagen.src = imagenProducto;
    imagen.alt = nombreProducto;
    descripcionProducto.textContent = `Precio: $${precioProducto}`;
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
