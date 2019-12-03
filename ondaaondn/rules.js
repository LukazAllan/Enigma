function indexpg(num){
    //let a = prompt("Digite a Resposta:")
    var a = document.getElementById("resp").value.toLowerCase().replace(/\s/g,'')
    console.log(`${a}, ${window.location.href}`) 
    if (a === "azul" && num === 1) {
        window.alert("Certa Resposta")
        window.location.href = "page2.html"
    } else if (a === "voz" && num === 2) {
        window.alert("Certa Resposta")
        console.log('else if')
        window.location.href = "page3.html"
    } else if (a === "ecoa" && num === 3) {
        window.alert("Certa Resposta")
        console.log('else if')
        //window.location.href = "page2.html"
    } else if (a === "versos" && num === 4) {
        window.alert("Certa Resposta")
        console.log('else if')
        //window.location.href = "page2.html"
    } else if (a === "perplexos" && num === 5) {
        window.alert("Certa Resposta")
        console.log('else if')
        //window.location.href = "page2.html"
    } else {
        alert("Incorreta")
    }
}