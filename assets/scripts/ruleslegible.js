function indexpg(num){
    var a = document.getElementById("resp").value.toLowerCase().replace(/\s/g,'');
    console.log(`${a}, ${window.location.href}`);
    if (num === 1) {
        if (a === "azul"){
            window.alert("Certa Resposta");
            window.location.href = "page2.html";
        } else {
            window.alert('Incorreta');
        }
    } else if (num === 2) {
        if (a === "escravos"){
            window.alert("Certa Resposta");
            window.location.href = "page3.html";
        } else {
            window.alert('Incorreta');
        }
    } else if (num === 3) {
        if (a === "sabado"){
            window.alert("Certa Resposta");
            window.location.href = "page4.html";
        } else if (a === "sábado"){
            window.alert("Certa Resposta");
            window.location.href = "page4.html";
        } else {
            window.alert('Incorreta')
        }
    } else if (num === 4) {
        if (a === "campinagrande"){
            window.alert("Vc chegou ao final!!!");
            //window.location.href = "page4.html";
        } else {
            window.alert('Incorreta');
        }
    }
}
