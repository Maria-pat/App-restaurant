const listaRestaurantes = [
    {
        imagen: `<img src="imagen/01.jpg"/>`,
        nombre: `<h3>Pacifico mar</h3>`,
        descripcion: `<p>Deliciosa comida de mar<p>`,
        direccion: `<p>avenida 85 #45 barranquilla</p>`,
        info: `Pacifico mar`
    },
    {
        imagen: `<img src="imagen/02.jpg"/>`,
        nombre: `<h3>Italiano</h3>`,
        descripcion: `<p>Deliciosa comida italiana</p>`,
        direccion: `<p>avenida 12 #13 Medellín</p>`,
        info: `Italiano`
    },
    {
        imagen: `<img src="imagen/03.jpg"/>`,
        nombre: `<h3>Fritos y más</h3>`,
        descripcion: `<p>Comida rapida</p>`,
        direccion: `<p>avenida 5 #11 Bogota<p>`,
        info: `Fritos y mas`
    },
   {
        imagen: `<img src="imagen/04.jpg"/>`,
        nombre: `<h3>Pollo frito</h3>`,
        descripcion: `<p>El mejor pollo frito</p>`,
        direccion: `<p>avenida 30 #78 Cali</p>`,
        info: `Pollo frito`
    }
];

function buscar() {
    let nombre = document.getElementById("ingreso").value;
    const restaurante = document.querySelector(".show-restaurant");

    let comprobar = false;

    for (let i = 0; i < listaRestaurantes.length; i++) {
        if (nombre === listaRestaurantes[i].info.toLowerCase()) {
            restaurante.innerHTML = listaRestaurantes[i].imagen + listaRestaurantes[i].nombre + listaRestaurantes[i].descripcion + listaRestaurantes[i].direccion;
            comprobar = true;
        }
    }
    if (!comprobar) {
        restaurante.innerHTML = "<p style='font-size: 18px; margin: 80px;'>No se encontraron resultados</p>"
    }
}