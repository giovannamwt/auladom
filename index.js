
const login = "giovanna"
const senha = 123

let mensagem = document.querySelector("#auth")
let criarParagrafo = document.createElement('p')



let userPrompt = prompt('Digite seu usuário:')
let senhaPrompt = Number(prompt('Digite sua senha:'))


if (senhaPrompt != senha && userPrompt != login){ 
    criarParagrafo.textContent = 'Login ou senha incorretos.'
    mensagem.append(criarParagrafo)
}

else{
    criarParagrafo.style.color = '#00f100'
    criarParagrafo.textContent = 'Logado com sucesso'
    mensagem.append(criarParagrafo)
}


