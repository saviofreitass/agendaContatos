
const usuarioEl = document.querySelector(".user")
const passwordEl = document.querySelector(".password")
const loginEl = document.querySelector(".buttonLogin")
const alertUserEl = document.querySelector(".alertUser")
const alertPassEl = document.querySelector(".alertPass")

loginEl.addEventListener("click", () => {
    if(usuarioEl.value == "admin" && passwordEl.value == "admin"){
        window.location.assign("./pages/home.html")
    }else{
        if(usuarioEl.value != "admin"){
            usuarioEl.style.border = "red 1px solid"
            alertUserEl.classList.remove("alertUser")
            alertUserEl.classList.add("erroUser")
            alertUserEl.innerHTML='Login incorreto'
        }else{
            usuarioEl.style.border = "none"
            alertUserEl.classList.remove("erroUser")
            alertUserEl.classList.add("alertUser")
            alertUserEl.innerHTML=''
        }
        if(passwordEl.value != "admin"){
            passwordEl.style.border = "red 1px solid"
            alertPassEl.classList.remove("alertPass")
            alertPassEl.classList.add("erroPass")
            alertPassEl.innerHTML='Senha incorreta'
        }else{
            passwordEl.style.border = "none"
            alertPassEl.classList.remove("erroPass")
            alertPassEl.classList.add("alertPass")
            alertPassEl.innerHTML=''
        }
    }
})

