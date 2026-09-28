function gerarValor() {
    const valorMinimo = document.querySelector(".min input").value
    const valorMaximo = document.querySelector(".max input").value
    const textoResultado = document.querySelector(".resultado h1")
    const resultado = document.querySelector(".resultado p")

    min = Math.ceil(valorMinimo)
    max = Math.floor(valorMaximo)

    const valorResultado =  Math.floor(Math.random() * (max - min + 1)) + min


    textoResultado.style.display = ""
    resultado.innerHTML = valorResultado
}