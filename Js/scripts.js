document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: 'VuelJS', price: 25, image: 'img/1.jpg', link: 'productos.html', type: 'framework' },
        { name: 'Angular', price: 25, image: 'img/2.jpg', link: 'productos.html', type: 'framework' },
        { name: 'React', price: 25, image: 'img/3.jpg', link: 'productos.html', type: 'librería' },
        { name: 'Redux', price: 25, image: 'img/4.jpg', link: 'productos.html', type: 'librería' },
        { name: 'Node', price: 25, image: 'img/5.jpg', link: 'productos.html', type: 'plataforma' },
        { name: 'Sass', price: 25, image: 'img/6.jpg', link: 'productos.html', type: 'herramienta' },
        { name: 'HTML 5', price: 25, image: 'img/7.jpg', link: 'productos.html', type: 'lenguaje' },
        { name: 'GitHub', price: 25, image: 'img/8.jpg', link: 'productos.html', type: 'herramienta' },
        { name: 'Bulma', price: 25, image: 'img/9.jpg', link: 'productos.html', type: 'framework' },
        { name: 'TypeScript', price: 25, image: 'img/10.jpg', link: 'productos.html', type: 'lenguaje' },
        { name: 'Drupal', price: 25, image: 'img/11.jpg', link: 'productos.html', type: 'CMS' },
        { name: 'JS', price: 25, image: 'img/12.jpg', link: 'productos.html', type: 'lenguaje' },
        { name: 'GrapgQL', price: 25, image: 'img/13.jpg', link: 'productos.html', type: 'herramienta' },
        { name: 'WordPress', price: 25, image: 'img/14.jpg', link: 'productos.html', type: 'CMS' }
    ];

    const productGrid = document.getElementById('product-grid');
    const filtroNombre = document.getElementById('filtro-nombre');
    const filtroPrecio = document.getElementById('filtro-precio');
    const filtroTipo = document.getElementById('filtro-tipo');
    const botonFiltrar = document.getElementById('aplicar-filtros');
    const botonLimpiar = document.getElementById('limpiar-filtros');

    // Función para mostrar los productos en la cuadrícula
    function mostrarProductos(productos) {
        productGrid.innerHTML = ''; // Limpiar productos previos

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

    // Mostrar todos los productos inicialmente
    mostrarProductos(products);

    // Función para determinar si un producto coincide con el rango de precios seleccionado
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
                return true; // Para "Todos", no se filtra por precio
        }
    }

    // Filtrar productos cuando se haga clic en el botón "Aplicar Filtros"
    botonFiltrar.addEventListener('click', function() {
        const nombreFiltro = filtroNombre.value.toLowerCase();
        const precioFiltro = filtroPrecio.value;
        const tipoFiltro = filtroTipo.value;

        const productosFiltrados = products.filter(product => {
            const coincideNombre = product.name.toLowerCase().includes(nombreFiltro);
            const coincidePrecio = coincideConRangoPrecio(product, precioFiltro);
            const coincideTipo = tipoFiltro === 'todos' || product.type === tipoFiltro;
            return coincideNombre && coincidePrecio && coincideTipo;
        });

        // Mostrar los productos filtrados
        mostrarProductos(productosFiltrados);
    });

    // Limpiar filtros y mostrar todos los productos
    botonLimpiar.addEventListener('click', function() {
        // Limpiar los campos de filtro
        filtroNombre.value = '';
        filtroPrecio.value = 'todos';
        filtroTipo.value = 'todos';

        // Mostrar todos los productos nuevamente
        mostrarProductos(products);
    });
});
