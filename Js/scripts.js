document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: 'VuelJS', price: '$25', image: 'img/1.jpg', link: 'productos.html' },
        { name: 'Angular', price: '$25', image: 'img/2.jpg', link: 'productos.html' },
        { name: 'React', price: '$25', image: 'img/3.jpg', link: 'productos.html' },
        { name: 'Redux', price: '$25', image: 'img/4.jpg', link: 'productos.html' },
        { name: 'Node', price: '$25', image: 'img/5.jpg', link: 'productos.html' },
        { name: 'Sass', price: '$25', image: 'img/6.jpg', link: 'productos.html' },
        { name: 'HTML 5', price: '$25', image: 'img/7.jpg', link: 'productos.html' },
        { name: 'GitHub', price: '$25', image: 'img/8.jpg', link: 'productos.html' },
        { name: 'Bulma', price: '$25', image: 'img/9.jpg', link: 'productos.html' },
        { name: 'TypeScript', price: '$25', image: 'img/10.jpg', link: 'productos.html' },
        { name: 'Drupal', price: '$25', image: 'img/11.jpg', link: 'productos.html' },
        { name: 'JS', price: '$25', image: 'img/12.jpg', link: 'productos.html' },
        { name: 'GrapgQL', price: '$25', image: 'img/13.jpg', link: 'productos.html' },
        { name: 'WordPress', price: '$25', image: 'img/14.jpg', link: 'productos.html' }
    ];

    const productGrid = document.getElementById('product-grid');

    products.forEach(product => {
        // Crear el contenedor del producto
        const productDiv = document.createElement('div');
        productDiv.classList.add('producto');

        // Crear el enlace del producto
        const productLink = document.createElement('a');
        productLink.href = `productos.html?name=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}`;

        // Crear la imagen del producto
        const productImage = document.createElement('img');
        productImage.classList.add('producto__imagen');
        productImage.src = product.image;
        productImage.alt = `imagen ${product.name}`;

        // Crear la información del producto
        const productInfo = document.createElement('div');
        productInfo.classList.add('producto__informacion');

        // Nombre del producto
        const productName = document.createElement('p');
        productName.classList.add('producto__nombre');
        productName.textContent = product.name;

        // Precio del producto
        const productPrice = document.createElement('p');
        productPrice.classList.add('producto__precio');
        productPrice.textContent = product.price;

        // Agregar elementos al contenedor de información
        productInfo.appendChild(productName);
        productInfo.appendChild(productPrice);

        // Agregar imagen al enlace
        productLink.appendChild(productImage);

        // Agregar enlace e información al contenedor del producto
        productDiv.appendChild(productLink);
        productDiv.appendChild(productInfo);

        // Agregar el contenedor del producto a la cuadrícula
        productGrid.appendChild(productDiv);
    });
});
