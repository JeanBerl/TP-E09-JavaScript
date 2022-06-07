var document = Document;
function desenhaTriangulo() {
    let numLinhas = parseInt(document.getElementById("input_triangulo").value) + 1;
    let containerTriangulo = document.getElementById("desenho_triangulo");
    let desenhoTriangulo = "";
    for (let i = 0; i < numLinhas; i++) {
        desenhoTriangulo += "<p>";
        for (let j = 0; j < i; j++) {
            desenhoTriangulo += "#";
        }
        desenhoTriangulo += "</p>"
    }
    containerTriangulo.innerHTML = desenhoTriangulo;
}