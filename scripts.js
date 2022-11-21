const listaRestaurantes = [
    {
        imagen: `<img src="../imagen/01.jpg"/>`,
        nombre: `<h3>Pacifico mar</h3>`,
        descripcion: `<p>Deliciosa comida de mar<p>`,
        direccion: `<p>avenida 85 #45 barranquilla</p>`
    },
    {
        imagen: `<img src="imagen/02.jpg"/>`,
        nombre: `<h3>Italiano</h3>`,
        descripcion: `<p>Deliciosa comida italiana</p>`,
        direccion: `<p>avenida 12 #13 Medellín</p>`
    },
    {
        imagen: `<img src="imagen/03.jpg"/>`,
        nombre: `<h3>Fritos y más</h3>`,
        descripcion: `<p>Comida rapida</p>`,
        direccion: `<p>avenida 5 #11 Bogota<p>`
    },
   {
        imagen: `<img src="imagen/04.jpg"/>`,
        nombre: `<h3>Pollo frito</h3>`,
        descripcion: `<p>El mejor pollo frito</p>`,
        direccion: `<p>avenida 30 #78 Cali</p>`
    }
];

const restaurantes = document.querySelector(".restaurantes");
let documentFragment = document.createDocumentFragment();

for (let i = 0; i < listaRestaurantes.length; i++) {
    let div = document.createElement("DIV");
    div.innerHTML = listaRestaurantes[i].imagen + listaRestaurantes[i].nombre + listaRestaurantes[i].descripcion + listaRestaurantes[i].direccion;
    documentFragment.appendChild(div);
}
restaurantes.appendChild(documentFragment);