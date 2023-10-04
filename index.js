const btnSubmit = document.getElementById("enviar")


btnSubmit.addEventListener('click', (ev)=> {
    ev.preventDefault()

    const login = document.getElementById("login").value
    const senha = document.getElementById("senha").value
    
    if(login === "admin" && senha === "admin"){
        location.href = "home.html"
        alert ("Sucesso")
    } else{
        alert('Login ou senha incorretos')
    }
    return false
    

})

