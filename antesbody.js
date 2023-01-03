let encabezados  = "";


window.onclick = function() {
    //Me crea una serie de elements por cada tag encontrado
    let encabezados = document.createElement("h1");
    console.log(encabezados);

    const text = document.createTextNode("¿Quieres ser mi morrita?");
    console.log(text);

    encabezados.appendChild(text);
    document.body.appendChild(encabezados);


    encabezados.appendChild("<h2>ESTE ES UN SUBTITULO<h2>");
}