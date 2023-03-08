let productos = [
  { id: 1, nombre: "arena", precio: 100 },
  { id: 2, nombre: "piedra", precio: 750 },
  { id: 3, nombre: "cemento", precio: 1000 },
  { id: 4, nombre: "plasticor", precio: 1250 },
];

productos.forEach(producto => { 
    console.log(producto.nombre);
});

let precio = prompt("Ingrese el precio minimo del producto a encontrar");

let filtrado = productos.filter(item => item.precio > precio); 

filtrado.forEach((item) =>{
  let mensaje = `
  Id: ${item.id}
  Nombre: ${item.nombre}
  Precio: $${item.precio}

  `;

  alert(mensaje);
})