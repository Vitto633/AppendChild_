function Cadastrar(){
    const produto = {
        nome: document.getElementById("prod_nome").value,
        marca: document.getElementById("prod_marca").value,
        preco: document.getElementById("prod_preco").value
    }

    const lista_item = document.createElement("li")
    const prod_nome  = document.createElement("h3")
    const prod_marca = document.createElement("h4") 
    const prod_preco = document.createElement("p")
    prod_nome.innerHTML = "Nome: " + produto.nome
    prod_marca.innerHTML = "Marca: " + produto.marca
    prod_preco.innerHTML = "Preço: " + produto.preco
    lista_item.appendChild(prod_nome)
    lista_item.appendChild(prod_marca)
    lista_item.appendChild(prod_preco)
    
    lista_item.classList.add('produto-cadastrado');

    document.getElementById("lista_prod").appendChild(lista_item)
}