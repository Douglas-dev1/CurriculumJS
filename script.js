const dadosPessoa = {
    "nome": "Douglas Felipe de Oliveira",
    "cpf": "135790321",
    "endereco": "Avenida Brasil",
    "numero": "7",
    "complemento" : "sobrado",
    
    "profissao": "Desenvolvedor embarcados",
    "telefone": "(42)99735-7475",
    "email": "douglas.2903@aluno.pr.senac.br",
    "urls": ["https://www.urlsedin.com/in/douglasfelipe577/","https://www.github.com/Douglas-dev1/"]
}
console.log(dadosPessoa);

/*MONTAGEM DA DIV TITLE*/
const divTitle= document.getElementById("title")

const h1Nome = document.createElement("h1");
h1Nome.textContent = dadosPessoa.nome

divTitle.appendChild(h1Nome);

const spanProfissao = document.createElement("span");
spanProfissao.textContent = dadosPessoa.profissao;

divTitle.appendChild(spanProfissao);

/*MONTAGEM DA DIV CONTACT*/

const divContact = document.getElementById("contact");

/*LISTA NAO ORDENADA*/
const listaContato = document.createElement("ul");

/*ITEM DE LISTA PARA O ENDEREÇO COMPLETO*/
const itemEndereco = document.createElement("li");
itemEndereco.textContent = `${dadosPessoa.endereco}, ${dadosPessoa.numero}`;
listaContato.appendChild(itemEndereco);
/*ITEM DE LISTA PARA O EMAIL*/
const itemEmail = document.createElement("li");
itemEmail.textContent = dadosPessoa.email;
listaContato.appendChild(itemEmail);
/*ITEM PARA O TELEFONE*/
const itemTelefone = document.createElement("li");
itemTelefone.textContent = dadosPessoa.telefone;
listaContato.appendChild(itemTelefone);
/*ITEM DE LISTAS COM urls DS REDES*/
for(urls of dadosPessoa.urls){
    const itemurls = document.createElement("li");
    const ancora = document.createElement("a");
    ancora.textContent = urls;
    ancora.setAttribute("href", urls);
    itemurls.appendChild(ancora);
    listaContato.appendChild(itemurls);

}

divContact.appendChild(listaContato)