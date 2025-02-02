$(document).ready(function () {
    cardapio.eventos.init();
})

var cardapio = {};

cardapio.eventos = {

    init: () => {
        cardapio.metodos.obterItensCardapio();
    }

}

cardapio.metodos = {

    //obtem a lista de itens do cardapio
    obterItensCardapio: () => {

        var filtro = MENU['burgers'];
        console.log(filtro);

        $.each(filtro, (i, e) => {

            let temp = cardapio.templates.item.replace(/\${img}/g, e.img)
            $("#itensCardapio").append(temp)
       })
    },
}
  
cardapio.templates = {

    item: `
        <div class="col-3 mb-5">
            <div class="card card-item">
                <div class="img-produto">
                    <img src="\${img}" alt=">
                </div>
                <p class="title-produto text-center mt-4">
                    <b>Chocolate 300ml</b>
                </p>
                <p class="price-produto text-center">
                    <b>R$ 11,00</b>
                </p>
                <div class="add-carrinho">
                    <span class="btn-menos"><i class="fas fa-minus"></i></span>
                    <span class="add-numero-itens">0</span>
                    <span class="btn-mais"><i class="fas fa-plus"></i></span>
                    <span class="btn btn-add"><i class="fa fa-shopping-bag"></i></span>
                </div>
            </div>
        </div>
    `
}