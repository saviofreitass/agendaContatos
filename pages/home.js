const incluirEl = document.querySelector(".include")
const editEl = document.querySelector(".edit")
const saveEl = document.querySelector(".save")
const cancelEl = document.querySelector(".cancel")
const deleteEl = document.querySelector(".delete")
const nomeEl = document.querySelector(".name")
const sobrenomeEl = document.querySelector(".sobrenome")
const enderecoEl = document.querySelector(".adress")
const telefoneEl = document.querySelector(".phone")
const inicioEl = document.querySelector(".inicio")
const anteriorEl = document.querySelector(".anterior")
const proximoEL = document.querySelector(".proximo")
const fimEl = document.querySelector(".final")

var OnOff = true
var array = []
var index = 0
var editando = false

incluirEl.addEventListener("click", () => {
    OnOff = true
    ativaDesativaInput()
    ativaDesativaBotao(OnOff)
    index = array.length
    nomeEl.value=""
    sobrenomeEl.value=""
    enderecoEl.value=""
    telefoneEl.value=""
})

editEl.addEventListener("click", () => {
    editando = true
    OnOff = true
    ativaDesativaBotao(OnOff)
    ativaDesativaInput()
})

saveEl.addEventListener("click", () => {
    
    if(nomeEl.value == "" || sobrenomeEl.value == "" || enderecoEl.value == "" || telefoneEl.value == ""){
        alert("Favor preencher todos os campos")
    }else{
        salvarContato()
        editando = false
        ativaDesativaInput()
        OnOff = false
        ativaDesativaBotao(OnOff)
    }
})

cancelEl.addEventListener("click", () => {
    ativaDesativaInput()
    OnOff = false
    if(array.length>0){
        ativaDesativaBotao(OnOff)
    }else{
        cancelEl.disabled = true
        saveEl.disabled = true
        incluirEl.disabled = false
    }
})

deleteEl.addEventListener("click", () => {
    if(array.length>1){
        if((index+=1)==array.length){
            array.splice(index-=1,1)
            mostraContato(index-=1)
        }else{
            array.splice(index-=1,1)
            mostraContato(index)
        }
    }else if(array.length==1){
        array.splice(index-=1,1)
        nomeEl.value=""
        sobrenomeEl.value=""
        enderecoEl.value=""
        telefoneEl.value=""
        incluirEl.disabled = false
        editEl.disabled = true
        deleteEl.disabled = true
    }
})

inicioEl.addEventListener("click", ()=>{
    index=0
    mostraContato(index)
})

anteriorEl.addEventListener("click", () => {
    if(index>0){
        mostraContato(index-=1)
    }
})

proximoEL.addEventListener("click", () => {
    if(index<(array.length-1)){
        mostraContato(index+=1)
    }
})

fimEl.addEventListener("click", () => {
    index = array.length-1
    mostraContato(index)
})

function salvarContato(){
    let contato = {
        nome : nomeEl.value,
        sobrenome : sobrenomeEl.value,
        endereco : enderecoEl.value,
        telefone : telefoneEl.value
    }
    if(!editando){
        array.push(contato)
    }else{
        array[index] = contato
    }
}

function mostraContato(index){
    nomeEl.value = array[index].nome
    sobrenomeEl.value = array[index].sobrenome
    enderecoEl.value = array[index].endereco
    telefoneEl.value = array[index].telefone
}

function ativaDesativaInput(){
    if(nomeEl.disabled){
        nomeEl.disabled = false
        sobrenomeEl.disabled = false
        enderecoEl.disabled = false
        telefoneEl.disabled = false
    }else{
        nomeEl.disabled = true
        sobrenomeEl.disabled = true
        enderecoEl.disabled = true
        telefoneEl.disabled = true
    }
}

function ativaDesativaBotao(OnOff){
    incluirEl.disabled = OnOff
    editEl.disabled = OnOff
    saveEl.disabled = !OnOff
    cancelEl.disabled = !OnOff
    deleteEl.disabled = OnOff
}