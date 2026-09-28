function gerarValor() {
    const valorMinimo = document.querySelector(".min input").value
    const valorMaximo = document.querySelector(".max input").value
    const textoResultado = document.querySelector(".resultado h1")
    const resultado = document.querySelector(".resultado p")

    if (valorMaximo == "" || valorMinimo == "") {
        alert("Digite os valores primeiro!")
        return
    }

    if (valorMinimo >= valorMaximo) {
        alert("Valor minimo não pode ser maior ou igual ao valor maximo!")
        return
    } 

    min = Math.ceil(valorMinimo)
    max = Math.floor(valorMaximo)
    
    const valorResultado =  Math.floor(Math.random() * (max - min + 1)) + min
    textoResultado.style.display = ""
    resultado.innerHTML = valorResultado
    console.log(valorResultado)  
    
}