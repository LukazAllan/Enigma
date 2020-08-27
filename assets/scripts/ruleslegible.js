function indexpg(num){
    var a = document.getElementById("resp").value.toLowerCase().replace(/\s/g,'');
    console.log(`${a}, ${window.location.href}`);
    if (num === 1) {
        if (a === "azul"){
            window.alert("Certa Resposta");
            window.location.href = "2.html";
        } else {
            window.alert('Poderia ter uma dica aqui, mas é muito fácil.');
        }
    } else if (num === 2) {
        if (a === "vos"){
            window.alert("Certa Resposta");
            window.location.href = "jzgy5w.html";
        } else if (a === "vós"){
            window.alert("Certa Resposta");
            window.location.href = "jzgy5w.html";
        } else {
            window.alert('Incorreta')
        }
    } else if (num === 3) {
        if (a === "escreveis"){
            window.alert("Vc chegou ao final!!!");
            //window.location.href = ".html";
        } else {
            window.alert('Incorreta');
        }
    } else if (num === 4) {
        if (a === "vossa"){
            window.alert("Certa Resposta");
            window.location.href = "4.html";
        } else {
            window.alert('Incorreta')
        }
    } else if (num === 5) {
        if (a === "vos"){
            window.alert("Certa Resposta");
            window.location.href = "jzgy5w.html";
        } else if (a === "vós"){
            window.alert("Certa Resposta");
            window.location.href = "jzgy5w.html";
        } else {
            window.alert('Incorreta')
        }
    } else if (num === 0) {
        if (a === "escravos"){
            window.alert("Certa Resposta");
            window.location.href = "3.html";
        } else {
            window.alert('Incorreta');
        }
    } else if (num === 6) {
        if (a === "vos"){
            window.alert("Certa Resposta");
            window.location.href = "jzgy5w.html";
        } else if (a === "vós"){
            window.alert("Certa Resposta");
            window.location.href = "jzgy5w.html";
        } else {
            window.alert('Incorreta')
        }
    }
}
