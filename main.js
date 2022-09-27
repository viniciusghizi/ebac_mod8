const form = document.getElementById('form-modulo');
const contatos= [];
let linhas = "";


form.addEventListener('submit', function (e){
    e.preventDefault();
    adicionaLinha();
    atualizarTabela();
    atualizarMediaFinal();
})


function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone');
    
    //Mensagens de Erro para edição
    const mensagemErroContatoExiste = 
        `O ${inputNomeContato.value} já foi inserida`;
    const mensagemErroTelefoneInvalido = 
        `O Telefone ${inputTelefone.value} do ${inputNomeContato.value} está invalido. Verifique o Formato`;

    if(contatos.includes(inputNomeContato.value)){
        alert(mensagemErroContatoExiste);
    }else if(!validaTelefone(inputTelefone.value)){
        alert(mensagemErroTelefoneInvalido);
    }
    else{
        contatos.push(inputNomeContato.value);
        let linha = "<tr>";
        linha += `<td> ${inputNomeContato.value} </td>`;
        linha += `<td> ${inputTelefone.value} </td>`;
        linha += "</tr>";

        linhas += linha;    
        
    }

    inputNomeContato.value = '';
    inputTelefone.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
function atualizarMediaFinal(){
    const quantidadeContatos = `<span class="quantidade">${contatos.length}</span>`;
    document.getElementById('quantidade').innerHTML = quantidadeContatos; 
    console.log(quantidadeContatos)

}

function calculaMediaFinal(){
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }
    return somaNotas / notas.length;
}

function validaTelefone(telefone){
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{7})|(9[0-9]{8}))$'); 
    if (regex.test(telefone)) { 
        return true;
    }else{
        return false;
    }
}