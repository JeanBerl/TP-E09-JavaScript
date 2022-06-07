var document = Document;
function tabuleiro(){
    let tamanho = parseInt(document.getElementById("input_tabuleiro").value);
    let containertabuleiro = document.getElementById("tabuleiro");
    
    let desenhoTriangulo = "";
    for (let i = 0; i < tamanho; i++) {
        desenhoTriangulo += "<p>";
        
        if(i%2 == 0) desenhoTriangulo += "# # # #";
        else desenhoTriangulo += "&nbsp;# # # #";
        
        desenhoTriangulo += "</p>"
    }

    containertabuleiro.innerHTML = desenhoTriangulo;
}