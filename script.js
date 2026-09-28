function gerarValor() {
    const valorMinimo = document.querySelector(".min input").value
    const valorMaximo = document.querySelector(".max input").value

    min = Math.ceil(valorMinimo)
    max = Math.floor(valorMaximo)

    const valorResultado =  Math.floor(Math.random() * (max - min + 1)) + min
    alert(valorResultado)
}