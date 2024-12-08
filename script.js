let nomePrato = "";
let nomeBebida = "";
let nomeSobremesa = "";
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;

function selecionarPrato(prato) {
    const pratos = document.querySelector("." + prato);
    nomePrato = pratos.querySelector('.nome-comida').innerHTML;
    valorPrato = parseFloat(pratos.querySelector('.preco-comida').innerHTML);

    const classeBordaVerde = document.querySelector(".escolher-prato .borda-verde");
    if(classeBordaVerde !== null) {
        classeBordaVerde.classList.remove('borda-verde');
    }

    pratos.classList.add('borda-verde');
    verificarPedido();
}

function selecionarBebida(bebida) {
    const bebidas = document.querySelector("." + bebida);
    nomeBebida = bebidas.querySelector('.nome-comida').innerHTML;
    valorBebida = parseFloat(bebidas.querySelector('.preco-comida').innerHTML);

    const classeBordaVerde = document.querySelector(".escolher-bebida .borda-verde");
    if(classeBordaVerde !== null) {
        classeBordaVerde.classList.remove('borda-verde')
    }
    bebidas.classList.add('borda-verde');
    verificarPedido();
}

function selecionarSobremesa(sobremesa) {
    let sobremesas = document.querySelector("." + sobremesa);
    nomeSobremesa = sobremesas.querySelector('.nome-comida').innerHTML;
    valorSobremesa = parseFloat(sobremesas.querySelector('.preco-comida').innerHTML);

    const classeBordaVerde = document.querySelector(".escolher-sobremesa .borda-verde");
    if(classeBordaVerde !== null) {
        classeBordaVerde.classList.remove('borda-verde')
    }
    sobremesas.classList.add('borda-verde');
    verificarPedido();
}

function verificarPedido (){
    const fecharPedido = document.querySelector('.fechar-pedido');
    const mudarCor = document.querySelector('.finalizar-pedido');

    if(nomePrato !== "" && nomeBebida !=="" && nomeSobremesa !== ""){
        fecharPedido.innerHTML = 'Fechar Pedido';
        mudarCor.classList.add('verde');
    }
}

function fecharPedido() {
        if (nomePrato !== "" && nomeBebida !== "" && nomeSobremesa !== "") {
            const total = valorPrato + valorBebida + valorSobremesa;
    
            const overlay = document.querySelector('.overlay').style.display = "flex";;
            const loadingOverlay = document.querySelector('.loading-overlay').classList.remove("escondido");
            const pedidoFeito = document.querySelector('.pedido-feito')
    
            pedidoFeito.innerHTML = `
                <p>${nomePrato}: R$ ${valorPrato.toFixed(2)}</p>
                <p>${nomeBebida}: R$ ${valorBebida.toFixed(2)}</p>
                <p>${nomeSobremesa}: R$ ${valorSobremesa.toFixed(2)}</p>
                <p>TOTAL: R$ ${total.toFixed(2)}</p><br>
            `;

            let minhaString = `Olá, gostaria de fazer o pedido:
            - Prato: ${nomePrato}
            - Bebida: ${nomeBebida}
            - Sobremesa: ${nomeSobremesa}
            Total: R$ ${total.toFixed(2)}
            `;
            let stringCodificada = encodeURIComponent(minhaString);

            const linkwhats = `https://wa.me/5547999210577?text=${stringCodificada}`;
            const whats = document.querySelector("a");
            whats.href = linkwhats;
        }
}

function cancelar(){
    const loadingOverlay = document.querySelector('.loading-overlay').classList.add("escondido");
    const overlay = document.querySelector('.overlay').style.display = "none";
}










