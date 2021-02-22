function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
}

function redirecionar(){
    //window.open("https://portal.winprovit.pt/account/login.aspx")
    window.location.href = ("http://accph.u1o.xyz/users?order_by=exp_date,asc&reseller=Paulojulio")
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe ou mouse aqui"
    elemento.innerHTML = "Passe ou mouse aqui"
}

function load(){
    alert("Pagina carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*function soma( n1, n2){
    return n1 + n2
}

function setRepolace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual a sua idade")
console.log(validaIdade(idade))


alert(soma(5,10))
alert(setRepolace("Vai Japão", "Japão", "Brasil"))

var d = new Date()
alert(d.getMonth() + 1)
alert(d.getHours())
alert(d.getMinutes())


var count
for ( count = 0; count <= 5; count++) {
    alert(count)
}

var count = 0
while (count <= 5) {
    console.log(count)
    alert(count)
    count++
}
var idade = prompt("Qual sua idade")
//var idade = 18
if (idade >= 18) {
    alert("Maior de idade")
}else {
    alert("Menor de idade")
}

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas)
alert(frutas[1].nome)

var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome)
alert(fruta.cor)

var lista = ["maça", "pêra", "laranja"]
lista.push("uva")
lista.pop()
console.log(lista.length)
console.log(lista.reverse())
console.log(lista.toString())
console.log(lista.join(" - "))

var name = "Paulo Julio"
var idade = 40
var idade2 = 10
var frase = "Japão é o melhor time do mundo"
//alert(name + " tem " + idade + " anos ");
//alert(idade + idade2)
console.log(name)
console.log(idade * idade2)
console.log(frase.toLowerCase())
// console.log(frase.replace("Japão", "Brasil")) //pode fazer com alert */